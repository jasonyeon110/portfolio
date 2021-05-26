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
        <div className="bg">
            <div className="col-md-6">
                <div className="well well-sm">

                    <form id="contact-form" action="POST">
                        <fieldset>
                            <legend className="text-center">Contact</legend>
                            <div className="form-group">
                                <label htmlFor="name" className="col-md-3 control-label">Name</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="emailInput">Email Address</label>
                                <input type="email" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea id="msg" rows="7"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    )

}
