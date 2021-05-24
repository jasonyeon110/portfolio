import React from 'react'

export default function Contact() {
    return (
        <form id="contact-form" action="POST">
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control"/>
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
        </form>
    )
}
