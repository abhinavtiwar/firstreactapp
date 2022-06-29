import { useState } from "react";
import {Button, Card, CardActions, CardContent, CardHeader} from "@mui/material";

const Event= () =>{
let count=1;

const [num ,setNum]=useState(0);
const [text, setText] = useState("");

const incrementState=() =>{
console.log(num);
setNum(num+1);
};
const handleClick = () => {
  console.log("button was clicked");
  console.log("You can pass as many lines as you want");
};
const increment = () => {
  count++;
  console.log(count);
};
return(
 <div>
   <h1>event handling</h1>
   <div className="container mt-5">
     <div className="card">
       <div className="body">
       <button
              className="btn btn-primary"
              onClick={() => alert("You Clicked that button")}
            >
              Using Inline Function
            </button>
       <button className="btn btn-secondary" onClick={handleClick}>
              Using External Function
            </button>
         < button className="btn btn-sucess mt-5" onClick={incrementState}>
           update count
         </button>
         <h1>{num}</h1>
         <button className="btn btn-success" onClick={increment}>
              Increment Count
            </button>
            <h1>{count}</h1>
            <input
              className="form-control"
              onChange={(event) => {
                console.log(event.target.value);
                setText(event.target.value);
              }}
            />
{/* <h3>{text}</h3> */}
<div className="container-fluid">
  <img src={text} className="img-fluid mt-5" style={{width :"400px"}}></img>
</div>
<div className="container mt-5">
  
  <Button variant="text">mui button 1</Button>
<Button variant="contained">mui button 2</Button>
<Button variant="outlined" color="warning">mui button 3</Button>
</div>

       </div>
       <Card className="mt-5">
  <CardHeader title="card header" />
  <CardContent>
    <h2>material ui card</h2>
  </CardContent>
  <CardActions>
  <Button color="error" variant="contained">learn more</Button>
  </CardActions>
</Card>
     </div>
   </div>
   
 </div>
)
};
export default Event;