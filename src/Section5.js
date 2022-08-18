import React from "react";
import nkar1 from './images/nkar1.svg'
import nkar3 from './images/nkar3.svg'


export default function Section5() {

    const arr = [
        {
            id:1,
            title:'Merits behind on afraid or warmly'
        },

        {
            id:2,
            title:'Believing neglected so so allowance existence'}
    ]

    return (<div>
        <div className="Section5">
            <div className="Section5_div">
                <div className="Section5_div_div1">
                    <p className="Section5_div_div1_title">Features that blows mind</p>
                    <p className="Section5_div_div1_text">We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own.</p>
                </div>
                <div className="Section5_div_div2">
                    <div className="Section5_div_div2_div1">
                        <div>
                            <div><img className="Section5_div_div2_div1_img" src={nkar1}></img></div>
                            <p className="Section5_div_div2_div1_title">Really boy law county she unable her sister</p>
                            <p className="Section5_div_div2_div1_text">We so opinion friends me message as delight. Whole front do of plate heard oh ought.</p>
                        </div>
                    </div>
                    <div className="Section5_div_div2_div1">
                        <div>
                            <div><img className="Section5_div_div2_div1_img" src={nkar3}></img></div>
                            <p className="Section5_div_div2_div1_title">Among sex are leave law built now</p>
                            <p className="Section5_div_div2_div1_text">We so opinion friends me message as delight. Whole front do of plate heard oh ought.</p>
                        </div>
                    </div>
                    <div className="Section5_div_div2_div3">
                        {arr.map(x=>
                            <div key={x.id} className="Section5_div_div2_div3_div">{x.title}</div>
                            )}
                    </div>
                </div>
            </div>
        </div>
    </div>)
}
