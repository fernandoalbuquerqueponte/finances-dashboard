import styled from "styled-components";

export const ProfileContainer = styled.div`  
`

export const LabelAvatar = styled.label`
   display: flex;
   max-width: 280px;
   max-height: 280px;
   margin-bottom: 35px;
   justify-content: center;
   align-items: center;
   cursor: pointer;

   >img {
      border-radius: 50%;
      object-fit: cover;
   }

   >input {
      display: none;
   }

   >span {
      z-index: 99;
      position: absolute;
      opacity: 0.7;
      transition: all 0.5;
      &:hover {
         opacity: 1;
         transform: scale(1.4);
      }
   }
`

export const FormContainer = styled.form`
   margin: 30px 10px;
   max-width: 600px;
   >div {
      display: flex;
      >div{
         display: flex;
         margin: 0 auto;
         padding: 0 10px;
      }
   }
   >span {
      opacity: 0.5;
      >svg {
         color: #c4c4c4 ;
         width: 30px;
         height: 30px;
      }
      &:hover {
         opacity: 1;
         cursor: pointer;
      }
   }
`