import React, { useContext } from "react";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Loginstate } from "../../App";
import homestyle from "../../Style/Homestyle.module.css"
import okhatiimgurl from "../../Images/okhati.png";

const Home = () => {
    const [ loginstatus, setloginstatus ] = useContext(Loginstate);
    const usersinfo = JSON.parse(localStorage.getItem("usersInfo"));

  const logoutbtn = () => {
    setloginstatus(false);
    localStorage.removeItem("loginStatus");
    localStorage.removeItem("usersInfo");
  };

  return (
    <>
      <div className = { homestyle.home }>
        <div className={ homestyle.homecontainer }>
          <div className = { homestyle.homeimg }>
            <img src= { okhatiimgurl } alt="okhatiimg"/>
          </div>
          <div className = { homestyle.signoutbtn } onClick={() => logoutbtn()}>
            <button><ExitToAppIcon /> Sign out</button>
          </div>
        </div>

        <div className = { homestyle.welcomemsg }>
          <p>Welcome, { usersinfo.nameInfo }</p>
        </div>

      </div>
    </>
  );
};

export default Home;
