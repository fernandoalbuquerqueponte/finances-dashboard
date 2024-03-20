import * as S from "./TransactionModal.styled";

import { FinanceItemProps } from "../../pages/Dashboard";
import { X } from "@phosphor-icons/react";
import { Button } from "../Button";
import { currencyFormatter } from "../../utils/currencyFormatter";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../services/firebaseConfig";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

export interface TransactionModalProps extends FinanceItemProps {
  finance: FinanceItemProps | undefined;
  closeModal: () => void;
}

export const TransactionModal = ({
  finance,
  closeModal,
}: TransactionModalProps) => {
  const handleRemoveFinance = async (id: string | undefined) => {
    if (!id) {
      return toast.error("erro ao excluir transação");
    }
    const docRef = doc(db, "finances", id);

    await deleteDoc(docRef)
      .then(() => {
        toast.success("Finança removida com sucesso!");
        closeModal();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <S.ModalContainer>
      <S.ModalNavbarContainer>
        <h1>Detalhes da finança</h1>
        <X onClick={closeModal} width={19} height={19} />
      </S.ModalNavbarContainer>
      <S.ModalContentContainer>
        <table>
          <thead>
            <tr>
              <th scope="col">Nome</th>
              <th scope="col">Data</th>
              <th scope="col">Tipo</th>
              <th scope="col">Valor</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Nome">{finance?.nameOfFinance}</td>
              <td data-label="Data">{finance?.createdFormated}</td>
              <td data-label="Tipo">
                <span>{finance?.type}</span>
              </td>
              <td data-label="Valor">
                {finance?.type === "entrada"
                  ? currencyFormatter(String(finance?.value))
                  : currencyFormatter(String(finance?.value))}
              </td>
            </tr>
          </tbody>
        </table>
        <div>
          <Link to={`/new/${finance?.id}`}>
            <Button name="Editar" width={100} height={40} color="primary" />
          </Link>
          <Button
            name="Excluir"
            onClick={() => handleRemoveFinance(finance?.id)}
            width={100}
            height={40}
            color="danger"
          />
        </div>
      </S.ModalContentContainer>
    </S.ModalContainer>
  );
};
