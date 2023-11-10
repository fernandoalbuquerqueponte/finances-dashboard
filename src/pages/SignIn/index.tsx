import { useContext, useState } from 'react'
import * as S from './Signin.styled'

import { AuthContext } from '../../contexts/auth'

import { Input } from "../../components/Input"
import { Button } from '../../components/Button'

export const SignIn = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const { signIn, user, loadingAuth } = useContext(AuthContext);

    const handleSignIn = async (e: any) => {
        e.preventDefault();
        if (email !== '' && email !== '') {
            await signIn(email, password)
        }
    }

    return (
        <>
            <S.Container>
                <S.Title>Finances Dashboard</S.Title>
                <S.SubTitle>Crie e gerencie suas finanças de forma fácil</S.SubTitle>

                <S.FormArea onSubmit={handleSignIn}>
                    <Input
                        placeholder='Digite o seu email'
                        type='text'
                        label='E-mail'
                        value={email}
                        autoComplete='off'
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <Input
                        label='Senha'
                        placeholder='Digite sua senha secreta'
                        type='text'
                        autoComplete='off'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <Button
                        name={loadingAuth ? 'Carregando' : 'Fazer Login'}
                        width={400}
                        height={35}
                        color='success'
                        type='submit'
                    />

                    <S.HaveAccountMessageContainer>
                        Ainda não tem uma conta?
                        <S.CreateAccountLink to='/signUp'> Crie sua conta aqui!</S.CreateAccountLink>
                    </S.HaveAccountMessageContainer>
                </S.FormArea>
            </S.Container>
            {/* <S.WomanImage src={womenpng} /> */}
        </>
    )
}
