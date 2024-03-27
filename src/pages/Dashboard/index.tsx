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
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
import { Calendar } from "@phosphor-icons/react";
import "react-day-picker/dist/style.css";
import { DatePickerModal } from "../../components/DatePickerModal";

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
  const [openDateButton, setOpenDateButton] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date>();

  const handleOpenModal = async (finance: FinanceItemProps) => {
    setShowFinanceModal(true);
    setFinanceDetails(finance);
  };

  const handleCloseModal = () => {
    setShowFinanceModal(!showFinanceModal);
  };

  const handleFilterDate = () => {
    setOpenDateButton(!openDateButton);
  };

  const handleCloseDatePickerModal = () => {
    setOpenDateButton(false);
  };

  const handleCancelFinanceFilter = () => {
    window.location.reload();
  };

  const handleDateSelect = async (date: Date) => {
    try {
      setSelectedDate(date);
      const formattedDate = format(date, "dd/MM/yyyy");

      const docRef = collection(db, "finances");
      const q = query(
        docRef,
        orderBy("created", "desc"),
        where("uid", "==", user?.uid),
        where("createdFormated", "==", formattedDate)
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
      });
    } catch (error) {
      throw error;
    } finally {
      setOpenDateButton(false);
    }
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
          <S.WelcomeContainer>
            <div>
              <h1>Olá, {user?.name}!</h1>
              <p>
                {format(new Date(), "EEEE',' dd 'de' MMMM", {
                  locale: ptBR,
                })}
              </p>
            </div>

            <S.WelcomeButtonsContainer>
              <Link to="/new">
                <Button width={115} height={35} color="primary">
                  Criar finança
                </Button>
              </Link>

              <Button
                width={115}
                height={35}
                color="secondary"
                onClick={() => handleFilterDate()}
              >
                <Calendar size={25} />
              </Button>
              {selectedDate && (
                <Button
                  width={115}
                  height={35}
                  color="danger"
                  onClick={handleCancelFinanceFilter}
                >
                  Cancelar filtro
                </Button>
              )}
            </S.WelcomeButtonsContainer>

            <S.DatePickerContainer>
              {openDateButton && (
                <DatePickerModal
                  onSelectDate={handleDateSelect}
                  closeModal={handleCloseDatePickerModal}
                  date={selectedDate}
                />
              )}
            </S.DatePickerContainer>
          </S.WelcomeContainer>
        </div>
        <S.TransactionContainer>
          {loadingFinances ? (
            <S.LoadingContainer>
              <SpinnerLoading size={45} color="#16a34a" />
            </S.LoadingContainer>
          ) : isEmpty ? (
            <S.NoTransactionsContainer>
              <NoTransactions name={user?.name} />
            </S.NoTransactionsContainer>
          ) : (
            <S.TransactionsCardContainer>
              <h1>Historico</h1>
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
            </S.TransactionsCardContainer>
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
