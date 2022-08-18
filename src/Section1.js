import React from "react";
import logos from './images/Logos.png'
function Section1(){
    return(<div>
        <div className="Section1">
            <div className="Section1_div">
                <p className="Section1_div_p">Over 32k+ software  businesses growing with AR Shakir.</p>
                <div className="Section1_div_div">
                    <img src={logos}></img>
                </div>
            </div>
        </div>

    </div>)
}

export default Section1;