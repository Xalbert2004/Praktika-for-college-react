import React from "react";
import nkar4 from "./images/nkar4.png";
import nkar5 from "./images/nkar5.png";

export default function Section3() {
    return (<div>
        <div className="Section3">
            <div className="Section3_div1">
                <img className="Section3_div1_nkar4" src={nkar4}></img>
            </div>
            <div className="Section3_div2">
                <p className="Section3_div2_title">Track your payments on the go with the best way possible</p>
                <p className="Section3_div2_text">Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.  </p>
                <hr className="Section3_div2_hr"></hr>
                <div className="Section3_div2_div">
                    <div className="Section3_div2_div_div1">
                        <img className="Section3_div2_div_div1_nkar5" src={nkar5}></img>
                        <p className="Section3_div2_div_div1_p">Get Overview at a glance</p>
                    </div>
                    <div className="Section3_div2_div_div2">
                        <img className="Section3_div2_div_div1_nkar5" src={nkar5}></img>
                        <p className="Section3_div2_div_div2_p">Deoposit funds easily, securlity</p>
                    </div>
                    <div className="Section3_div2_div_div3">
                        <img className="Section3_div2_div_div1_nkar5" src={nkar5}></img>
                        <p className="Section3_div2_div_div3_p">Get Live Support</p>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}
