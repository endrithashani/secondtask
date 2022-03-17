import { useState } from "react";
function NestedToggle() {
  const[selected,setSelected]=useState(null);
  const Nestedtoggle = (i) =>{
    if(selected == i){
      return setSelected(null)
    }

    setSelected(i)
  }
  
  return (
    <div className="container-nested">
    <div className="nested-container">
    {datas.map((card , i)=>{
      const{content,title}=card;
      return(
        
        <div className="items">
        <div className="contents" onClick={()=>Nestedtoggle(i)}>
        <h4>{content}</h4>
        <span>{selected === i ? '˄' : '˃'}</span>
        </div>
        <div className={selected === i ? 'titles show' : 'titles'}>
        <p>{title}</p>
        </div>
        </div>
        )
    })}
    </div>
    </div>
  );
}
const datas=[
  {
  content:"Why does Parkname seperate itself from other name parking companies ?",
  title:"Your domain are a valuable online property. As in any investment, you want the most efficient,easy way to make sure your property is going to be profitable.Do you own more than 1000 domains? As a professional domainer, you will find everything you need through Parkname to generate maximum profits fromyour domain portfolio.",
  },
  {
  content:"Is Parkname Parking actually free?",
  title:"Why park a domain name in Parkname ?",
  },
  {
  content:"What you do ?",
  title:"Why park a domain name in Parkname ?",
  },
  {
  content:"When was Parkname first founded ?",
  title:"Why park a domain name in Parkname ?",
  },    
]

export default NestedToggle;