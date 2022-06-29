import { Formik } from "formik";
import {
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
  } from "@mui/material";
import Swal from "sweetalert2";

const Register=() =>{
    const handleFormSubmit=(formdata) =>{
        console.log(formdata);

        //send formdata to server
        //1. address of postman
        //2.request method
        //3.data to be sent
        //4. data format
        fetch('http://localhost:5000/user/add',{
            method:'POST',
            body:JSON.stringify(formdata),
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then(res =>{
            console.log(res.status);
            if(res.status===200){
            Swal.fire({
                icon:'success',
                title:'Sucess',
                text:'Registration Sucessful',
            });
        }else{
            Swal.fire({
                icon:'error',
                title:'OOps',
                text:'Some Error Occoured',
            });
        }
        });

    };
    return <div>
    <div className="container">
    <div className="card">
    <div className="card-body">
   <h3 className="text-muted text-centered">Register Form</h3>
   <Formik initialValues={{
       name: "",
       email: "",
       password: "",
   }}
   onSubmit={handleFormSubmit}
>
{({values,handleSubmit,handleChange}) =>(
    <form onSubmit={handleSubmit}>
   <label className="mt-4">Username</label>
   <input className="form-control" placeholder="Username" 
   id="name"
          value={values.name}
          onChange={handleChange} />

   <label className="mt-4">Email</label>
   <input className="form-control" placeholder="Email Address" 
   id="email"
     value={values.email}
     onChange={handleChange} />

   <label className="mt-4">Password</label>
   <input className="form-control" placeholder="Password" 
   id="password"
          value={values.password}
          onChange={handleChange} />
          <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">
                      Gender
                    </FormLabel>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      value={values.gender}
                      name="gender"
                      onChange={handleChange}
                    >
                      <FormControlLabel
                        value="female"
                        control={<Radio />}
                        label="Female"
                      />
                      <FormControlLabel
                        value="male"
                        control={<Radio />}
                        label="Male"
                      />
                      <FormControlLabel
                        value="other"
                        control={<Radio />}
                        label="Other"
                      />
                    </RadioGroup>
                  </FormControl>
  
   <button className="btn btn-primary mt-5">Submit </button>
   </form>
)}
   </Formik> 
    </div>
    </div>
    </div>
    </div>
    
};
export default Register;