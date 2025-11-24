import { useState } from "react"
import axios from "axios";
import "../App.css"

export const SignUp=()=>{

    const[data,setData] = useState({
        name:"",
        email:"",
        password:"",
        confirmpassword:""
    })

    const[error,setError] = useState("")

    const handleChange = (e)=>{

        const{name,value} = e.target

        setData((prev)=>({
            ...prev,[name]:value
        }))
    }

    const handleSubimt = async(e)=>{

        e.preventDefault()

         if(data.password!=data.confirmpassword){
          setError("password not matched")
          return
        }

        if(!data.name){
            setError("Name is required")
            return
        }

        if(!data.email){
            setError("Email is required")
            return
        }

        if(!data.password){
            setError("Password is required")
            return
        }

        if(!data.confirmpassword){
            setError("Confirm passowrd is required")
            return
        }

        console.log(data);

        try{

            let res = await axios.post("http://localhost:3000/api/signup",data)
            console.log(res);
        }catch(error){
            console.log(error);
        }
    }

    return<>
    <div className="container">

        <h4>SignIn in your account to continue</h4>

        <form onSubmit={handleSubimt} className="signupform-container">

            {error && <p className="error">{error}</p>} 

          <div className="input-div">
        <label  htmlFor="name">Name</label>
        <input name="name" id="name" type="text" placeholder="Enter your name" onChange={handleChange}/>
        </div>   

        <div className="input-div">
        <label  htmlFor="email">Email</label>
        <input name="email" id="email" type="email" placeholder="Enter your email" onChange={handleChange}/>
        </div>

        <div className="input-div">
        <label  htmlFor="password">Password</label>
        <input name="password"  id="password" type="password" placeholder="Enter your password" onChange={handleChange}/>
        </div>

        <div className="input-div">
        <label  htmlFor="confirmpassword">Password</label>
        <input name="confirmpassword"  id="confirmpassword" type="password" placeholder="Enter your password" onChange={handleChange}/>
        </div>

        <button>SIgnUp</button>

        <div>
            <a href="#">Log In</a>
        </div>

        </form>

    </div>
    </>
}