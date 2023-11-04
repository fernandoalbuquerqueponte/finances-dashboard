import styled from "styled-components";

// export const Container = styled.div`
//    display: flex;
//    flex-direction: column;
// `

export const Label = styled.label`
   color: ${({ theme }) => theme.COLORS.white};
   width: 100%;
   font-size: 0.8rem;
   justify-content: flex-end;
   padding-left: 0.5rem;
`

export const Input = styled.input`
   width: 100%;
   height: 50px;
   background-color: #1E1E21;
   padding: 1rem;
   border-radius: 6px;
   border: none;
   color: ${({ theme }) => theme.COLORS.white};
   margin-bottom: 1rem;
   outline: none;

   &:focus {
      border: 2px solid ${({ theme }) => theme.COLORS.green900};
   }

   &::placeholder {
      color: #7C7C8A;
      font-size:14px
   }
`