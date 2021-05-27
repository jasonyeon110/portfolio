import { React, useState } from 'react'


export default function Contact() {

    const [info, setInfo] = useState({
        name: '',
        email: '',
        message: '',
    });

    const onNameChange = (e) => {
        setInfo({ name: e.target.value });
        console.log(info.name)

    }

    const onEmailChange = (e) => {
        setInfo({ email: e.target.value });
        console.log(info.email)
    }

    const onMessageChange = (e) => {
        setInfo({ message: e.target.value });
        console.log(info.message)
    }

    const handleSubmit = (event) => {
        console.log(info);
        event.preventDefault();
    }



    return (
        <div className="bg">
            <div className="col-md-6">
                <div className="well well-sm">
                    <form id="contact-form" action="POST">
                        <fieldset>
                            <legend className="text-center">Get in touch</legend>
                            <div className="form-group">
                                {/* <label htmlFor="name" className="col-md-3 control-label">Name</label> */}
                                <input type="text" id="inputName" className="form-control" onChange={onNameChange} placeholder="Name" />
                            </div>
                            <div className="form-group">
                                {/* <label htmlFor="emailInput">Email Address</label> */}
                                <input type="email" className="form-control" onChange={onEmailChange} placeholder="Email" />
                            </div>
                            <div className="form-group">
                                {/* <label htmlFor="message">Message</label> */}
                                <textarea id="msg" className="form-control" rows="7" onChange={onMessageChange} placeholder="Message"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary" onSubmit={handleSubmit}>Send</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    )

}
