import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../contexts/auth";

import * as S from "./Dashboard.styled";

import { db } from "../../services/firebaseConfig";
import {
  getDocs,
  collection,
  query,
  orderBy,
  limit,
  where,
  onSnapshot,
} from "firebase/firestore";

import { currencyFormatter } from "../../utils/currencyFormatter";

import { TransactionCard } from "../../components/TransactionCard";
import { Header } from "../../components/Header";
import { Card } from "../../components/Card";
import { NoTransactions } from "../../components/NoTransactions";
import { TransactionModal } from "../../components/TransactionModal";
import { Loading } from "../../components/Loading";

export interface FinanceItemProps {
  id?: string;
  type?: "entrada" | "saída";
  nameOfFinance?: string;
  userUid?: string;
  value?: string;
  description?: string;
  created?: Date;
  createdFormated?: string;
}

export const Dashboard: React.FC = () => {
  const { user } = useContext(AuthContext);

  const [finances, setFinances] = useState<FinanceItemProps[]>([]);
  const [loadingFinances, setLoadingFinances] = useState(true);
  const [isEmpty, setIsEmpty] = useState(false);
  const [totalValueCash, setTotalValueCash] = useState<any>();
  const [showFinanceModal, setShowFinanceModal] = useState(false);
  const [financeDetails, setFinanceDetails] = useState<any | null>(null);
  const [financeCashOutBack, setFinanceCashOutBack] = useState<any>("");
  const [financeCashEntrace, setFinanceCashEntrace] = useState<any>("");

  const handleOpenModal = async (finance: any) => {
    setShowFinanceModal(true);
    setFinanceDetails(finance);
  };

  const handleCloseModal = () => {
    setShowFinanceModal(!showFinanceModal);
  };

  useEffect(() => {
    const FinancesLoaging = async () => {
      const docRef = collection(db, "finances");
      setLoadingFinances(true);

      const q = query(
        docRef,
        orderBy("created", "desc"),
        limit(5),
        where("uid", "==", user?.uid)
      );

      // const querySnapshot = await getDocs(q);
      const unsub = onSnapshot(q, (snapshot) => {
        // let isCollectionEmpty = snapshot.size === 0;

        let lista: any[] = [];
        snapshot.forEach((doc) => {
          lista.push({
            id: doc.id,
            created: doc.data().created,
            createdFormated: doc.data().createdFormated,
            description: doc.data().description,
            nameOfFinance: doc.data().nameOfFinance,
            type: doc.data().type,
            uid: doc.data().uid,
            value: doc.data().value,
            typeEntrada: doc.data().typeEntrada,
            typeSaida: doc.data().typeSaida,
          });
        });

        if (lista.length === 0) {
          setIsEmpty(true);
        } else {
          setIsEmpty(false);
          setFinances(lista);
          const TotalValueOut = lista
            .filter((type) => type.type === "saída")
            .reduce((acc, item) => acc + item.value, 0);

          setFinanceCashOutBack(TotalValueOut);

          const totalValueEntrace = lista
            .filter((type) => type.type === "entrada")
            .reduce((acc, item) => acc + item.value, 0);
          setFinanceCashEntrace(totalValueEntrace);

          const totalValue = lista
            .filter((type) => type.type === "entrada" || type.type === "saída")
            .reduce((acc, item) => acc + item.value, 0);

          setTotalValueCash(totalValue);
        }
        setLoadingFinances(false);
      });
      return () => {
        unsub();
      };
    };
    FinancesLoaging();
  }, [user]);

  return (
    <>
      <Header />
      <S.DashboardContainer>
        <S.CardValuesContainer>
          <Card
            type="Total"
            icon="Total"
            value={
              totalValueCash ? currencyFormatter(totalValueCash) : "R$ 0,00"
            }
          />

          <Card
            type="Entrada"
            icon="Entrada"
            value={
              financeCashEntrace
                ? currencyFormatter(financeCashEntrace)
                : "R$ 0,00"
            }
          />

          <Card
            type="Saída"
            icon="Saída"
            value={
              financeCashOutBack
                ? `- ${currencyFormatter(financeCashOutBack)}`
                : "R$ 0,00"
            }
          />
        </S.CardValuesContainer>
        <S.TransactionContainer>
          {loadingFinances ? (
            <S.LoadingContainer>
              <Loading />
            </S.LoadingContainer>
          ) : isEmpty ? (
            <S.NoTransactionsContainer>
              <NoTransactions name={user?.name} />
            </S.NoTransactionsContainer>
          ) : (
            <div>
              {finances.map((finance, index) => (
                <TransactionCard
                  onClick={() => {
                    handleOpenModal(finance);
                  }}
                  key={finance.id}
                  date={
                    index === 0 ||
                    finance.createdFormated !==
                      finances[index - 1].createdFormated
                      ? finance.createdFormated
                      : ""
                  }
                  type={finance.type}
                  financeName={finance.nameOfFinance}
                  value={finance.value}
                />
              ))}
            </div>
          )}
        </S.TransactionContainer>
        {showFinanceModal && (
          <TransactionModal
            closeModal={handleCloseModal}
            finance={financeDetails}
          />
        )}
      </S.DashboardContainer>
    </>
  );
};
