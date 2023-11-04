import * as S from './Signin.styled'

import { Input } from "../../components/Input"
import { Button } from '../../components/Button'

import womenpng from "../../assets/women.png"
import { Heart } from '@phosphor-icons/react'


export const SignIn = () => {
    return (
        <>
            <S.Container>
                <S.Title>Finances Dashboard</S.Title>
                <S.SubTitle>Crie e gerencie suas finanças de forma fácil</S.SubTitle>

                <S.FormArea>
                    <Input 
                    placeholder='Digite o seu email' 
                    type='email' 
                    label='E-mail' 
                    />
                    <Input
                        label='Senha'
                        placeholder='Digite sua senha secreta'
                        type='password'
                    />

                    <Button
                        name="Fazer login"
                        width={400}
                        height={35}
                        color='success'
                    />
                </S.FormArea>
            </S.Container>
            {/* <S.WomanImage src={womenpng} /> */}
        </>
    )
}
