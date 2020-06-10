import React from "react";
import './index.css';
import useForm from "../../hooks/useForm";

export default () => {
  const [{ values, loading }, handleChange, handleSubmit] = useForm();

  const enviarContato = () => {
    console.log(values);
  };

  return (
    <div className="post">
      <h1>Contato</h1>
      <form onSubmit={handleSubmit(enviarContato)}>
        <input
          onChange={handleChange}
          type="text"
          name="title"
          placeholder="Digite o seu nome"
        />
        <input
          onChange={handleChange}
          type="text"
          name="status"
          placeholder="Digite o status"
        />
        <button type="submit">{loading ? "Enviando..." : "Enviar"}</button>
      </form>
    </div>
  );
};
