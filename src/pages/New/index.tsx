import React, { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/auth';

import { db } from '../../services/firebaseConfig';
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore';

import { format } from 'date-fns'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom';

import { Header } from '../../components/Header'
import { Title } from '../../components/Title'
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import * as S from './New.styled'

export const New = () => {
   const { user } = useContext(AuthContext);
   const navigate = useNavigate();

   const [type, setType] = useState("entrada");
   const [nameOfFinance, setNameOfFinance] = useState("");
   const [description, setDescription] = useState("");
   const [value, setValue] = useState("");

   const handleChangeType = (e: React.ChangeEvent<HTMLInputElement>) => setType(e.target.value);

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();

      const numericValue = parseFloat(value);

      await addDoc(collection(db, "finances"), {
         created: new Date,
         createdFormated: format(new Date, 'dd/MM/yyyy'),
         type: type,
         nameOfFinance: nameOfFinance,
         value: numericValue,
         description: description,
         uid: user?.uid,
      }).then(() => {
         navigate('/dashboard');
         toast.success("Finança adicionada com sucesso!", { position: 'bottom-right' });
      }).catch((err) => {
         console.log(err);
         toast.error("Erro ao cadastrar finança", { position: 'bottom-right' });
         setNameOfFinance("");
         setDescription("");
      })
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
               placeholder='Ex: IPVA do carro '
               value={nameOfFinance}
               onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNameOfFinance(e.target.value)}
               type='text'
               label='Nome da finança'
            />
            <Input
               placeholder='Ex: $4000,00'
               onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
               value={value.toString()}
               type='number'
               label='Valor'
            />
            <label>Descrição</label>
            <textarea
               placeholder='Descreva sua descrição(opcional)'
               value={description}
               onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value)}
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