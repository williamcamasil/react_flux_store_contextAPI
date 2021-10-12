import React, { useContext } from "react";
import { Context } from "../../context/store";
import { Link } from "react-router-dom";

const Home = () => {
  const [state, dispatch] = useContext(Context);

  const handlerName = (name) => {
    dispatch({ type: 'SET_NAME', payload: name })
  }

  const handlerAll = (name, age, work) => {
    dispatch({
      type: 'SET_ALL',
      payload: [name, age, work]
    })
  }

  return (
    <>
      <p>{state.name}</p>
      <button onClick={() => { handlerName("William Camargo") }}>Trocar Nome</button>
      <br />
      <hr />
      <Link to={{ pathname: '/Form' }} >Formulário</Link>

      <hr />
      <p>NOME: {state.name}</p>
      <p>IDADE: {state.age}</p>
      <p>TRABALHA: {state.work ? "Trabalha" : "Não Trabalha"}</p>
      <button onClick={() => { handlerAll("William Camargo", 26, true) }}>Trocar todos os campos</button>

    </>
  );
}

export default Home;
