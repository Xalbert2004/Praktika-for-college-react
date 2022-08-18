import React from 'react';
import nkar8 from './images/nkar8.svg';
import img1 from './images/img1.png';
import img2 from './images/img2.png';

export default function Section6() {
  const arr = [
    {
      id:1,
      title:"Wise busy past both park when an ye no. Nay likely her length sooner thrown sex lively income. The expense windows . Blessing welcomed ladyship.",
      text:"- Mike Taylor, Web Designer",
      img:img1,
  },
    {
      id:2,
      title:"Wise busy past both park when an ye no. Nay likely her length sooner thrown sex lively income. The expense windows . Blessing welcomed ladyship.",
      text:"- Mike Taylor, Web Designer",
      img:img2,
  }
  ]
  return (
    <div>
      <div className='Section6'>
            <div className='Section6_div1'>
                <div className='Section6_div1_div1'>
                  <div className="Section6_div1_div1_title">
                    <p className="Section6_div1_div1_title_p">Testimonials</p>
                  </div>
                  <div className="Section6_div1_div1_text">
                    <p className="Section6_div1_div1_text_p">We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own.</p>

                  </div>
                </div>
                <div className='Section6_div1_div2'>
                  <img className='Section6_div1_div2_img' src={nkar8}></img>
                </div>
            </div>
              <div className='Section6_div2'>
                {arr.map(x=> 
                  <div key={x.id} className="Section6_div2_div1">
                      <div className="Section6_div2_div1_div1">
                        <div className="Section6_div2_div1_div1_title">{x.title}</div>
                        <div className="Section6_div2_div1_div1_text">{x.text}</div>

                      </div>
                      <div className="Section6_div2_div1_div2">
                        <img className="Section6_div2_div1_div2_img" src={x.img}></img>
                        
                      </div>
                  </div>
                )}
              </div>
      </div>
    </div>
  )
}
