import React, { useState } from "react";
import Form from '../../components/Form/Form'
import validateEmail from '../../utils/helpers';

export default function Contact() {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [msg, setMsg] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');

    const handleInputChange = (e) => {
        setSuccessMsg('');
        setErrorMsg('');
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value

        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'name') {
            setName(inputValue)
        } else if (inputType === 'message') {
            setMsg(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setErrorMsg('Email address invalid. Please enter a valid email address');
            return;
        };

        if (name === '' || email === '' || msg === '') {
            setErrorMsg('All fields are required. Please fill out each field before submitting');
            return;
        }

        setName('');
        setEmail('');
        setMsg('');
        setSuccessMsg('Successfully sent');
    };

    return (
        <Form 
            name={name}
            email={email}
            msg={msg}
            errorMsg={errorMsg}
            successMsg={successMsg}
            setErrorMsg={setErrorMsg}
            setSuccessMsg={setSuccessMsg}
            handleInputChange={handleInputChange}
            handleFormSubmit={handleFormSubmit}/>
    )
}