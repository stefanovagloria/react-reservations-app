import { useState } from "react"

export const useForm = (initialValues, onSubmitHandler) => {

    const [values, setValues] = useState(initialValues);

    const onChangeHandler = (e) => {
        setValues(values => ({ ...values, [e.target.name]: e.target.value }))
    }

    const onSubmit = (e) => {
        e.preventDefault();

        onSubmitHandler(values);
    }

    return {
        values,
        onChangeHandler,
        onSubmit
    }
}