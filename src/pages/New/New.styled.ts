import styled from "styled-components";

export const NewContainer = styled.div`
   >form {
      display: flex;
      flex-direction: column;
      margin: 40px 20px;
      max-width:  700px;

      >label{
         color: ${({ theme }) => theme.COLORS.white};
         font-size: 1rem;
         padding-left: 0.6rem;
         margin-bottom: 5px;
      }

      >textarea {
         max-width: 700px;
         background-color: #1e1e1e;
         color: #fafafa;
         font-size: 16px;
         padding: 10px;
         height: 150px;
         border-radius: 7px;
         border: none;
      }
   }
`

export const RadioInputContainer = styled.div`
   display: flex;
   color: #fafafa;

   >input[type="radio"]{
      width: 16px;
      cursor: pointer;
   }

   >span {
      margin: 0 15px;
   }
`