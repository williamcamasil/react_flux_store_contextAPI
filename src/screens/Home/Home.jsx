import React, { useContext } from "react";
// import { GlobalStore } from "../../context/GlobalStore";
import { PersonContext } from "../../context/person/index";
import { CompanyContext } from "../../context/company/index";
import { Link } from "react-router-dom";

const Home = () => {
  const [statePerson, dispatchPerson] = useContext(PersonContext);
  const [stateCompany, dispatchCompany] = useContext(CompanyContext);

  const handlerName = (name) => {
    dispatchPerson({ type: 'SET_NAME', payload: name })
  }

  const handlerCompany = (company) => {
    dispatchCompany({ type: 'SET_COMPANY', payload: company })
  }

  return (
    <>
      <p>{statePerson.name}</p>
      <button onClick={() => { handlerName("William Camargo") }}>Trocar Nome</button>
      <br />
      <hr />
      <Link to={{ pathname: '/Form' }} >Formulário</Link>

      <hr />
      <p>EMPRESA: {stateCompany.company}</p>
      <button onClick={() => { handlerCompany("Canon do Brasil") }}>Trocar Nome Empresa</button>

    </>
  );
}

export default Home;
