import React ,{ useState } from 'react';
import { useHistory, Link } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import registerstyle from "../../Style/Registerstyle.module.css";
import  loginimgurl  from "../../Images/loginimg.png";
import okhatiimgurl  from "../../Images/okhati.png";

toast.configure();
export default function Register() {
    const history = useHistory();
    const [ username, setUsername ] = useState('');
    const [ confirmpassword, setConfirmpassword] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorstate, setErrorstate] = useState(false);
    const passreq = /^(?=.*\d)(?=.*[A-Za-z]).{8,}/;
  
    const RegisterHandler = (e) => {
        e.preventDefault();
        if(!passreq.test(password) || (!passreq.test(confirmpassword))){
            setErrorstate(true);
            toast.error("Password must be atleast 8 character including number",{ position: toast.POSITION.TOP_CENTER});
        }else if(password === confirmpassword){
            setErrorstate(false);
            
            const usersInfo = {
                nameInfo : username,
                emailInfo : email,
                passwordInfo : password
            }
            localStorage.setItem( "usersInfo", JSON.stringify(usersInfo) );
            toast.success("Sign up successfull",{ position: toast.POSITION.TOP_CENTER});
            
            setInterval(() => {
                history.push("/");
              }, 2000);
        }else {
            setErrorstate(true);
            toast.error("Password didnot match!",{ position: toast.POSITION.TOP_CENTER});
        }
      }
     

    return (
        <>
    <div className={registerstyle.login}>
      <div className={registerstyle.logincontainer}>
        <div className={registerstyle.logincontent}>
          <div className={registerstyle.mainlogo}>
            <img src={okhatiimgurl} alt="logo"/>
          </div>

          <div className={registerstyle.loginlogo}>
            <img src={ loginimgurl } alt = "okhatilogo" />
          </div>
        </div>

        <div className={registerstyle.loginform}>
        <form onSubmit={ (e) => RegisterHandler(e) }>
         
            <h2> Sign up </h2>
            <div className={registerstyle.inputfield}>
           
            <TextField
                required
                type="text"
                label="username"
                variant="outlined"
                onChange={ (e)=>setUsername(e.target.value) }
                value={ username }
                className={registerstyle.logininput}
            />

            <TextField
                required
                type="email"
                label="email"
                variant = "outlined"
                onChange={ (e)=>setEmail(e.target.value) }
                value={ email }
                className={registerstyle.logininput}
            />
            
            <TextField
                required
                type="password"
                label="password"
                variant="outlined"
                onChange={ (e)=>setPassword(e.target.value) }
                value={ password }
                error = { errorstate }
                className={registerstyle.logininput}
            />
        
            <TextField
                required
                type="password"
                label="confirm password"
                variant="outlined"
                onChange={ (e) => setConfirmpassword(e.target.value) }
                value={ confirmpassword }
                error = { errorstate }
                className={registerstyle.logininput}
            />
            <p> *Password must be atleast <br/> 8 character including number </p>
            </div>

            <button className={registerstyle.btn} type="submit" className={registerstyle.login_btn}>Sign up</button>

            <div className={registerstyle.signup}>
                <h4>Already a Member ? </h4>
                <Link to="/" className={registerstyle.signup_btn}>Sign in</Link>
            </div>
        </form>
        </div>
    </div>
    </div>

    
    </>

    )
}
