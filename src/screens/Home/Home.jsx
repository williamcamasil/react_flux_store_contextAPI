import React, { useContext } from "react";
import { Context } from "../../context/store";

const Home = () => {
  const [state, dispatch] = useContext(Context);

  const handlerName = (name) => {
    dispatch({ type: 'SET_NAME', payload: name })
  }

  return (
    <>
      <p>{state.name}</p>
      <button onClick={() => { handlerName("William Camargo") }}>Trocar Nome</button>
    </>
  );
}

export default Home;
