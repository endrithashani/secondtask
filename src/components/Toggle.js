import { useState } from "react";
function Toggle() {
  const[selected,setSelected]=useState(null);
  const toggle = (i) =>{
    if(selected == i){
      return setSelected(null)
    }

    setSelected(i)
  }
  return (
    <div className="toggle-container">  
    <div className="toggle">
    {data.map((card , i)=>{
      const{content,title}=card;
      return(
      <div className="item">
      <div className="content" onClick={()=>toggle(i)}>
      <h4>{content}</h4>
      <span>{selected === i ? '˄' : '˅'}</span>
      </div>
      <div className={selected === i ? 'title show' : 'title'}>
      <p>{title}</p>
      </div>
      </div>
      )
    })}
    </div>
    </div>
  );
}
const data=[
  {
  content:"Why park a domain name in Parkname ?",
  title: "Parkname is the leading industry standard for domain parking and monetization services. We offer a wide variety of services to help you achieve success.",
  }
]
  export default Toggle;
