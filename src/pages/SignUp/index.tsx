import { useContext, useState } from "react";
import * as S from "../SignIn/Signin.styled";

import { AuthContext } from "../../contexts/auth";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import logoSvg from "../../assets/logo.png";
import { Link } from "react-router-dom";

export const SignUp = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { signUp, loadingAuth } = useContext(AuthContext);

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email !== "" && email !== "") {
      await signUp(name, email, password);
    }
  };

  return (
    <S.Container>
      <img src={logoSvg} alt="Dev" />
      <h1>FinancesDev</h1>
      <h3>Crie e gerencie suas finanças de forma fácil</h3>
      <form onSubmit={handleSignUp}>
        <Input
          placeholder="Digite o seu nome"
          type="text"
          label="Nome"
          value={name}
          autoComplete="off"
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="Digite o seu email"
          type="text"
          label="E-mail"
          value={email}
          autoComplete="off"
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          label="Senha"
          placeholder="Digite sua senha secreta"
          type="text"
          autoComplete="off"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          name={loadingAuth ? "Carregando" : "Fazer Login"}
          width={400}
          height={35}
          color="success"
          type="submit"
        />
      </form>
      <div>
        <p>Já possui uma conta?</p>
        <Link to="/">Faça o login aqui</Link>
      </div>
    </S.Container>
  );
};
