import React, { createContext, useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import { auth, db } from "../services/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";

type User = {
  uid: string;
  email: string | null;
  name: string;
  avatarUrl: string | null;
};

type AuthContextProps = {
  signIn: (email: string, password: string) => void;
  signUp: (name: string, email: string, password: string) => void;
  storageData: (data: object) => void;
  handleLogoutUser: () => void;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  signed: boolean;
  user: User | null;
  loadingAuth: boolean;
  loading: boolean;
};

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps
);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loadingAuth, setLoadingAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const UserIslogged = async () => {
      const isUserLogged = localStorage.getItem("@finances-dashboard");

      if (isUserLogged) {
        setUser(JSON.parse(isUserLogged));
        setLoading(false);
      }
      setLoading(false);
    };
    UserIslogged();
  }, []);

  const signUp = async (name: string, email: string, password: string) => {
    setLoadingAuth(true);

    await createUserWithEmailAndPassword(auth, email, password).then(
      async (value) => {
        let uid = value.user.uid;

        await setDoc(doc(db, "users", uid), {
          name: name,
          avatarUrl: null,
          uid: uid,
        })
          .then(() => {
            let data = {
              uid: uid,
              email: value.user.email,
              name: name,
              avatarUrl: null,
            };
            setUser(data);
            storageData(data);
            toast.success("Conta criada com sucesso!", {
              position: "bottom-right",
            });
            navigate("/dashboard");
          })
          .catch((error) => {
            console.log(error);
            toast.error("Erro ao criar conta, por favor tente novamente!", {
              position: "bottom-right",
            });
          });
      }
    );
    setLoadingAuth(false);
  };

  const signIn = async (email: string, password: string) => {
    setLoadingAuth(true);

    await signInWithEmailAndPassword(auth, email, password)
      .then(async (value) => {
        let uid = value.user.uid;
        const docRef = doc(db, "users", uid);

        const docSnapshot = await getDoc(docRef);

        if (docSnapshot) {
          let data = {
            uid: uid,
            email: value.user.email,
            name: docSnapshot.data()?.name,
            avatarUrl: docSnapshot.data()?.avatarUrl,
          };

          setUser(data);
          storageData(data);
          navigate("/dashboard");
          toast.success("Bem vindo de volta!", { position: "bottom-right" });
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error(
          "Erro ao fazer login, verifique suas credenciais e tente novamente!",
          { position: "bottom-right" }
        );
      });
    setLoadingAuth(false);
  };

  const storageData = (data: object) => {
    localStorage.setItem("@finances-dashboard", JSON.stringify(data));
  };

  const handleLogoutUser = async () => {
    await signOut(auth).then(() => {
      localStorage.removeItem("@finances-dashboard");
      setUser(null);
      toast.success("Usuário deslogado com sucesso!", {
        position: "bottom-right",
      });
    });
  };

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        signUp,
        signIn,
        handleLogoutUser,
        user,
        setUser,
        loadingAuth,
        loading,
        storageData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
