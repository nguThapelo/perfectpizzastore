import React from 'react'
import '../styles/loginForm.css'

function loginForm() {


    const userNameRef = null
    const lastNameRef =  null
    const emailRef = null
    const passwordRef =  null

    
    const handleSubmit = (event) => {
        event.preventDefault()
        const data = {
            userName: userNameRef.current.value,
            lastName: lastNameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value
        }
        alert("tadaaa!: \n" + JSON.stringify(data) + "Your data 😎")
    }

    return (
        <div  className="container">
           
            <form onSubmit={handleSubmit} className="form">
                <div className="name">
                    <label for="userName" id="nameLabel">User Name</label>
                    <input
                     
                        type="text" 
                        id="userName" 
                        name="userName"
                        className="userName" 
                        ref={userNameRef} 
                        tabindex="1" 
                    />
                    
                    {/* <label for="lastName">Last name</label>
                    <input  
                        type="text" 
                        id="lastName" 
                        className="lastName" 
                        ref={lastNameRef}
                        tabindex="2"  
                    /> */}
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

                
                <button type="submit" className="login">Login</button>
            </form>
        </div>
    )
}

export default loginForm;