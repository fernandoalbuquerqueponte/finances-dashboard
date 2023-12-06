import React from 'react'
import * as S from './Dashboard.styled'
import { Header } from '../../components/Header'
import { Title } from '../../components/Title'
import { Card } from '../../components/Card'

export const Dashboard: React.FC = () => {
   return (
      <S.DashboardContainerr>
         <Header />
         <Title title='FinancesDashboard' />
         <S.DashboardContainer>
            <Card type="Total" icon="Total" value='R$ 5.000,00' />
            <Card type='Entrada' icon="Entrada" value='R$ 2.000,00' />
            <Card type='Saída' icon="Saída" value='R$ 75.000,00' />
         </S.DashboardContainer>
      </S.DashboardContainerr>
   )
}