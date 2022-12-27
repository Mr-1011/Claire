import { render } from "@testing-library/react";
import React from "react";
import ReactSpeedometer from "react-d3-speedometer";

const needle = () => {
    /*
    const rotateElem = () =>{
        document.querySelector('.box').style.transform
                       = 'rotate(90deg)'
    }
    */
   let angle = 90;
    return(
    <div>
        <div className="box" style ={{height: "250px",
                    width: "150px",
                    backgroundColor:"#e30",
                    transform: "rotate("+angle+"deg)"}}>
                 
        </div>
        
        <ReactSpeedometer/>
    </div>
    );

}
export default needle;