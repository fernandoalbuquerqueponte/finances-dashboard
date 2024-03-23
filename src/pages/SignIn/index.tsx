import { useContext } from "react";
import * as S from "./Signin.styled";

import { AuthContext } from "../../contexts/auth";
import { useForm } from "react-hook-form";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import logoSvg from "../../assets/logo.png";
import { Link } from "react-router-dom";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SpinnerLoading } from "../../components/Spinner";

const createUserSchema = z.object({
  email: z
    .string()
    .email("Formato de email invalido")
    .nonempty("O email é obrigatório"),
  password: z
    .string()
    .min(6, "A senha precisa de no minimo 6 caracteres")
    .nonempty("A senha é obrigatória"),
});

type createUserSchema = z.infer<typeof createUserSchema>;

export const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<createUserSchema>({
    resolver: zodResolver(createUserSchema),
  });

  const { signIn, loadingAuth } = useContext(AuthContext);

  const handleSignIn = async (data: createUserSchema) => {
    await signIn(data.email, data.password);
  };

  return (
    <S.Container>
      <img src={logoSvg} alt="Dev" />
      <h1>FinancesDev</h1>
      <h3>Crie e gerencie suas finanças de forma fácil</h3>
      <form onSubmit={handleSubmit(handleSignIn)}>
        <div>
          <Input
            placeholder="Digite o seu email"
            label="E-mail"
            type="text"
            hasError={!!errors.email}
            autoComplete="off"
            {...register("email")}
          />
          {errors.email?.message && <span>{errors.email.message}</span>}
        </div>

        <div>
          <Input
            label="Senha"
            placeholder="Digite sua senha secreta"
            type="password"
            hasError={!!errors.password}
            {...register("password")}
          />
          {errors.password?.message && <span>{errors.password.message}</span>}
        </div>

        <Button width={400} height={35} color="success" type="submit">
          {loadingAuth ? (
            <SpinnerLoading size={22} color="#121214" />
          ) : (
            "Fazer Login"
          )}
        </Button>
      </form>
      <div>
        <p>Ainda não tem uma conta?</p>
        <Link to="/signUp">Crie sua conta aqui!</Link>
      </div>
    </S.Container>
  );
};
