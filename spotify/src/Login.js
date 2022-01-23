import React from 'react';
import './Login.css';
import {loginUrl} from "./spotify"

function Login() {
    return (
        <div className='login'>
            
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW4tupAVnrL2zBy-uozePnoKQGU4wq_1P5iw&usqp=CAU" alt="" />
            <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
       
       
        </div>
    )
}

export default Login
