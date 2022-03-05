import React from 'react'
import '../styles/contactUsForm.css'

function contactUsForm() {


    const firstNameRef = null
    const lastNameRef =  null
    const emailRef = null
    const messageRef =  null

    
    const handleSubmit = (event) => {
        event.preventDefault()
        const data = {
            firstName: firstNameRef.current.value,
            lastName: lastNameRef.current.value,
            email: emailRef.current.value,
            message: messageRef.current.value
        }
        alert("tadaaa!: \n" + JSON.stringify(data) + "Your data 😎")
    }

    return (
        <div  className="container">
                       <h1 className="caption">Fill in the form below to contact us</h1>

            <form onSubmit={handleSubmit} className="form">
                <div className="name">
                    <label for="firstName" id="nameLabel">First Name</label>
                    <input
                     
                        type="text" 
                        id="firstName" 
                        name="firstName"
                        className="firstName" 
                        ref={firstNameRef} 
                        tabindex="1" 
                    />
                    
                    <label for="lastName">Last name</label>
                    <input  
                        type="text" 
                        id="lastName" 
                        className="lastName" 
                        ref={lastNameRef}
                        tabindex="2"  
                    />
                </div>
                <label for="email">Email</label>
                <input 
                type="email" 
                name="email"
                id="email"
                className="email"
                placeholder="example@corp.com"
                ref={emailRef}
                tabindex="3" 
                />

                <label for="message">Message</label>
                <textarea 
                placeholder="Start typing..." 
                className="message" 
                name="message"
                ref={messageRef}
                >

                </textarea>
                <button type="submit" className="send">Send</button>
            </form>
        </div>
    )
}

export default contactUsForm;