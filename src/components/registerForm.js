import React from 'react'
import '../styles/registerForm.css'

function registerForm() {

    const firstNameRef = null
    const userNameRef = null
    const lastNameRef = null
    const emailRef = null
    const passwordRef = null
    const confirmPasswordRef = null


    const handleSubmit = (event) => {
        event.preventDefault()
        const data = {
            firstName: firstNameRef.current.value,
            userName: userNameRef.current.value,
            lastName: lastNameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            confirmPassword: confirmPasswordRef.current.value
        }
        alert("tadaaa!: \n" + JSON.stringify(data) + "Your data 😎")
    }

    return (
        <div className="container">
 <h1 className="caption">Fill in the form to register</h1>
            <form onSubmit={handleSubmit} className="form">
                <div className="name">
                    <label for="firstName" id="nameLabel">First Name</label>
                    <input

                        type="text"
                        id="firstName"
                        name="firstName"
                        className="firstName"
                        placeholder="enter firstname"
                        ref={firstNameRef}
                        tabindex="1"
                    />

                    <label for="lastName">Last name</label>
                    <input
                        type="text"
                        id="lastName"
                        className="lastName"
                        placeholder="enter lastname"
                        ref={lastNameRef}
                        tabindex="2"
                    />


                </div>

                <label for="userName" id="nameLabel">User Name</label>
                    <input

                        type="text"
                        id="userName"
                        name="userName"
                        className="userName"
                        placeholder="create a username"
                        ref={userNameRef}
                        tabindex="1"
                    />
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

                <label for="password">Password</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    className="password"
                    placeholder="***************"
                    ref={passwordRef}
                    tabindex="3"
                />


                <label for="password">Confirm Password</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    className="password"
                    placeholder="***************"
                    ref={passwordRef}
                    tabindex="4"
                />


                <button type="submit" className="register">Register</button>
            </form>
        </div>
    )
}

export default registerForm;