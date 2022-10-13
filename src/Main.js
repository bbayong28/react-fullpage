import React, { useEffect, useState, useRef } from 'react'
import ReactFullpage from '@fullpage/react-fullpage';
import './css/Main.scss'
import { profile, portfolio } from './Data';

//portfolio배열에서 title을 빼서 배열을 만들어 쓰겠다.
const AC = portfolio.map(it => it = it.title);
//console.log(AC)

const Cover = ({ on, setOn }) => {
    const cover = useRef(null)
    const wheelStop = (e) => {
        e.stopPropagation();
    }
    useEffect(() => {
        cover.current.addEventListener('wheel', wheelStop);
        return () => { 
            cover.current.removeEventListener('wheel', wheelStop);
        }
    },[])
    return (
        <div className={`Cover ${on ? "on" : ""}`} >
            <ul>                
                {
                    portfolio.map((it, idx) => { 
                        return (
                            <li key={idx} onClick={() => setOn(!on)} ref={cover}>
                                <a href={`#${it.title}`}>{it.title}</a>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

const Main = () => {
    const [num, setNum] = useState(1);
    const [on, setOn] = useState(false);
     return (
         <div className='PF'>
             <Cover on={on} />
             <button className={`btn ${on ? "on" : ""}`} onClick={() => setOn(!on)}>
                <span>cover open</span>                 
             </button>
             <div className="num">{portfolio[num - 1]?.title}</div>
            <nav className='gnb'>
                <ul>
                    {
                         portfolio.map((it, idx) => { 
                             return (
                                 <li key={idx} className={it.id === num? "on" : ""}>
                                     <a href={`#${it.title}`}>{it.title}</a>
                                 </li>
                             )
                         })
                    }
                </ul>
            </nav>
          <ReactFullpage
            //fullpage options
            licenseKey = {'YOUR_KEY_HERE'}
              scrollingSpeed={1000} /* Options here */
                 anchors={['cover', ...AC, 'footer']}
                 afterLoad={(o,d) => console.log(o,d)}

            render={({ state, fullpageApi }) => {
            return (
                <ReactFullpage.Wrapper>
                    <div className="section">
                        <div className="case">Section 1 { profile.name } </div>
                    </div>       

                    {
                        portfolio.map((it, idx) => {
                            return (
                                <div className="section">
                                    <div className="case">
                                        <div className="inner">
                                            <div className="photo">
                                                <img src={it.src} alt={it.title}/>
                                            </div>
                                            <ul className="desc">
                                                <li>{it.title}</li>
                                                <li>{it.type}</li>
                                                <li>
                                                    <a href ={it.link} target='_blank'>
                                                        LINK
                                                    </a>
                                                </li>
                                                <li>
                                                    <p>{it.info}</p>
                                                </li>
                                                <li>
                                                    {
                                                        it.color && <strong>color</strong>
                                                    }                                                    
                                                    <ol>
                                                        {
                                                            it.color?.map((color, idx) => {
                                                                return (
                                                                    <li style={{background : color}}>{color}</li>
                                                                )
                                                            })
                                                        }
                                                    </ol>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }                    
                    <div className="section">
                        <div className="case">Section 1 (welcome to fullpage.js)</div>
                    </div> 
                </ReactFullpage.Wrapper>
                );
            }}
        />;
    </div>
  )
}

export default Main