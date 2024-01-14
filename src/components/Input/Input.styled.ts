import styled from "styled-components";

export const InputContainer = styled.div`
   display: flex;
   width: 100%;
   flex-direction: column;
`

export const Label = styled.label`
   color: ${({ theme }) => theme.COLORS.white};
   max-width: 100%;
   font-size: 1rem;
   justify-content: flex-end;
   padding-left: 0.6rem;
`

export const Input = styled.input`
   height: 50px;
   background-color: #1E1E21;
   padding: 1rem;
   border-radius: 7px;
   border: none;
   color: ${({ theme }) => theme.COLORS.white};
   margin-bottom: 1rem;
   outline: none;

   &:focus {
      border: 2px solid ${({ theme }) => theme.COLORS.green900};
   }

   &::placeholder {
      color: #7C7C8A;
      font-size:15px
   }
`