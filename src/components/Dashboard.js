import React from 'react'
import axios from "axios"
import {useEffect,useState} from "react"
export default function Dashboard() {
    var [userdetails,setUserdetails] =  useState({})
    useEffect(()=>{
        axios({
            method:"get",
            url:"http://localhost:5050/user/dashboard",
            headers:{

                "Authorization" : localStorage.getItem("token")

            }
        }).then((response)=>{
            console.log("response from get details of story api" , response)
            setUserdetails(response.data.user)
        })
    },[])
    return (
        <div className="card" style={{width:"15rem"}}>
        {/* <img onClick={playVideo} src={data.imageUrl} class="card-img-top" alt="..." height="100" width="100" /> */}
                    <div class="card-body">
                        <h5 class="card-title">{userdetails.name}</h5>
                        <h2 class="card-text">{userdetails.accountnumber}</h2>
                        <p class="card-text">{userdetails.accounttype}</p>
                        <p class="card-text">{userdetails.accountbalance}</p>
                        <button className="btn btn-primary">Transaction</button>
                        <button className="btn btn-primary">Insights</button>
                        <button className="btn btn-primary">Expenses</button>
                    </div>
          </div>
    )
}
