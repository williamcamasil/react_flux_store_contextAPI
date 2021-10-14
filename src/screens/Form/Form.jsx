import React, { useContext } from "react";
import { PersonContext } from "../../context/person/index";

const Form = () => {
    const [statePerson] = useContext(PersonContext);

    return (
        <>
            <p>{statePerson.name}</p>
        </>
    );
}

export default Form;