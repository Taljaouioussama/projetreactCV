import React ,{useState} from "react";
import {useNavigate} from 'react-router-dom';

const Form =()=>{
const [name ,setname]=useState('')
const [password ,setpassword]=useState('')
const [select ,setselect]=useState('')
const navigate = useNavigate();

const handlname =(value)=>{
        setname(value)
}
const handlpassword =(value)=>{
        setpassword(value)
}
const handlselect =(value)=>{
        setselect(value)
}
const handlesubmit =(e)=>{
    e.preventDefault();
    navigate('/Affichage',{state:{name,password,}})
}

    return (
        <div>
           <form onSubmit={handlesubmit}>
            <label>name</label><br></br>
            <input type="text" placeholder="nom" onChange={(e)=>{handlname(e.target.value)}}></input>
            <label>password</label><br></br>
            <input type="password" placeholder="password" onChange={(e)=>{handlpassword(e.target.value)}}></input><br></br>
            {/* <select onChange={(e)=>handlselect(e.target.value)}>
               <option value='oussama'>oussama</option>
               <option value='taljaoui'>taljaoui</option>
               <option value='ali'>ali</option>
            </select> */}
            <input type="submit" value='click'></input>
            

            </form> 
        </div>
    )
}
export default Form ;