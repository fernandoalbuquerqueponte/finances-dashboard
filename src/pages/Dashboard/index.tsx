import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../contexts/auth";

import * as S from "./Dashboard.styled";

import { db } from "../../services/firebaseConfig";
import {
  collection,
  query,
  orderBy,
  limit,
  where,
  onSnapshot,
} from "firebase/firestore";

import { currencyFormatter } from "../../utils/currencyFormatter";

import { TransactionModal } from "../../components/TransactionModal";
import { TransactionCard } from "../../components/TransactionCard";
import { NoTransactions } from "../../components/NoTransactions";
import { SpinnerLoading } from "../../components/Spinner";
import { Header } from "../../components/Header";
import { Card } from "../../components/Card";

export interface FinanceItemProps {
  id?: string;
  type?: "entrada" | "saída";
  nameOfFinance?: string;
  uid?: string;
  value?: number;
  description?: string;
  created?: Date;
  createdFormated?: string;
}

export const Dashboard: React.FC = () => {
  const { user } = useContext(AuthContext);

  const [finances, setFinances] = useState<FinanceItemProps[]>([]);
  const [loadingFinances, setLoadingFinances] = useState(true);
  const [isEmpty, setIsEmpty] = useState(false);
  const [showFinanceModal, setShowFinanceModal] = useState(false);
  const [financeDetails, setFinanceDetails] = useState<FinanceItemProps>();
  const [totalValueCash, setTotalValueCash] = useState<number>();
  const [financeCashOutBack, setFinanceCashOutBack] = useState<number>();
  const [financeCashEntrace, setFinanceCashEntrace] = useState<number>();

  const handleOpenModal = async (finance: FinanceItemProps) => {
    setShowFinanceModal(true);
    setFinanceDetails(finance);
  };

  const handleCloseModal = () => {
    setShowFinanceModal(!showFinanceModal);
  };

  useEffect(() => {
    const docRef = collection(db, "finances");
    const FinancesLoaging = async () => {
      const q = query(
        docRef,
        orderBy("created", "desc"),
        limit(10),
        where("uid", "==", user?.uid)
      );

      onSnapshot(q, (snapshot) => {
        let lista: FinanceItemProps[] = [];

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
          });
        });

        if (lista.length <= 0) {
          setIsEmpty(true);
        } else {
          setIsEmpty(false);
        }
        setFinances(lista);

        const TotalValueOut = lista
          .filter((type) => type.type === "saída")
          .reduce((acc, item) => acc + (item.value as number), 0);

        setFinanceCashOutBack(TotalValueOut);

        const totalValueEntrace = lista
          .filter((type) => type.type === "entrada")
          .reduce((acc, item) => acc + (item.value as number), 0);
        setFinanceCashEntrace(totalValueEntrace);

        const totalValue = lista
          .filter((type) => type.type === "entrada" || type.type === "saída")
          .reduce((acc, item) => acc + (item.value as number), 0);

        setTotalValueCash(totalValue);

        setLoadingFinances(false);
      });
    };
    FinancesLoaging();
  }, []);

  return (
    <>
      <Header />
      <S.DashboardContainer>
        <div>
          <S.CardValuesContainer>
            <Card
              type="Total"
              icon="Total"
              value={
                totalValueCash
                  ? currencyFormatter(String(totalValueCash))
                  : "R$ 0,00"
              }
            />

            <Card
              type="Entrada"
              icon="Entrada"
              value={
                financeCashEntrace
                  ? currencyFormatter(String(financeCashEntrace))
                  : "R$ 0,00"
              }
            />

            <Card
              type="Saída"
              icon="Saída"
              value={
                financeCashOutBack
                  ? `- ${currencyFormatter(String(financeCashOutBack))}`
                  : "R$ 0,00"
              }
            />
          </S.CardValuesContainer>
        </div>
        <S.TransactionContainer>
          {loadingFinances ? (
            <S.LoadingContainer>
              <SpinnerLoading />
            </S.LoadingContainer>
          ) : isEmpty ? (
            <S.NoTransactionsContainer>
              <NoTransactions name={user?.name} />
            </S.NoTransactionsContainer>
          ) : (
            <div>
              {finances?.map((finance, index) => (
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

        {/* <SpinnerLoading /> */}
      </S.DashboardContainer>
    </>
  );
};
