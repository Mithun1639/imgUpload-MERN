import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {

  const history =useNavigate();

  const [fname, setFname] = useState("");
  const [file, setFile] = useState("");

  const setData = (e) => {
    const { value } = e.target;
    setFname(value);
  };

  const setImgFile = (e) => {
    setFile(e.target.files[0]);
  };

  //addUser data

  const addUserData=async(e)=>{
    e.preventDefault();

    var formData=new FormData();
    formData.append("photo",file);
    formData.append("fname",fname);

    const config={
      headers:{
        "Content-Type":"multipart/form-data"
      }
    }

    const res=await axios.post("/register",formData,config);
    // console.log(res);
    if(res.status===201){
      alert("image succussfully uploaded");
      history("/");
    } else{
      console.log("error");
    }
    
  }

  return (
    <>
      <div className="container mt-3">
        <h1>Upload Your Img Here</h1>
        <Form className="mt-3">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>UserName</Form.Label>
            <Form.Control
              type="text"
              name="fname"
              onChange={setData}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Select Your Image</Form.Label>
            <Form.Control type="file" name="photo" onChange={setImgFile} />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={addUserData}>
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Register;
