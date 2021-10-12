import React, { useContext } from "react";
import { Context } from "../../context/store";

const Form = () => {
    const [stateA] = useContext(Context);

    return (
        <>
            <p>{stateA.name}</p>
        </>
    );
}

export default Form;
