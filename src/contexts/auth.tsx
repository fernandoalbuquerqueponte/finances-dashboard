import React, { createContext, useEffect, useState } from 'react'

import { auth, db } from '../services/firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';

type AuthContextProps = {
   signIn: (email: string, password: string) => void;
   signUp: (name: string, email: string, password: string) => void;
   signed: boolean;
   user: null | object;
   loadingAuth: boolean;
   loading: boolean;
}

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
   const [user, setUser] = useState<{} | null>(null)
   const [loadingAuth, setLoadingAuth] = useState(false)
   const [loading, setLoading] = useState(true)

   const signUp = async (name: string, email: string, password: string) => {
      setLoadingAuth(true)

      await createUserWithEmailAndPassword(auth, email, password)
         .then(async (value) => {
            let uid = value.user.uid

            await setDoc(doc(db, 'users', uid), {
               name: name,
               avatarUrl: null,
            })
               .then(() => {
                  let data = {
                     uid: uid,
                     email: value.user.email,
                     name: name,
                     avatarUrl: null,
                  }
                  setUser(data)
                  storageData(data)
                  alert("Conta registrada com sucesso!")
                  console.log(name, email, password)
               })
         })
      setLoadingAuth(false)
   }

   const signIn = async (email: string, password: string) => {
      setLoadingAuth(true)

      await signInWithEmailAndPassword(auth, email, password)
         .then(async (value) => {
            let uid = value.user.uid
            const docRef = doc(db, "users", uid)

            const docSnapshot = await getDoc(docRef)

            if (docSnapshot) {
               let data = {
                  uid: uid,
                  email: value.user.email,
                  name: docSnapshot.data()?.name,
                  avatarUrl: docSnapshot.data()?.avatar
               }

               setUser(data)
               storageData(data)
               alert(`User ${data.name} Logged in`)
            }

         }).catch((error) => {
            console.log(error)
         })
      setLoadingAuth(false)
   }

   const storageData = (data: object) => {
      localStorage.setItem('@finances-dashboard', JSON.stringify(data))
   }

   return (
      <AuthContext.Provider value={{
         signed: !!user,
         signUp,
         signIn,
         user,
         loadingAuth,
         loading,
      }}>
         {children}
      </AuthContext.Provider>
   )
}