import React from 'react'
import * as S from './Dashboard.styled'
import { Header } from '../../components/Header'
import { Title } from '../../components/Title'
import { Card } from '../../components/Card'
import { TransactionCard } from '../../components/TransactionCard'

export const Dashboard: React.FC = () => {
   return (
      <S.DashboardContainer>
         <Header />
         <Title title='FinancesDashboard' />
         <S.CardValuesContainer>
            <Card type="Total" icon="Total" value='R$ 5.000,00' />
            <Card type='Entrada' icon="Entrada" value='R$ 2.000,00' />
            <Card type='Saída' icon="Saída" value='R$ 75.000,00' />
         </S.CardValuesContainer>
         <S.TransactionContainer>
            <TransactionCard />
         </S.TransactionContainer>

      </S.DashboardContainer>
   )
}