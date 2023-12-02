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
            <Card />
            <Card />
            <Card />
         </S.DashboardContainer>
      </S.DashboardContainerr>
   )
}