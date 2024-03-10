import { Link } from "react-router-dom";
import * as S from "./Header.styled";
import { AuthContext } from "../../contexts/auth";
import { useContext } from "react";
import logo from "../../assets/logo.png";

export const Header = () => {
  const { user } = useContext(AuthContext);
  return (
    <S.HeaderContainer>
      <Link to="/dashboard">
        <img src={logo} alt="Finances" />
      </Link>

      <div>
        <Link to="/dashboard">Home</Link>
        <Link to="/new">Adicionar</Link>
        <Link to="/profile">Perfil</Link>
      </div>

      <img src={user?.avatarUrl as any} alt="" />
    </S.HeaderContainer>
  );
};
