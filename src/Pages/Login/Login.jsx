import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import loginstyle from "../../Style/Loginstyle.module.css";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import  loginimgurl  from "../../Images/loginimg.png";
import okhatiimgurl  from "../../Images/okhati.png";
import { Loginstate } from "../../App";

toast.configure()
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorstate, setErrorstate] = useState(false);
  const [errormsg, setErrormsg] = useState("");
  const [ loginstatus, setloginstatus ] = useContext( Loginstate );

  const LoginHandler = (e) => {
    e.preventDefault();
    const userInfo = JSON.parse(localStorage.getItem("usersInfo"));

    if(userInfo !== null &&  ( userInfo.emailInfo === email && userInfo.passwordInfo === password )){
      setloginstatus(true);
      localStorage.setItem("loginStatus", true);
    }else{
      setErrorstate(true);
      toast.error("wrong signin credentials!!",{ position: toast.POSITION.TOP_CENTER});
    }
  }

  return (
    <div className={loginstyle.login}>
      <div className={loginstyle.logincontainer}>
        <div className={loginstyle.logincontent}>
          <div className={loginstyle.mainlogo}>
            <img src={okhatiimgurl} alt="logo"/>
          </div>

          <div className={loginstyle.loginlogo}>
            <img src={ loginimgurl } alt = "okhatilogo" />
          </div>
        </div>

        <div className={loginstyle.loginform}>
          <form onSubmit={(e) => LoginHandler(e)}>

          <h2> Sign in </h2>
            <div className={loginstyle.inputfield}>
              <TextField
                required
                type="email"
                label="email"
                variant="outlined"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                error={errorstate}
                helperText={errorstate ? errormsg : ""}
                className={loginstyle.logininput}
              />
           
              <TextField
                required
                type="password"
                label="password"
                variant="outlined"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                error={errorstate}
                helperText={errorstate ? errormsg : ""}
                className={loginstyle.logininput}
              />
          </div>

            <button type="submit" className={loginstyle.login_btn}>Sign in</button>

            <div className={loginstyle.signup}>
              <h4>Not a Member ? </h4>
              <Link to="/register" className={loginstyle.signup_btn}>Sign up</Link>
            </div>
          </form>
          </div>
      </div>
    </div>
  );
}
