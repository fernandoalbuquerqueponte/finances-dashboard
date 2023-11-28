import * as S from "./Title.styled"

export interface TitleAreaProps {
   title?: string;
}

export const Title = ({ title }: TitleAreaProps) => {
   return (
      <S.TitleArea>
         <S.NameTitle>
            {title}
         </S.NameTitle>
      </S.TitleArea>
   )
}