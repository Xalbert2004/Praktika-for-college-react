import React, { useState } from "react";
import bgi from './images/bgi.png'
import play from './images/play.png'
import Modal from "./Modal/Modal";

function Header(){
    const [modalActive, setModalActive] = useState(false);
    const arr = [
        {id:1,title:'Product'},
        {id:2,title:'Template'},
        {id:3,title:'Blog'},
        {id:4,title:'Pricing'}
    ]
    return(<div className="header">
            <div className="header_menu">
                <p className="header_menu__p">AR Shakir</p>
                <ul className="header_menu_ul">
                    {arr.map(x=><li key={x.id}>{x.title}</li>)}
                </ul>
                <div className="header_menu_div">
                    <div className="header_menu_div_div">
                        Sign in
                    </div>
                    <button className="header_menu_div_button" onClick={() => setModalActive(true)} >Start Free</button>
                    <Modal active={modalActive} setActive={setModalActive}>
                        <div className="Start_free">
                            <p className="Start_free_title">Start Free</p>
                            <p className="Start_free_text">Start Free and start managing your candidates!</p>
                            <input className="Start_free_inp" type="text" placeholder="Login"></input>
                            <input className="Start_free_inp" type="password" placeholder="Password"></input>
                            <div className="Start_free_div">
                                <input className="Start_free_div_inp" id="chbox" name="chbox" type="checkbox"></input>
                                <label className="Start_free_div_label" for="chbox">Remember me </label>
                                <p className="Start_free_div_p">Forgot password?</p>
                            </div>
                            <button className="Start_free_button">Login</button>
                        </div>
                    </ Modal>
                </div>
            </div>
            <div className="header_section">
                <div className="header_section_div1">
                <p className="header_section_div1_p">Managing freelance payments has never been easier</p>
                <p className="header_section_div1_p1">Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. </p>
                <div className="header_section_div1_div">
                <button className="header_section_div1_button">Get Started</button>
                <img src ={play}></img>
                <p className="header_section_div1_div_p">See How It Works</p>
                </div>
                </div>
                <div className="header_section_div2">
                    <img src={bgi}></img>
                </div>
            </div>
    </div>)
}

export default Header;