import { useContext, useState } from 'react'
import * as S from '../SignIn/Signin.styled'

import { AuthContext } from '../../contexts/auth'

import { Input } from "../../components/Input"
import { Button } from '../../components/Button'

export const SignUp = () => {
   const [name, setName] = useState('')
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const { signUp, user, loadingAuth } = useContext(AuthContext);

   const handleSignUp = async (e: any) => {
      e.preventDefault();
      if (name !== '' && email !== '' && password !== '') {
         await signUp(name, email, password)
      }
   }

   return (
      <>
         <S.Container>
            <S.Title>Finances Dashboard</S.Title>
            <S.SubTitle>Crie e gerencie suas finanças de forma fácil</S.SubTitle>

            <S.FormArea onSubmit={handleSignUp}>
               <Input
                  placeholder='Digite o seu nome de usuário'
                  type='text'
                  label='Nome'
                  value={name}
                  autoComplete='off'
                  onChange={(e) => setName(e.target.value)}
               />

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
                  name={loadingAuth ? 'Carregando...' : 'Criar Conta'}
                  width={400}
                  height={35}
                  color='success'
                  type='submit'
               />

               <S.HaveAccountMessageContainer>
                  Já tem uma conta?
                  <S.CreateAccountLink to='/'> Faça login aqui</S.CreateAccountLink>
               </S.HaveAccountMessageContainer>
            </S.FormArea>
         </S.Container>
         {/* <S.WomanImage src={womenpng} /> */}
      </>
   )
}
