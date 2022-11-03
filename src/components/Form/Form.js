import React from "react";
import './Form.css'



export default function Form({
    name,
    email,
    msg,
    errorMsg,
    setErrorMsg,
    successMsg,
    handleInputChange,
    handleFormSubmit
}) {
    return (
        <div className='container'>
            <div className='custom-container px-4 py-3 my-4 mx-auto' style={{ width: "60%", height: "32.5rem" }}>
                <h2 className='contact-header pb-2'>Contact Me</h2>
                <hr style={{ borderTop: "solid 2px rgb(255, 189, 131)" }} />
                <form className='contact-form'>
                    <div className="mb-3">
                        <label for="contact-name-input" className="form-label">Name</label>
                        <input
                            name='name'
                            value={name}
                            onChange={handleInputChange}
                            onBlur={() => name === "" ? setErrorMsg('The name field is required') : name}
                            type="text"
                            className="form-control"
                            id="contact-name-input"
                            placeholder="Full Name"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label for="contact-email-input" className="form-label">Email</label>
                        <input
                            name='email'
                            value={email}
                            onChange={handleInputChange}
                            onBlur={() => email === "" ? setErrorMsg('The email field is required') : email}
                            type='email'
                            className="form-control"
                            id="contact-email-input"
                            placeholder="Email address"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label for="contact-textarea-input" className="form-label">Message</label>
                        <textarea
                            name='message'
                            value={msg}
                            onChange={handleInputChange}
                            onBlur={() => msg === "" ? setErrorMsg('The message field is required') : msg}
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
                        className="btn custom-form-btn">Submit</button>
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