import React,{useState , useEffect} from "react";
import './Login.css'
import { useNavigate } from "react-router-dom";
const Login = () => {
    const [UserName, setUserName] = useState("");
    const [PassWord,setPassWord] = useState("");
    const [message, setmessage] = useState("");
    const [errmessage,seterrmessage] = useState("");
    const navigate = useNavigate();
  useEffect (()=> {
      console.log("updating stage");
      if (errmessage) {
      setTimeout(() => { seterrmessage("")
      } ,3000) 
    }
  }, [errmessage]);
  
  
    const onLogin = () => {
        console.log("Login");
       
     
        if (
          UserName === "admin" && PassWord==="123"
        )
        {
          console.log("Login Sucess");
          navigate("/list")
          setmessage("Login Sucess" );
        }
         else {
          seterrmessage("Login Failure");
        }
      };
    return (
        <div className="container">
            <div className="heading">Log In</div>
            {/* <form action="#"> */}
                <div className="input-box">
                    <label className="textlable" for="UserName">User Name</label>
                    <input type="text" placeholder="UserName"  onChange={(e) => setUserName(e.target.value)}></input>
                    <label className="textlable" for="PassWord">Password</label>
                    <input type="password" placeholder="PassWord" onChange={(e) => setPassWord(e.target.value)}></input>
                </div>
                <div className="btn">
                    <button  onClick={() => onLogin()} type="submit">Login</button>
                </div>
                <div className="msg">
                {message && <div className="green">{message}</div>}
                {errmessage && <div className="red">{errmessage}</div>}
                </div>
            {/* /</form> */}
        </div>
    )
}
export default Login;