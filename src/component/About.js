import { Outlet } from "react-router-dom";

const About=()=>{
    return(
        <div className="card mt-5 p-4 container about1">
            <h3 className="mt-3">ABOUT US:</h3>
            <h4>Address:- </h4>
            <h6 className="">
            Swiggy online food delivery, Commercial Appartment,<br/> Office No.5,
            'D' Road Mumbai Maharashtra 400020.
        </h6>
        <Outlet/>
 </div>
    )
}
export default About;