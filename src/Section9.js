import React from 'react';
import isms from './images/isms.png';
import icons8 from './images/icons8.png';

export default function Section9() {
    // const arr = [
    //     {
    //         title:"Six curiosity day assurance bed necessary?",
    //         icon:icons8
    //     },
    //     {
    //         title:"Produce say the ten moments parties?",
    //         icon:icons8
    //     },
    //     {
    //         title:"Simple innate summer fat appear basket his desire joy?",
    //         icon:icons8
    //     },
    //     {
    //         title:"Outward clothes promise at gravity do excited?",
    //         icon:icons8
    //     }
    // ]
  return (
    <div>
      <div className='Section9'>
        <div className='Section9_div1'>
            Fequently <br></br> asked questions

        </div>
        <div className='Section9_div2'>
            <div className='Section9_div2_div1'>
                <div className='Section9_div2_div1_div1'>
                    <div className='Section9_div2_div1_div1_div1'>
                        <p>The expense windows adapted sir. Wrong widen drawn.</p>
                        <img src={icons8}></img>
                    </div>
                    <div className='Section9_div2_div1_div1_div2'>
                        <p>Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her. </p>
                    </div>
                </div>
                <div className='Section9_div2_div1_div2'>
                    <p>Six curiosity day assurance bed necessary?</p>
                    <img src={icons8}></img>

                </div>
                <div className='Section9_div2_div1_div2'>
                    <p>Produce say the ten moments parties?</p>
                    <img src={icons8}></img>

                </div>
                <div className='Section9_div2_div1_div2'>
                    <p>Simple innate summer fat appear basket his desire joy?</p>
                    <img src={icons8}></img>

                </div>
                <div className='Section9_div2_div1_div2'>
                    <p>Outward clothes promise at gravity do excited?</p>
                    <img src={icons8}></img>

                </div>
            </div>
            <div className='Section9_div2_div2'>
                <div className='Section9_div2_div2_img'>
                    <img src={isms}></img>
                    <p className='Section9_div2_div2_img_p1'>Do you have more questions?</p>
                    <p className='Section9_div2_div2_img_p2'>End-to-end payments and financial management in a single solution. Meet the right platform to help realize.</p>
                    <button> Shoot a Direct Mail</button>

                </div>
            </div>

        </div>
      </div>
    </div>
  )
}
