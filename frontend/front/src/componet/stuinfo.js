import {useState,useEffect } from "react";
import axios from "axios"


const Stuinfo=()=>{
    const [mydata,setmydata]=useState("")

    const loadDate=()=>{
        let  url="http://localhost:8080/student/info";
        axios.get(url).then((res)=>{
            setmydata(res.data)
        })
    }
    useEffect(()=>{
        loadDate();
    },[]);
    return(<>
    <h1>welcom student fees:{mydata}</h1>
    </>)
    
    }

export default Stuinfo;