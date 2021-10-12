import React, { useContext } from "react";
import { Context } from "../../context/store";
import { Link } from "react-router-dom";

const Home = () => {
  const [stateA, dispatchA] = useContext(Context);
  const [stateB, dispatchB] = useContext(Context);

  const handlerName = (name) => {
    dispatchA({ type: 'SET_NAME', payload: name })
  }

  const handlerCompany = (company) => {
    dispatchB({ type: 'SET_COMPANY', payload: company })
  }

  return (
    <>
      <p>{stateA.name}</p>
      <button onClick={() => { handlerName("William Camargo") }}>Trocar Nome</button>
      <br />
      <hr />
      <Link to={{ pathname: '/Form' }} >Formulário</Link>

      <hr />
      <p>EMPRESA: {stateB.company}</p>
      <button onClick={() => { handlerCompany("Canon do Brasil") }}>Trocar Nome Empresa</button>

    </>
  );
}

export default Home;
