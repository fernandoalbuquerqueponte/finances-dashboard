import * as S from './Signin.styled'

import { Input } from "../../components/Input"

import womenpng from "../../assets/women.png"
import { Heart } from '@phosphor-icons/react'


export const SignIn = () => {
    return (
        <>
            <S.Container>
                <S.Title>Finances Dashboard</S.Title>
                <S.SubTitle>Crie e gerencie suas finanças de forma fácil</S.SubTitle>
                <Input placeholder='Digite o seu email' label='E-mail' type='email' />
                <Input
                    placeholder='Digite sua senha secreta'
                    label='Senha'
                    type='password'
                />
            </S.Container>
            <S.WomanImage src={womenpng} />
        </>
    )
}
