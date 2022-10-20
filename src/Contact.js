import React from 'react'
import './css/Contact.scss'
import { BsGithub, BsEnvelope, BsTelephone } from "react-icons/bs";

const Contact = () => {
return (
        <div className="section contact">
            <div className='oon'>
                <div className='up'>
                    <div className='left'>                                            
                        <h2>MY<br/>CONTACT</h2>   
                    </div>
                    <div className='right'>
                        <form>       
                            <div className="top">
                                <div className="input_box"> 
                                    <input type="text" id="name" placeholder='Name'/>
                                </div>
                                <div className="input_box">       
                                    <input type="text" id="email" placeholder='Email'/>
                                </div>
                            </div>
                            <div className="input_box">
                                <textarea name="comment" placeholder='Comment' id="comment" cols="100" rows="20"></textarea>
                            </div>
                            <div className="input_submit">                            
                                <input type="submit" value="SUBMIT" />
                            </div>
                        </form>
                    </div>
                </div>                
                <div className='down'>
                    <div className='top'>
                        <div className='left'>
                            SHIN HWAYEONG
                        </div>
                    <div className='right'>
                            <a href='#!'>
                                <BsGithub />
                            </a>
                            <a href='mailto:ghkdud5795@naver.com'>
                                <BsEnvelope />
                            </a>
                            <a href='tel:010-7777-8888'>
                                <BsTelephone />
                            </a>
                        </div>
                    </div>
                    <div className='bottom'>
                        THANK YOU FOR VIEWING MY PORTFOLIO.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact