import { useLocation } from "react-router-dom";
import React from "react";

const Affichage =()=>{
    const location = useLocation();
    const {name,password} = location.state || {name :"Inconnute" , password:"oussama taljaoui"}

    return(
        <div>
            <h1>affichage</h1>
            <p>name: {name}</p>
            <p> password:{password}</p>
        </div>
    )
}

export default Affichage ;