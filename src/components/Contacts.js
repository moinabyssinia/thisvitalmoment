import React from "react"

const Contacts = () => {
    return (
        <div className = "contacts">
            <div className = "text-center">
                <h1>Contact Me</h1>
                <p>Please leave your message and information here and I will reach back ASAP!</p>
            </div>

            <div className = "container">
                <div className = "row">
                    <div className = "div-box col-md-6 col-xs-12">
                        { /* Name and Contact */}
                        <input
                            type = "text" 
                            id = "name"
                            className = "form-control"
                            placeholder = "Name"
                            name = "name"           
                        />
                        { /* phone input */}
                        <input
                            type = "text" 
                            id = "phone"
                            className = "form-control"
                            placeholder = "Phone Number"
                            phone = "phone"           
                        />

                        { /* email input */}
                        <input
                            type = "email" 
                            id = "email"
                            className = "form-control"
                            placeholder = "Email"
                            email = "email"           
                        />

                        { /* subject input */}
                        <input
                            type = "text" 
                            id = "subject"
                            className = "form-control"
                            placeholder = "Subject"
                            subject = "subject"           
                        />
                    </div>

                    <div className = "div-box col-md-6 col-xs-12">
                            { /* description input */}
                            <textarea 
                                type = "text"
                                id = "description"
                                className = "form-control"
                                placeholder = "Comment"
                                email = "email"
                                >
                            </textarea>

                            <button className = "btn-mainoffer contact-btn" type = "submit">Contact Me</button>

                        </div>

                </div>
            </div>
        </div>
    )
}

export default Contacts
