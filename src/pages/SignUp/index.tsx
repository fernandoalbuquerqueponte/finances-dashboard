import { useContext } from "react";
import * as S from "../SignIn/Signin.styled";

import { AuthContext } from "../../contexts/auth";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import logoSvg from "../../assets/logo.png";
import { Link } from "react-router-dom";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const createUserSchema = z.object({
  name: z
    .string()
    .nonempty("O nome é obrigatório")
    .max(16, "O nome pode ter no máximo 16 caracteres"),
  email: z
    .string()
    .email("Formato de email inválido")
    .nonempty("O email é obrigatório"),
  password: z
    .string()
    .min(6, "A senha precisa de no minimo 6 caracteres")
    .nonempty("A senha é obrigatória"),
});

type createUserSchema = z.infer<typeof createUserSchema>;

export const SignUp = () => {
  const { signUp, loadingAuth } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<createUserSchema>({
    resolver: zodResolver(createUserSchema),
  });

  const handleSignUp = async (data: any) => {
    await signUp(data.name, data.email, data.password);
  };

  return (
    <S.Container>
      <img src={logoSvg} alt="Dev" />
      <h1>FinancesDev</h1>
      <h3>Crie e gerencie suas finanças de forma fácil</h3>
      <form onSubmit={handleSubmit(handleSignUp)}>
        <div>
          <Input
            placeholder="Digite o seu nome"
            type="text"
            label="Nome"
            autoComplete="off"
            hasError={!!errors.name}
            {...register("name")}
          />

          {errors.name?.message && <span>{errors.name.message}</span>}
        </div>
        <div>
          <Input
            placeholder="Digite o seu email"
            type="text"
            label="E-mail"
            autoComplete="off"
            hasError={!!errors.email}
            {...register("email")}
          />
          {errors.email?.message && <span>{errors.email.message}</span>}
        </div>

        <div>
          <Input
            label="Senha"
            placeholder="Digite sua senha secreta"
            type="text"
            autoComplete="off"
            hasError={!!errors.password}
            {...register("password")}
          />
          {errors.password?.message && <span>{errors.password.message}</span>}
        </div>

        <Button width={400} height={35} color="success" type="submit">
          {loadingAuth ? "Carregando" : "Fazer Login"}
        </Button>
      </form>
      <div>
        <p>Já possui uma conta?</p>
        <Link to="/">Faça o login aqui</Link>
      </div>
    </S.Container>
  );
};
