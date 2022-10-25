

import React, { useEffect, useRef, useState } from 'react'
/* import { Link } from 'react-router-dom'; */
import ReactFullpage from '@fullpage/react-fullpage';
import './css/Main.scss';
import { cMenu, portfolio, r_portfolio, script} from './Data';
import { BsGithub, BsEnvelope, BsTelephone, BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
//import "slick-carousel/slick/slick-theme.css";

//portfolio배열에서 title을 빼서 배열을 만들어 쓰겠다.
const AC = portfolio.map(it => it = it.title);


const Cover = ({ on, setOn }) => {
    const cover = useRef(null)
    const wheelStop = e => {
        e.stopPropagation();
    }
    //cover메뉴 열었을 때 wheel 막기  
    useEffect(() => {
        cover.current.addEventListener('wheel', wheelStop);
        return () => {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            cover.current.removeEventListener('wheel', wheelStop);
        }
    }, [])
    return (
        <div className={`Cover ${on ? "on" : ""}`} ref={cover}>     
            <div className='inCover'>
                <ul className='top'>
                    {
                        cMenu.map((it, idx) => {
                            return (
                                <li key={idx} onClick={() => setOn(!on)}>
                                    <a href={`#${it.title}`}>{it.title}</a>
                                </li>
                            )
                        })
                    }
                </ul>
                <div className="bottom">
                    SHIN HWAYEONG'S PORTFOLIO
                </div>
                
              {/*  <div className='left'>
                    <a href='#home'>HOME</a>
                </div>
                <ul className='middle'>
                    {
                        cMenu.map((it, idx) => {
                            return (
                                <li key={idx} onClick={() => setOn(!on)} className="middle">
                                    <a href={`#${it.title}`}>{it.title}</a>
                                </li>
                            )
                        })
                    }
                </ul>
                
                <div className='right'>
                    <a href='#contact'>PROFILE</a>
                </div> */}
            </div>
        </div>
    )
}

const Main = () => {
    /* const [con, setCon] = useState("home"); */
    const [num, setNum] = useState(1);
    const [on, setOn] = useState(false);

    const SLIDE = useRef(null);


    return (
        <div className='PF'>
           <Cover on={on} setOn={setOn} />
            <button className={`btn ${on ? "on" : ""}`} onClick={() => setOn(!on)}>
                <span>cover open</span>
            </button>
           <div className='num'>{cMenu[num - 1]?.title}</div> 
            <nav className='gnb'>
                <ul>
                    {["home", ...AC, "contact"].map((it, idx) => {
                        return (
                            <li key={idx} className={it.id === num ? "on" : ""}>
                                <a href={`#${it.title}`}>{it.name}</a>
                            </li>
                        )}
                    )}
                </ul>
            </nav>
            <ReactFullpage
                //fullpage options
                licenseKey={'YOUR_KEY_HERE'}
                scrollingSpeed={500} /* Options here */
                anchors={['home', ...AC, 'contact']}
                afterLoad={(o, d) => {
                    setNum(d.index);
                    /* setCon(d.anchor); */
                }}
                render={({ state, fullpageApi }) => {

                    const settings = {
                        dots: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows:false,
                    };
                    

                    return (
                        <ReactFullpage.Wrapper>
                            <div className="section pf_home">
                                <div className='page'>
                                    <p className='tMenu'>HOME</p>
                                    <div className="inner">           
                                        <p>Front-End Developer Portfolio</p>    
                                        <h1>Hello, I'm<br/>Hwayeong Shin.</h1>
                                    </div>                                    
                                </div>
                            </div>

                            <div className="section pf_about">
                                <div className='page'>                                    
                                    <p className='tMenu'>ABOUT</p>
                                    <div className="inner">
                                        <div className="left">
                                            <div className="top">
                                                <strong>안녕하세요.</strong>
                                                <p className='mar_20'>저는 프론트엔드 개발자를 꿈꾸는 신화영입니다 :)</p>
                                                <p>작은 문제부터 차근차근 해결해나가며  작은 문제부터 차근차근 해결해나가며</p>
                                                <p>작은 문제부터 차근차근 해결해나가며  작은 문제부터 차근차근 해결해나가며</p>
                                                <p>작은 문제부터 차근차근 해결해나가며  작은 문제부터 차근차근 해결해나가며</p>
                                                <p>작은 문제부터 차근차근 해결해나가며  작은 문제부터 차근차근 해결해나가며</p>
                                                <p>작은 문제부터 차근차근 해결해나가며  작은 문제부터 차근차근 해결해나가며</p>
                                                <p className='mar_20'>작은 문제부터 차근차근 해결해나가며  작은 문제부터 차근차근 해결해나가며</p>
                                                <p>작은 문제부터 차근차근 해결해나가며  작은 문제부터 차근차근 해결해나가며</p>
                                                <p>작은 문제부터 차근차근 해결해나가며  작은 문제부터 차근차근 해결해나가며</p>
                                                <p>작은 문제부터 차근차근 해결해나가며  작은 문제부터 차근차근 해결해나가며</p>
                                               
                                            </div>
                                            <div className="bottom">
                                                <span>SKILLS</span>
                                                <div className='skills'>                                                    
                                                    <ul>
                                                        <li></li>
                                                        <li></li>
                                                        <li></li>
                                                        <li></li>
                                                        <li></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            
                                        </div>
                                        <div className="right">
                                            <div className="pic">
                                                    <img src={`${process.env.PUBLIC_URL}/img/id_photo.png`} alt="id_photo" />                                                   
                                            </div>
                                        </div>
                                    </div>                                    
                                </div>
                            </div>

                            <div className="section pf_js" >                                           
                                <div className='page'>
                                    <p className='tMenu'>JS / Jquery<span>PUBLISHING PROJECT</span></p>
                                     <div className="inner">
                                        <div className="slide">
                                            <Slider {...settings}>                                                   
                                                    {
                                                    portfolio.map((it, idx) => {
                                                            return (
                                                                <div className='slide_inner'>
                                                                    <div className="left">
                                                                        <p className='title'>{it.title}</p>
                                                                        <ul className="about">                                                                            
                                                                            <li>- Type : {it.type}</li>
                                                                            <li>- Tool : {it.tool}</li>
                                                                            <li>- Font : {it.font}</li>
                                                                            <li className='color'>
                                                                                {
                                                                                    it.color && <strong>- Color : </strong>
                                                                                }
                                                                                <ol>
                                                                                    {
                                                                                        it.color?.map((color, idx) => {
                                                                                            return (
                                                                                                <li key={idx} style={{ background: color }}>{color}</li>
                                                                                            )
                                                                                        })
                                                                                    }
                                                                                </ol>
                                                                            </li>
                                                                            <li>
                                                                                <p>- 참여도 : 100%</p>
                                                                            </li>
                                                                            <li>
                                                                                <a to={it.link} target='_blank' className='link'>
                                                                                    <button>Web Page</button>
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="right">
                                                                        <div className='mockup'>
                                                                            <div className="pc">
                                                                                <div className='pc_cover'>
                                                                                    <img src={`${process.env.PUBLIC_URL}/img/fullpage0${it.id}.png`} alt={it.title} />
                                                                                </div>
                                                                            </div>
                                                                            <div className="mobile">
                                                                                <div className='mobile_cover'>
                                                                                    <img className='mo_top' src={process.env.PUBLIC_URL + "/img/mobile_top.png"} alt={it.title} />
                                                                                    <img className='mo_web' src={`${process.env.PUBLIC_URL}/img/m_fullpage0${it.id}.png`} alt={it.title} />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )
                                                        })
                                                    }                                              
                                                </Slider>                                                                     
                                        </div>
                                        <BsChevronLeft className='arrow_left' onClick={() => SLIDE.current.slickPrev()} />
                                            <BsChevronRight className='arrow_right' onClick={() => SLIDE.current.slickPrev()} />
                                    </div>
                                </div>
                            </div>

                            <div className="section pf_react" >                                           
                                <div className='page'>
                                    <p className='tMenu'>React<span>PUBLISHING PROJECT</span></p>
                                     <div className="inner">
                                        <div className="slide">
                                            <Slider {...settings}>                                                   
                                                    {
                                                    r_portfolio.map((it, idx) => {
                                                            return (
                                                                <div className='slide_inner'>
                                                                    <div className="left">
                                                                        <p className='title'>{it.title}</p>
                                                                        <ul className="about">                                                                            
                                                                            <li>- Type : {it.type}</li>
                                                                            <li>- Tool : {it.tool}</li>
                                                                            <li>- Font : {it.font}</li>
                                                                            <li className='color'>
                                                                                {
                                                                                    it.color && <strong>- Color : </strong>
                                                                                }
                                                                                <ol>
                                                                                    {
                                                                                        it.color?.map((color, idx) => {
                                                                                            return (
                                                                                                <li key={idx} style={{ background: color }}>{color}</li>
                                                                                            )
                                                                                        })
                                                                                    }
                                                                                </ol>
                                                                            </li>
                                                                            <li>
                                                                                <p>- 참여도 : 100%</p>
                                                                            </li>
                                                                            <li>
                                                                                <a to={it.link} target='_blank' className='link'>
                                                                                    <button>Web Page</button>
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="right">
                                                                        <div className='mockup'>
                                                                            <div className="pc">
                                                                                <div className='pc_cover'>
                                                                                    <img src={`${process.env.PUBLIC_URL}/img/rfullpage0${it.id}.png`} alt={it.title} />
                                                                                </div>
                                                                            </div>
                                                                            {/* <div className="mobile">
                                                                                <div className='mobile_cover'>
                                                                                    <img className='mo_top' src={process.env.PUBLIC_URL + "/img/mobile_top.png"} alt={it.title} />
                                                                                    <img className='mo_web' src={`${process.env.PUBLIC_URL}/img/m_fullpage0${it.id}.png`} alt={it.title} />
                                                                                </div>
                                                                            </div> */}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )
                                                        })
                                                    }                                              
                                                </Slider>                                                                     
                                        </div>
                                        <BsChevronLeft className='arrow_left' onClick={() => SLIDE.current.slickPrev()} />
                                            <BsChevronRight className='arrow_right' onClick={() => SLIDE.current.slickPrev()} />
                                    </div>
                                </div>
                            </div>

                            <div className="section pf_script" >                                           
                                <div className='page'>
                                    <p className='tMenu'>Script<span>PUBLISHING PROJECT</span></p>
                                     <div className="inner">
                                        <div className="slide">
                                            <Slider {...settings}>                                                   
                                                    {
                                                    script.map((it, idx) => {
                                                            return (
                                                                <div className='slide_inner'>
                                                                    <div className="left">
                                                                        <p className='title'>{it.title}</p>
                                                                        <ul className="about">                                                                            
                                                                            <li>- Type : {it.type}</li>
                                                                            <li>- Tool : {it.tool}</li>
                                                                            <li>- Font : {it.font}</li>
                                                                            <li className='color'>
                                                                                {
                                                                                    it.color && <strong>- Color : </strong>
                                                                                }
                                                                                <ol>
                                                                                    {
                                                                                        it.color?.map((color, idx) => {
                                                                                            return (
                                                                                                <li key={idx} style={{ background: color }}>{color}</li>
                                                                                            )
                                                                                        })
                                                                                    }
                                                                                </ol>
                                                                            </li>
                                                                            <li>
                                                                                <p>- 참여도 : 100%</p>
                                                                            </li>
                                                                            <li>
                                                                                <a to={it.link} target='_blank' className='link'>
                                                                                    <button>Web Page</button>
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="right">
                                                                        <div className='mockup'>
                                                                            <div className="pc">
                                                                                <div className='pc_cover'>
                                                                                    <img src={`${process.env.PUBLIC_URL}/img/Sfullpage0${it.id}.png`} alt={it.title} />
                                                                                </div>
                                                                            </div>
                                                                            {/* <div className="mobile">
                                                                                <div className='mobile_cover'>
                                                                                    <img className='mo_top' src={process.env.PUBLIC_URL + "/img/mobile_top.png"} alt={it.title} />
                                                                                    <img className='mo_web' src={`${process.env.PUBLIC_URL}/img/m_fullpage0${it.id}.png`} alt={it.title} />
                                                                                </div>
                                                                            </div> */}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )
                                                        })
                                                    }                                              
                                                </Slider>                                                                     
                                        </div>
                                        <BsChevronLeft className='arrow_left' onClick={() => SLIDE.current.slickPrev()} />
                                            <BsChevronRight className='arrow_right' onClick={() => SLIDE.current.slickPrev()} />
                                    </div>
                                </div>
                            </div>

                            <div className="section pf_contact">
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
                        </ReactFullpage.Wrapper>
                    );
                }}
            />
        </div>
    )
}

export default Main
