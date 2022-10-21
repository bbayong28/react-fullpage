/* const profile = {
    title :"Front-End Developer Portfolio",
    name : "shinhwayeong",
    email : "ghkdud5795@naver.com",
    tel : "010-5555-5555"
}

export { profile }
 */




const cMenu = [
    { id: 1, title: "HOME" },
    { id: 2, title: "ABOUT"},
    { id: 3, title: "JS / JQUERY"},
    { id: 4, title: "REACT"},
    { id: 5, title: "CONTACT" }
]

const portfolio = [
    {
        id: 1,
        name: "PF_01",
        title: "MASIMODUDDI",
        type: "Responsive Web",
        tool: ["HTML5", "CSS3", "JavaScript", "J-Query"],
        font: ["Noto Sans Korean","Noto Sans Korean"],
        info: "브랜드의 원래 로고나 제품 피키지 디자인을\n참고하여, 모던하고 딥한 이미지를 고취시킬\n수 있는 다크모드로 디자인 했습니다.\n전체적으로 무채색을 사용하여 브랜드의 정체성을\n드러냈고, 첫번째 섹션은 브랜드만이 가지고 있는\n특이점이라고 생각 해 타이포그라피와 색감을\n이용해 디자인했습니다.",
        color: ["#369", "#f00", "#f0f"],
        skill: ["react", "react-router-dom", "axios", "redux-tollkit"],
        src: process.env.PUBLIC_URL + "/img/pf01.jpg",
        link: "https://bbayong28.github.io"
    },
    {
        id: 2,
        title: "KOOKSARANG",
        name: "PF_02",
        type: "Responsive Web",
        tool: ["HTML5", "CSS3", "JavaScript", "J-Query"],
        font: ["Noto Sans Korean","Noto Sans Korean"],
        info: "브랜드의 원래 로고나 제품 피키지 디자인을\n참고하여, 모던하고 딥한 이미지를 고취시킬\n수 있는 다크모드로 디자인 했습니다.\n전체적으로 무채색을 사용하여 브랜드의 정체성을\n드러냈고, 첫번째 섹션은 브랜드만이 가지고 있는\n특이점이라고 생각 해 타이포그라피와 색감을\n이용해 디자인했습니다.",
        color: ["#ddd", "#ff0", "#369"],
        skill: ["react", "react-router-dom", "axios", "redux-tollkit"],
        src: process.env.PUBLIC_URL + "/img/pf01.jpg",
        link: "https://bbayong28.github.io"
    },
    {
        id: 3,
        title: "METAQUEST",        
        name: "PF_03",
        type: "Responsive Web",
        tool: ["HTML5", "CSS3", "JavaScript", "J-Query"],
        font: ["Noto Sans Korean","Noto Sans Korean"],
        info: "브랜드의 원래 로고나 제품 피키지 디자인을\n참고하여, 모던하고 딥한 이미지를 고취시킬\n수 있는 다크모드로 디자인 했습니다.\n전체적으로 무채색을 사용하여 브랜드의 정체성을\n드러냈고, 첫번째 섹션은 브랜드만이 가지고 있는\n특이점이라고 생각 해 타이포그라피와 색감을\n이용해 디자인했습니다.",
        color: ["#00f", "#0ff", "orange"],
        skill: ["react", "react-router-dom", "axios", "redux-tollkit"], src: process.env.PUBLIC_URL + "/img/pf01.jpg",
        link: "https://bbayong28.github.io"
    },
    {
        id: 4,
        title: "METAQUEST",        
        name: "PF_04",
        type: "Responsive Web",
        tool: ["HTML5", "CSS3", "JavaScript", "J-Query"],
        font: ["Noto Sans Korean","Noto Sans Korean"],
        info: "브랜드의 원래 로고나 제품 피키지 디자인을\n참고하여, 모던하고 딥한 이미지를 고취시킬\n수 있는 다크모드로 디자인 했습니다.\n전체적으로 무채색을 사용하여 브랜드의 정체성을\n드러냈고, 첫번째 섹션은 브랜드만이 가지고 있는\n특이점이라고 생각 해 타이포그라피와 색감을\n이용해 디자인했습니다.",
        color: ["#00f", "#0ff", "orange"],
        skill: ["react", "react-router-dom", "axios", "redux-tollkit"], src: process.env.PUBLIC_URL + "/img/pf01.jpg",
        link: "https://bbayong28.github.io"
    },


]

const r_portfolio = [
    {
        id: 1,
        name: "RPF_01",
        title: "KAKAOPAY",
        type: "Responsive Web",
        tool: ["HTML5", "CSS3", "REACT"],
        font: ["Noto Sans Korean","Noto Sans Korean"],
        info: "브랜드의 원래 로고나 제품 피키지 디자인을\n참고하여, 모던하고 딥한 이미지를 고취시킬\n수 있는 다크모드로 디자인 했습니다.\n전체적으로 무채색을 사용하여 브랜드의 정체성을\n드러냈고, 첫번째 섹션은 브랜드만이 가지고 있는\n특이점이라고 생각 해 타이포그라피와 색감을\n이용해 디자인했습니다.",
        color: ["#369", "#f00", "#f0f"],
        skill: ["react", "react-router-dom", "axios", "redux-tollkit"],
        src: process.env.PUBLIC_URL + "/img/pf01.jpg",
        link: "https://bbayong28.github.io/practice01_tr/"
    },
    {
        id: 2,
        name: "RPF_02",
        title: "Converter",
        type: "Responsive Web",
        tool: ["HTML5", "CSS3", "REACT"],
        font: ["Noto Sans Korean","Noto Sans Korean"],
        info: "여러가지 단위를 변환해주는 변환기를 만들어 보았습니다.\n참고하여, 모던하고 딥한 이미지를 고취시킬\n수 있는 다크모드로 디자인 했습니다.\n전체적으로 무채색을 사용하여 브랜드의 정체성을\n드러냈고, 첫번째 섹션은 브랜드만이 가지고 있는\n특이점이라고 생각 해 타이포그라피와 색감을\n이용해 디자인했습니다.",
        color: ["#0088a9", "#24252A", "#fff"],
        skill: ["react", "react-router-dom", "axios", "redux-tollkit"],
        src: process.env.PUBLIC_URL + "/img/pf02.jpg",
        link: "https://bbayong28.github.io/home/nmd_react/index"
    },
]

const script = [
    {
        id: 1,
        name: "RPF_01",
        title: "KAKAOPAY",
        type: "Responsive Web",
        tool: ["HTML5", "CSS3", "REACT"],
        font: ["Noto Sans Korean","Noto Sans Korean"],
        info: "브랜드의 원래 로고나 제품 피키지 디자인을\n참고하여, 모던하고 딥한 이미지를 고취시킬\n수 있는 다크모드로 디자인 했습니다.\n전체적으로 무채색을 사용하여 브랜드의 정체성을\n드러냈고, 첫번째 섹션은 브랜드만이 가지고 있는\n특이점이라고 생각 해 타이포그라피와 색감을\n이용해 디자인했습니다.",
        color: ["#369", "#f00", "#f0f"],
        skill: ["react", "react-router-dom", "axios", "redux-tollkit"],
        src: process.env.PUBLIC_URL + "/img/pf01.jpg",
        link: "https://bbayong28.github.io/practice01_tr/"
    },
    {
        id: 2,
        name: "RPF_01",
        title: "KAKAOPAY",
        type: "Responsive Web",
        tool: ["HTML5", "CSS3", "REACT"],
        font: ["Noto Sans Korean","Noto Sans Korean"],
        info: "브랜드의 원래 로고나 제품 피키지 디자인을\n참고하여, 모던하고 딥한 이미지를 고취시킬\n수 있는 다크모드로 디자인 했습니다.\n전체적으로 무채색을 사용하여 브랜드의 정체성을\n드러냈고, 첫번째 섹션은 브랜드만이 가지고 있는\n특이점이라고 생각 해 타이포그라피와 색감을\n이용해 디자인했습니다.",
        color: ["#369", "#f00", "#f0f"],
        skill: ["react", "react-router-dom", "axios", "redux-tollkit"],
        src: process.env.PUBLIC_URL + "/img/pf01.jpg",
        link: "https://bbayong28.github.io/practice01_tr/"
    },
]


export {cMenu, portfolio, r_portfolio, script}