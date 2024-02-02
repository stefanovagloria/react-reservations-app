import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useForm = (initialValues, onSubmitHandler) => {

    const [values, setValues] = useState(initialValues);
    const navigate = useNavigate()

    const onChangeHandler = (e) => {
        setValues(values => ({ ...values, [e.target.name]: e.target.value }))
    }

    const onSubmit = async (e) => {
        e.preventDefault();

        await onSubmitHandler(values);
        setValues(values => ({...initialValues}));
        navigate('/');
    }

    return {
        values,
        onChangeHandler,
        onSubmit
    }
}