import React, { useState } from "react";
import Form from '../../components/Form/Form'
import validateEmail from '../../utils/helpers';
import { send } from 'emailjs-com';

export default function Contact() {
    const [toSend, setToSend] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [errorMsg, setErrorMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');

    const handleInputChange = (e) => {
        setSuccessMsg('');
        setErrorMsg('');
        setToSend({ ...toSend, [e.target.name]: e.target.value })
    };

    const handleFormSubmit = (e) => {
        const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
        const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
        const USER_ID = process.env.REACT_APP_USER_ID;

        e.preventDefault();

        if (!validateEmail(toSend.email)) {
            setErrorMsg('Email address invalid. Please enter a valid email address');
            return;
        };

        if (toSend.name === '' || toSend.email === '' || toSend.message === '') {
            setErrorMsg('All fields are required. Please fill out each field before submitting');
            return;
        }

        send(SERVICE_ID, TEMPLATE_ID, toSend, USER_ID)
            .then((response) => {
                setSuccessMsg('Successfully sent');
                console.log('SUCCESS', response.status, response.text);
            })
            .catch((err) => {
                setErrorMsg('Something went wrong. Please try again.')
                console.error('FAILED', err);
            });

        setToSend({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <Form
            toSend={toSend}
            errorMsg={errorMsg}
            successMsg={successMsg}
            setErrorMsg={setErrorMsg}
            setSuccessMsg={setSuccessMsg}
            handleInputChange={handleInputChange}
            handleFormSubmit={handleFormSubmit} />
    )
};