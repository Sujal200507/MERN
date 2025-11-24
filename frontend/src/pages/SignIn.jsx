import { useState } from "react"
import "../App.css"
import { useNavigate } from "react-router-dom"
import axios from "axios"

export const SignIn=()=>{

    const navigate = useNavigate()

    const[data,setData] = useState({
        email:"",
        password:""
    })

    const[error,setError] = useState("")

    const handleChange = (e)=>{

        const{name,value} = e.target

        setData((prev)=>({
            ...prev,[name]:value
        }))
    }

    const handleSubimt = async (e)=>{

        e.preventDefault()

        if(!data.email.endsWith("@gmail.com")){
            setError("Please Enter Valid Email")
            return;
        }

        if(data.password.length<6){
            setError("Passowrd must be minimum length of 6")
            return;
        }

          try{

            let res = axios.post("http://localhost:3000/api/signin",data)
            console.log(res)
          }catch(error){
            console.log(error);
          }
    }

    return<>
    <div className="container">

        <h4>SignIn in your account to continue</h4>

        <form onSubmit={handleSubimt} className="form-container">

         {error && <p className="error">{error}</p>}   

        <div className="input-div">
        <label  htmlFor="email">Email</label>
        <input name="email" id="email" type="email" placeholder="Enter your email" onChange={handleChange}/>
        </div>

        <div className="input-div">
        <label  htmlFor="password">Password</label>
        <input name="password"  id="password" type="password" placeholder="Enter your password" onChange={handleChange}/>
        </div>

        <button>SIgnIn</button>

        <div>
            Not a member? <a onClick={()=>navigate("/signup")} href="#">Click Here</a>
        </div>

        </form>

    </div>
    </>
}