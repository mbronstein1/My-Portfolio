import React from "react";
import './Form.css'



export default function Form({
    toSend,
    errorMsg,
    setErrorMsg,
    successMsg,
    handleInputChange,
    handleFormSubmit
}) {
    return (
        <div className='container'>
            <div className='custom-container px-4 py-3 mx-auto'>
                <h2 className='contact-header pb-1'>Contact Me</h2>
                <hr style={{ borderTop: "solid 2px rgb(255, 189, 131)" }} />
                <form className='contact-form'>
                    <div className="my-3">
                        <label className="form-label">Name</label>
                        <input
                            name='name'
                            value={toSend.name}
                            onChange={handleInputChange}
                            onBlur={() => toSend.name === "" ? setErrorMsg('The name field is required') : toSend.name}
                            type="text"
                            className="form-control"
                            id="contact-name-input"
                            placeholder="Full Name"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                            name='email'
                            value={toSend.email}
                            onChange={handleInputChange}
                            onBlur={() => toSend.email === "" ? setErrorMsg('The email field is required') : toSend.email}
                            type='email'
                            className="form-control"
                            id="contact-email-input"
                            placeholder="Email address"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Message</label>
                        <textarea
                            name='message'
                            value={toSend.message}
                            onChange={handleInputChange}
                            onBlur={() => toSend.message === "" ? setErrorMsg('The message field is required') : toSend.message}
                            className="form-control"
                            id="contact-textarea-input"
                            rows="5"
                            placeholder="Enter message"
                            required>
                        </textarea>
                    </div>
                    <button
                        type="button"
                        onClick={handleFormSubmit}
                        className="btn custom-form-btn mt-3">Submit</button>
                </form>
                <div className='validation-div'>
                    {errorMsg && (
                        <div>
                            <p className='text-warning'>{errorMsg}</p>
                        </div>
                    )}
                    {successMsg && (
                        <div>
                            <p className='text-success'>{successMsg}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}