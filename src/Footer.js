import React from 'react';
import icon2 from './images/icon2.png';

export default function Footer() {
    return(<div>
        <div className="Footer">
            <div className="Footer_div1">
                <div className="Footer_div1_div1">
                    <p className="Footer_div1_div1_title">AR Shakir</p>
                    <p className="Footer_div1_div1_text">Finance helps companies manage payments easily.</p>
                    <img className="Footer_div1_div1_img" src={icon2}></img>
                </div>
                <div className="Footer_div1_div2">
                    <p className="Footer_div1_div2_title">Company</p>
                    <div className="Footer_div1_div2_div">
                        <p className="Footer_div1_div2_div_p">About Us</p>
                        <p className="Footer_div1_div2_div_p">Careers</p>
                        <p className="Footer_div1_div2_div_p">Blog</p>
                        <p className="Footer_div1_div2_div_p">Pricing</p>
                    </div>

                </div>
                <div className="Footer_div1_div3">
                <p className="Footer_div1_div3_title">Resources</p>
                    <div className="Footer_div1_div3_div">
                        <p className="Footer_div1_div3_div_p">Proposal Template</p>
                        <p className="Footer_div1_div3_div_p">Invoice</p>
                        <p className="Footer_div1_div3_div_p">Tuturoial</p>
                        <p className="Footer_div1_div3_div_p">How to write a contract</p>
                    </div>
                </div>
                <div className="Footer_div1_div4">
                    <p className="Footer_div1_div4_title">Join Our Newsletter</p>
                    <div className="Footer_div1_div4_div">
                        <input className="Footer_div1_div4_div_input1" type="email" placeholder="Your email address"></input>
                        <input className="Footer_div1_div4_div_input2" type="submit" value="Subscribe"></input>
                    </div>
                    <p className="Footer_div1_div4_text">*  Will send you weekly updates for your better finance management.</p>
                </div>
               
            </div>
            <hr></hr>
            <div className="Footer_div2">
                <p className="Footer_div2_p">Copyright @ AR Shakir 2022. All Rights Reserved.</p>
            </div>
        </div>
    </div>)
}