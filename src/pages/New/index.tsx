import React, { useState, useContext, useMemo } from "react";
import { AuthContext } from "../../contexts/auth";

import { db } from "../../services/firebaseConfig";
import { addDoc, collection, doc, getDoc, updateDoc } from "firebase/firestore";

import { format } from "date-fns";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import * as S from "./New.styled";

export const New = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [type, setType] = useState("entrada");
  const [nameOfFinance, setNameOfFinance] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");

  const handleChangeType = (e: React.ChangeEvent<HTMLInputElement>) =>
    setType(e.target.value);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (id) {
      const numericValue = parseFloat(value);
      const docRef = doc(db, "finances", id);

      await updateDoc(docRef, {
        nameOfFinance: nameOfFinance,
        description: description,
        type: type,
        value: numericValue,
      })
        .then(() => {
          navigate("/dashboard");
          toast.success("Finança atualizada com sucesso!", {
            position: "bottom-right",
          });
        })
        .catch((err) => {
          console.log(err);
        });
      return;
    }

    if (type !== "" && nameOfFinance !== undefined && value !== "") {
      const numericValue = parseFloat(value);

      await addDoc(collection(db, "finances"), {
        created: new Date(),
        createdFormated: format(new Date(), "dd/MM/yyyy"),
        type: type,
        nameOfFinance: nameOfFinance,
        value: numericValue,
        description: description,
        uid: user?.uid,
      })
        .then(() => {
          navigate("/dashboard");
          toast.success("Finança adicionada com sucesso!", {
            position: "bottom-right",
          });
        })
        .catch((err) => {
          console.log(err);
          toast.error("Erro ao cadastrar finança", {
            position: "bottom-right",
          });
          setNameOfFinance("");
          setDescription("");
        });
    } else {
      toast.error(
        "Erro ao cadastrar finança Por favor preencha todos os campos",
        { position: "bottom-right" }
      );
    }
  };

  useMemo(() => {
    const loadFinancesDetails = async (id: string | undefined) => {
      if (id) {
        try {
          const docRef = doc(db, "finances", id);
          await getDoc(docRef).then((snapshot) => {
            setNameOfFinance(snapshot.data()?.nameOfFinance);
            setType(snapshot.data()?.type);
            setDescription(snapshot.data()?.description);
            setValue(snapshot.data()?.value);
          });
        } catch (error) {
          console.log(error);
        }
      }
    };
    loadFinancesDetails(id);
  }, [id]);

  return (
    <S.NewContainer>
      <Header />

      <form onSubmit={handleSubmit}>
        <label>Tipo de finança</label>
        <div>
          <div>
            <input
              type="radio"
              value="entrada"
              onChange={handleChangeType}
              checked={type === "entrada"}
            />
            <span>Entrada</span>
          </div>

          <div>
            <input
              type="radio"
              value="saída"
              onChange={handleChangeType}
              checked={type === "saída"}
            />
            <span>Saída</span>
          </div>
        </div>
        <Input
          placeholder="Ex: Compras"
          value={nameOfFinance}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setNameOfFinance(e.target.value)
          }
          type="text"
          label="Nome da finança"
        />
        <Input
          placeholder="Ex: $4000,00"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setValue(e.target.value)
          }
          value={value.toString()}
          type="number"
          label="Valor"
        />
        <label>Descrição</label>
        <textarea
          placeholder="Descreva sua descrição (opcional)"
          value={description}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setDescription(e.target.value)
          }
        />
        <br />
        <Button color="success" type="submit" width={90} height={50}>
          {id ? "Salvar alterações" : "Salvar"}
        </Button>
      </form>
    </S.NewContainer>
  );
};
