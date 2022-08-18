import React from 'react'
import bgcsec2 from './images/bgcsec2.png'
import nkar1 from './images/nkar1.svg'
import nkar2 from './images/nkar2.svg'
import nkar3 from './images/nkar3.svg'

export default function Section2() {
  const arr = [

    {
      id:1,
    number:'01',
    img:nkar1,
    title:'Connect wallets & companies',
    text:'Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.'
    },
    {
      id:2,
      
      number:'02',
    img:nkar2,
    title:'Review transactions',
    text:"Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of. "
    },
    {
      id:3,
      number:'03',
    img:nkar3,
    title:'Get income insights',
    text:"Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of. "
    }
  ]
  return (
    <div>
      <div className='Section2'>
        <div className='Section2_div1'>
            <div className='Section2_div1_div1'>
            <p className='Section2_div1_div1_p1'>
            Automated portfolio tracking
            </p>
            <p className='Section2_div1_div1_p2'>
            Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. </p>
            </div>
            <div className='Section2_div1_div2'>
                <img className='Section2_div1_div2_img' src={bgcsec2}></img>
                <p className='Section2_div1_div2_p1'>
                Wise busy past both park when an ye no. Nay likely her length sooner thrown sex lively income. The expense windows adapted sir. Wrong widen.
                </p>
                <p className='Section2_div1_div2_p2'>
                - Mike Taylor, Web Designer
                </p>
            </div>
            </div>
        <div className='Section2_div2'>
        {arr.map(x=>
          <div key={x.id} className='Section2_div2_div1'><p className='Section2_div2_div1_number'>{x.number}</p>
            <div className='Section2_div2_div1_div'>
          <img className='Section2_div2_img' src={x.img}></img>
          <p className='Section2_div2_div1_div_title'>{x.title}</p>
          <p className='Section2_div2_div1_div_text'>{x.text}</p>
          
          </div>
          </div>
          )}
        </div>
      </div>
    </div>
  )
}
