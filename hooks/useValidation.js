import React, { useState, useEffect } from 'react'

const useValidation = ( initialState, initialFocus, validate, fn ) => {

    const [values, setValues] = useState(initialState);
    const [errors, setErrors] = useState({});
    const [submit, setSubmit] = useState(false);
    const [focus, setFocus] = useState(initialFocus);

    useEffect(() => {
        if( submit ){
            const flagErrors = Object.keys(errors).length === 0;
            if( flagErrors ){
                fn(); // se ejecuta la funcion en el componente
            };
            setSubmit(false);
        }
    }, [errors])

    const handleChange = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });        
    };
    
    const handleSubmit = e => {
        e.preventDefault();
        setFocus(initialFocus);
        const validation = validate(values);
        setErrors(validation);
        setSubmit(true);
    }

    const handleBlur = () => {   
        setFocus(initialFocus);
        const validation = validate(values);
        setErrors(validation);       
    }

    const handleFocus = (e) => {        
        setFocus({
            ...focus,            
            [e.target.name]: true
        });        
    }


    return {
        values, errors, focus, handleSubmit, handleChange, handleBlur, handleFocus
    }
}

export default useValidation;
