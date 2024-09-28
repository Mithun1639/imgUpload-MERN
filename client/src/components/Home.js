import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { NavLink } from "react-router-dom";
import axios from "axios";
import moment from "moment";

const Home = () => {

  const [data,setData]=useState([]);
  // console.log(data);

  const getUserData=async()=>{
    const res=await axios.get("/getdata",{
      headers:{
        "Content-Type":"application\json"
      }
    });
    
    if(res.data.status===201){
      setData(res.data.getUser)
    } else{
      console.log("error");
    }
  }

  const dltUser=async(id)=>{
    const res=await axios.delete(`/${id}`,{
      headers:{
        "Content-Type":"application\json"
      }
    });
    if(res.data.status===201){
      console.log("user delete");
      alert("The user will be Deleted");
    } else{
      console.log("error");
    }
  }

  useEffect(()=>{
    getUserData();
  },[dltUser])
 
  return (
    <>
      <div className="container mt-2">
        <h1 className="text-center mt-2" style={{ lineHeight: "0.7em" }}>
          Mern Image Upload Project
        </h1>
        <div className="text-end mt-3" >
          <Button variant="primary"><NavLink to="/register" className="text-decoration-none text-light">Add User</NavLink></Button>
        </div>
      </div>
      <div className="row d-flex justify-content-evenly align-items-center mt-5 ml-5">
      {
        data.length>0?data.map((el,i)=>{
          return (
            <Card  className="mb-4" style={{ width: "22rem", height: "18rem" }}>
            <Card.Img
            variant="top"
            style={{ width: "100px", textAlign: "center", margin: "auto" }}
            src={`/uploads/${el.imgpath}`}
            className="mt-2"
          />
          <Card.Body className="text-center">
            <Card.Title>UserName: {el.fname}</Card.Title>
            <Card.Text>Date Added:{moment(el.date).format("L")}</Card.Text>
            <Button className="col-lg-6 text-center" variant="danger" onClick={()=>dltUser(el._id)}>Delete</Button>
          </Card.Body>
          </Card>  
          )
        }):""
      }
      </div>
  </>
  );
}

export default Home
