import axios from "axios";
import { useState } from "react";

const Insert=()=>{
    const [myinput,setMyinput]=useState({});

    const handleInput=(e)=>{
       let name=e.target.name;
       let value=e.target.value;
       setMyinput(values=>({...values,[name]:value}));

    }
    const handleSubmit=()=>{
       let api="http://localhost:8000/students/stusave";
       axios.post(api,myinput).then((res)=>{
       // console.log(res.data);
       alert("data insert!!")
       })
    }
    return(
        <>
        <center>
        <h1>Insert Employee Record</h1>
        <div className="insert">
            
        Enter rollno:<input type="text" name="rollno" id="no" onChange={handleInput}/>
        <br/>
        Enter name:<input type="text" name="name" id="nm" onChange={handleInput}/>
        <br/>
        Enter City:<input type="text" name="city" id="ct" onChange={handleInput}/>
        <br/>
        Enter fees:<input type="text" name="fees" id="sal" onChange={handleInput}/>
        <br/>   <br/>
        <button  onClick={handleSubmit}>Save Data!!</button>
      
        </div>
        </center>

        </>
    );
}
export default Insert;