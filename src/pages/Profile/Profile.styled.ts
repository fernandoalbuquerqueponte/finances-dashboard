import styled from "styled-components";

export const ProfileContainer = styled.div``;

export const LabelAvatar = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  > img {
    border-radius: 50%;
    object-fit: cover;
  }

  > input {
    display: none;
  }

  > span {
    z-index: 99;
    position: absolute;
    opacity: 0.5;
    transition: all 0.5;
    &:hover {
      opacity: 1;
      transform: scale(1.1);
    }
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0 13px;
  gap: 15px;
  margin: 30px auto;
  max-width: 500px;
  > div {
    display: flex;
    justify-content: space-between;
  }
  > span {
    opacity: 0.5;
    > svg {
      color: #c4c4c4;
      width: 30px;
      height: 30px;
    }
    &:hover {
      opacity: 1;
      cursor: pointer;
    }
  }
`;
