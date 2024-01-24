import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../contexts/auth';

import * as S from './Dashboard.styled';

import { db } from '../../services/firebaseConfig';
import {
   getDocs,
   collection,
   query,
   orderBy,
   limit,
   where,
   onSnapshot
} from 'firebase/firestore';

import { TransactionCard } from '../../components/TransactionCard';
import { Header } from '../../components/Header';
import { Title } from '../../components/Title';
import { Card } from '../../components/Card';

interface FinanceItemProps {
   id: string
   type: "entrada" | "saída"
   nameOfFinance: string
   userUid: string
   value: string
   description: string
   created: Date
   createdFormated: string
}

export const Dashboard: React.FC = () => {
   const { user, storageData } = useContext(AuthContext);

   const [finances, setFinances] = useState<FinanceItemProps[]>();
   
   const docRef = collection(db, "finances");
   useEffect(() => {
      const FinancesLoaging = async () => {
         const q = query(
            docRef,
            orderBy("created", "desc"),
            limit(5),
            where("uid", "==", user?.uid)
         );

         const querySnapshot = await getDocs(q);

         const unsub = onSnapshot(q, (snapshot) => {
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
                  typeSaida: doc.data().typeSaida
               });
            });
            setFinances(lista);
         })
      }
      FinancesLoaging();
   }, [])

   return (
      <S.DashboardContainer>
         <Header />
         <Title title='FinancesDashboard' />
         <S.CardValuesContainer>
            <Card type="total" icon="total" value='R$ 400,00' />
            <Card type='entrada' icon="entrada" value='R$ 0,00' />
            <Card type='saída' icon="saída" value='R$ 400,00' />
         </S.CardValuesContainer>
         <S.TransactionContainer>
            {finances?.map((finance) => (
               <TransactionCard
                  key={finance.id}
                  date={finance.createdFormated}
                  type={finance.type}
                  financeName={finance.nameOfFinance}
                  value={finance.value}
               />
            ))}
         </S.TransactionContainer>
      </S.DashboardContainer>
   )
}