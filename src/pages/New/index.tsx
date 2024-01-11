import React, { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/auth';

import { db } from '../../services/firebaseConfig';
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore';

import { Header } from '../../components/Header'
import { Title } from '../../components/Title'
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import * as S from './New.styled'

export const New = () => {
   const { user } = useContext(AuthContext)

   const [type, setType] = useState("entrada")
   const [description, setDescription] = useState("")
   const [value, setValue] = useState("")

   const handleChangeType = (e: any) => setType(e.target.value)

   const handleSubmit = (e: any) => {
      e.preventDefault()
   }

   return (
      <S.NewContainer>
         <Header />
         <Title title='Adicionar' />

         <form onSubmit={handleSubmit}>
            <label>Tipo de finança:</label>
            <S.RadioInputContainer>
               <input
                  type="radio"
                  value="entrada"
                  onChange={handleChangeType}
                  checked={type === "entrada"}
               />
               <span>Entrada</span>

               <input
                  type="radio"
                  value="saída"
                  onChange={handleChangeType}
                  checked={type === "saída"}
               />
               <span>Saída</span>
            </S.RadioInputContainer>
            <Input
               placeholder='Ex: $4000,00'
               value={value}
               onChange={(e) => setValue(e.target.value)}
               type='number'
               label='Valor'
            />
            <label>Descrição</label>
            <textarea
               placeholder='Descreva sua descrição(opcional)'
               value={description}
               onChange={(e) => setDescription(e.target.value)}
            />
            <br />
            <Button
               name='Salvar'
               color='success'
               type='submit'
               width={90}
               height={50}
            />
         </form>
      </S.NewContainer>
   )
}