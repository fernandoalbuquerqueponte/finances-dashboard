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
        <div>
          <div>
            <h2>Nome da finança:</h2>
            <p>{finance?.nameOfFinance}</p>
          </div>
          <div>
            <h2>Valor:</h2>
            <p>{currencyFormatter(String(finance?.value))}</p>
          </div>
          <div>
            <h2>Tipo da finança:</h2>
            <p>{finance?.type}</p>
          </div>
          <div>
            <h2>Data:</h2>
            <p>{finance?.createdFormated}</p>
          </div>
          <div>
            <h2>Descrição:</h2>
            <p>{finance?.description}</p>
          </div>
        </div>
      </S.ModalContentContainer>
      <S.ButtonsModalContainer>
        <Link to={`/new/${finance?.id}`}>
          <Button width={100} height={40} color="primary">
            Editar
          </Button>
        </Link>
        <Button
          onClick={() => handleRemoveFinance(finance?.id)}
          width={100}
          height={40}
          color="danger"
        >
          Excluir
        </Button>
      </S.ButtonsModalContainer>
    </S.ModalContainer>
  );
};
