import React from 'react';
import img3 from './images/img3.png'
import s8img1 from './images/s8img1.png';
import s8img2 from './images/s8img2.png';
import s8img3 from './images/s8img3.png';

export default function Section8() {
    const arr = [
        {
          id:1,
          title:"Best Practices",
          text:"Partiality on or continuing particular principles as.",
          img:s8img1,
      },
        {
            id:2,
          title:"Best Practices",
          text:"Village did removed enjoyed explain",
          img:s8img2,
      },
      {
        id:3,
        title:"Best Practices",
        text:"Wise busy past both park when an ye no. Nay likely her length.",
        img:s8img3,
    }
      ]
    return(<div>
        <div className="Section8">
            <div className='Section8_div'>
                <div className="Section8_div_div1">
                    <p className="Section8_div_div1_p">Recent Blogs</p>
                </div>
                <div className="Section8_div_div2">
                    <div className="Section8_div_div2_div1">
                        <div className="Section8_div_div2_div1_title">
                            <p className="Section8_div_div2_div1_title_p">Best Practices</p>
                        </div>
                        <div className="Section8_div_div2_div1_text">
                            <p className="Section8_div_div2_div1_text_p">In design active temper be uneasy. Thirty for remove plenty regard.</p>
                        </div>
                        <div className="Section8_div_div2_div1_more">
                            <p className="Section8_div_div2_div1_more_p">Read More</p>
                        </div>

                    </div>
                    <div className="Section8_div_div2_div2">
                        <img className="Section8_div_div2_div2_img" src={img3}></img>

                    </div>

                </div>
                <div className="Section8_div_div3">
                {arr.map(x=> 
                        <div key={x.id} className="Section8_div_div3_div">
                            <div className="Section8_div_div3_div_title">
                                <p className="Section8_div_div3_div_title_p">{x.title}</p> 

                            </div>
                            <div className="Section8_div_div3_div_text">
                                <p className="Section8_div_div3_div_text_p">{x.text}</p>

                            </div>
                            <div className="Section8_div_div3_div_img">
                                <img className="Section8_div_div3_div_img_img" src={x.img}></img>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    </div>)
}

