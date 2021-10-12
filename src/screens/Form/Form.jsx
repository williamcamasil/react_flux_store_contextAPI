import React, { useContext } from "react";
import { Context } from "../../context/store";

const Form = () => {
    const [state, dispatch] = useContext(Context);

    return (
        <>
            <p>{state.name}</p>
        </>
    );
}

export default Form;
