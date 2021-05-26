import { React, useState } from 'react'


export default function Contact() {

    const [info, setInfo] = useState({
        name: '',
        email: '',
        message: '',
    });

    const onNameChange = (e) => {
        setInfo({ name: e.target.value });

    }

    const onEmailChange = (e) => {
        setInfo({ email: e.target.value });

    }

    const onMessageChange = (e) => {
        setInfo({ message: e.target.value });

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(info);
    }



    return (
        <form id="contact-form" action="POST" >
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" onChange={onNameChange} />
            </div>
            <div className="form-group">
                <label htmlFor="emailInput">Email Address</label>
                <input type="email" className="form-control" onChange={onEmailChange} />
            </div>
            <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="msg" rows="7" onChange={onMessageChange}></textarea>
            </div>
            <button type="submit" className="btn btn-primary" onSubmit={handleSubmit}>Submit</button>
        </form>
    )

}
