import { Card } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import './styles.css';

type FormState = {
  username: string;
  password: string;
};

export function Home() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<FormState>();
  const [hasError, setHasError] = useState(false);
  const navigate = useNavigate();

  const onSubmit = (data: FormState) => {
    navigate('/admin/dashboard');
    // makeLogin(data)
    //   .then((response) => {
    //     setHasError(false);
    //     saveSessionData(response.data);
    //     history.replace(from);
    //   })
    //   .catch(() => {
    //     setHasError(true);
    //   });
  };

  return (
    <div className='home-container'>
      <div className='home-card card-base'>
        <div className='home-title'>
          <img src={logo} alt="Museu Imperial" className="home-logo" />
        </div>
        {hasError && (
          <div className="alert alert-danger mt-5">
            Usuário ou senha inválidos.
          </div>
        )}
        <form className="home-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4 login-input">
            <h5 className="home-input mb-2">Usuário: </h5>
            <input
              type="email"
              placeholder="Email"
              {...register("username", {
                required: "Campo Obrigatório!",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Email inválido."
                }
              })}
              className={`form-control input-base login-input ${errors.username ? "is-invalid" : ""}`}
            />
            {errors.username && (
              <div className="invalid-feedback d-block">
                {errors.username.message}
              </div>
            )}
          </div>
          <div className="mb-3 login-input">
            <h5 className="home-input mb-2">Senha: </h5>
            <input
              type="password"
              placeholder="Senha"
              {...register("password", {
                required: "Campo Obrigatório.",
                minLength: 3
              })}
              className={`form-control input-base${errors.password ? "is-invalid" : ""
                }`}
            />
            {errors.password && (
              <div className="invalid-feedback d-block">
                {errors.password.message}
              </div>
            )}
          </div>
          <Link to="/auth/recover" className="home-login-link-recover">
            Esqueci a senha?
          </Link>
          <div className="login-submit">
            <button className="btn btn-primary home-login-btn">CONECTAR</button>
          </div>
        </form>
      </div>
    </div >
  )
}