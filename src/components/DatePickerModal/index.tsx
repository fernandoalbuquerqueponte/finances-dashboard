import { DayPicker } from "react-day-picker";
import * as S from "./DatePickerModal.styled";
import { X } from "@phosphor-icons/react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import "react-day-picker/dist/style.css";

interface DatePickerModalProps {
  date: Date | undefined;
  closeModal: () => void;
  onSelectDate: (date: Date) => void;
}

export function DatePickerModal({
  closeModal,
  onSelectDate,
  date,
}: DatePickerModalProps) {
  const handleDateSelect = (date: any) => {
    onSelectDate(date);
  };
  let footer = <p>Por favor, selecione uma data.</p>;
  if (date) {
    footer = <p>Você selecionou: {format(date, "PP")}.</p>;
  }

  return (
    <S.DatePickerModalContainer>
      <div>
        <h1>Filtrar data</h1>
        <X onClick={closeModal} />
      </div>
      <S.DayPickerContainer>
        <DayPicker
          mode="single"
          onSelect={handleDateSelect}
          locale={ptBR}
          toDate={new Date()}
          footer={footer}
          styles={{
            head_cell: {
              textTransform: "capitalize",
            },
            caption: {
              textTransform: "capitalize",
            },
          }}
        />
      </S.DayPickerContainer>
    </S.DatePickerModalContainer>
  );
}
