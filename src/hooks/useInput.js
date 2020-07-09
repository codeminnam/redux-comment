import { useState } from "react";

export function useInput(initialValue) {
    const [form, setForm] = useState(
        () => initialValue || {
            profile_url: '',
            author: '',
            content: '',
            createdAt: ''
        }
    );

    const handleChangeField = e => {
        const { name, value } = e.target;
        setForm(prevForm => ({
            ...prevForm,
            [name]: value
        }));
    }

    const handleReset = () => {
        if (initialValue) {
            setForm(initialValue);
        } else {
            setForm({
                profile_url: '',
                author: '',
                content: '',
                createdAt: ''
            });
        }

    }

    return {
        form,
        setForm,
        onChangeField: handleChangeField,
        reset: handleReset
    };
}