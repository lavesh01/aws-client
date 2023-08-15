import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

export default function RegisterPage(){
    const [ name , setName ] = useState('');
    const [ email , setEmail ] = useState('');
    const [ password , setPassword ] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        try{
            await axios.post('/register',{
                name: name,
                eamil: email,
                password: password
            })
            alert("Registration Succesfull!");
        } catch(err){
            alert("Registration failed, please try again later!");
        }
    }

    return(
        <>
         <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-64">
                <h1 className="text-4xl text-center mb-4">
                    Register
                </h1>
                <form className="max-w-md mx-auto" onSubmit={handleRegister}>
                    <input type="text" placeholder="John Doe" value={name} onChange={(e) => setName(e.target.value)} />
                    <input type="email" placeholder="your@email.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button className="primary">Register</button>
                    <div className="text-center py-2 text-gray-500">
                        Already a member? <Link to={'/login'} className="underline text-black"> Login</Link>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}