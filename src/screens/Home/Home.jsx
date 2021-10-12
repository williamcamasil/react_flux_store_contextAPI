import React, { useContext } from "react";
import { Context } from "../../context/store";
import { Link } from "react-router-dom";

const Home = () => {
  const [state, dispatch] = useContext(Context);

  const handlerName = (name) => {
    dispatch({ type: 'SET_NAME', payload: name })
  }

  return (
    <>
      <p>{state.name}</p>
      <button onClick={() => { handlerName("William Camargo") }}>Trocar Nome</button>
      <br />
      <Link to={{ pathname: '/Form' }} >Formulário</Link>
    </>
  );
}

export default Home;
