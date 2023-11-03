import styled from "styled-components";

export const Container = styled.div`
   display: flex;
   flex-direction: column;
`

export const Label = styled.label`
   color: ${({ theme }) => theme.COLORS.white};
   font-size: 13px;
`

export const Input = styled.input`
   width: 450px;
   height: 50px;
   background-color: #1E1E21;
   padding: 12px;
   border-radius: 6px;
   border: none;
   color: ${({ theme }) => theme.COLORS.white};
   margin-bottom: 15px;
   outline: none;

   &:focus {
      border: 2px solid ${({ theme }) => theme.COLORS.green900};
   }

   &::placeholder {
      color: #7C7C8A;
      font-size:14px
   }
`