import { TextField, Button,RadioGroup,FormControlLabel,Radio } from "@mui/material";
import React from "react";
import {Formik} from "formik";
import * as Yup from 'yup';
import Swal from "sweetalert2";

const Product = () => {
   
    const handleFormSubmit=(formdata) =>{
        console.log("form submitted");
        console.log(formdata);

        fetch('http://localhost:5000/prod/add',{
          method:'POST',
          body:JSON.stringify(formdata),
          headers:{
              'Content-Type' : 'application/json'
          }
      })
      .then(res =>{
          console.log(res.status);
          if(res.status===200){
          Swal.fire({
              icon:'success',
              title:'Congratulations',
              text:'Employee Added Sucessfully',
          });
      }else{
          Swal.fire({
              icon:'error',
              title:'OOps',
              text:'Some Error Occoured',
          });
      }
      });
    }
    const loginSchema = Yup.object().shape({
      firstName: Yup.string()
        .min(5, "Too Short!")
        .max(20, "Too Long!")
        .required("First Name is required"),
    
      lastName: Yup.string()
        .min(5, "Too Short!")
        .max(20, "Too Long!")
        .required("Last Name is required"),
      job: Yup.string()
        .min(5, "Too Short!")
        .max(20, "Too Long!")
        .required("Job Position is required"),
      address: Yup.string()
        .min(5, "Too Short!")
        .max(50, "Too Long!")
        .required("Address is required"),
    
        phonenumber: Yup.number()
        .typeError("That doesn't look like a phone number")
        .positive("A phone number can't start with a minus")
        .integer("A phone number can't include a decimal point")
        .min(8)
        .required('A phone number is required'),
      
    
      email: Yup.string().email().required("Email is required"),
    
    });

  return (
    <div style={{ background: "#eee", height: "100vh" }}>
      <div className="row h-100 justify-content-center align-items-center">
        <div className="col-md-4">
          <div className="card" >
            <div className="card-body">
              <h3 className="text-muted text-center">Add New Employee</h3>
            
<Formik
 initialValues={{email : '',phonenumber : '',firstName : '',lastName : '',job : '',address : '',gender : ''}}//specifying initial value for form
 validationSchema={loginSchema}
 onSubmit={handleFormSubmit}//function to handle form submission
 >
{
    ({values,handleChange,handleSubmit,errors,touched}) =>(
        <form onSubmit={handleSubmit}>
 
   <TextField
          sx={{ mt: 3 }}
          fullWidth
          label="First Name"
          placeholder="First Name"
          id="firstName"
          value={values.firstName}
          onChange={handleChange}
          helperText={errors.firstName? touched.firstName: ""}
          error={Boolean(errors.firstName) && touched.firstName }
        />
   <TextField
          sx={{ mt: 3 }}
          fullWidth
          label="Last Name"
          placeholder="Last Name"
          id="lastName"//imp to write
          value={values.lastName}//imp to write
          onChange={handleChange}//imp to write
          helperText={errors.lastName}
          error={Boolean(errors.lastName) }//digimkt132
        />
   <TextField
          sx={{ mt: 3 }}
          fullWidth
          label="Job Position"
          placeholder="Job Position"
          id="job"//imp to write
          value={values.job}//imp to write
          onChange={handleChange}//imp to write
          helperText={errors.job}
          error={Boolean(errors.job) }
        />

   <TextField
          sx={{ mt: 3 }}
          fullWidth
          label="Email"
          placeholder="Email Address"
          id="email"//imp to write
          value={values.email}//imp to write
          onChange={handleChange}//imp to write
          helperText={errors.email}
          error={Boolean(errors.email) }
        />
   <TextField
          sx={{ mt: 3 }}
          fullWidth
          label="Address"
          placeholder="Permanent Address"
          id="address"//imp to write
          value={values.address}//imp to write
          onChange={handleChange}//imp to write
          helperText={errors.address}
          error={Boolean(errors.address) }
        />
        <TextField
          sx={{ mt: 3 }}
          fullWidth
          label="Phone"
          placeholder="Phone Number"
          id="phonenumber"//imp to write
          value={values.phonenumber}//imp to write
          onChange={handleChange}//imp to write
          helperText={errors.phonenumber}
          error={Boolean(errors.phonenumber) }
        />
         <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        
        name="gender"
          value={values.gender}
          onChange={handleChange}
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
       
      </RadioGroup>
        <div className="mt-4" >
        <Button 
        type="submit"
        size="large"
        fullWidth
        variant="contained"
        sx={{ mt: 4}} 
         color="secondary">
           Add Employee
        </Button>
</div>
      </form>   
    )
}
</Formik>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;