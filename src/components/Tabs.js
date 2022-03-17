import React from 'react';
import {Tab , Tabs ,TabList , TabPanel} from 'react-tabs';
import Cards from './Cards';


export default () => (
  
    <Tabs className="container">
      <TabList  activeTabClassName='is-selected' className="bloc-tabs" selected>
        <Tab className="tabs">Domains</Tab>
        <Tab className="tabs ">Web Hosting</Tab>
        <Tab className="tabs">Dedicated Servers</Tab>
        <Tab className="tabs">Virtual Cloud Servers</Tab>
        <Tab className="tabs">WordPress Hosting</Tab>
        <Tab className="tabs">Email Hosting</Tab>
        <Tab className="tabs">VPS Hosting Servers</Tab>
        <Tab className="tabs">Free Hosting</Tab>
      </TabList>
  
      <TabPanel className="content-tabs">
      {Cards[0].card1.map((card) =>{
            const{name , price ,description} = card;
            return (
      <div className="after-display">
        <h2>{name}</h2>
        <h3>{price} </h3>
        <p>{description} </p>
        <button className="buy">Buy Now</button>
        </div>
          )
        
          })
        }   
      </TabPanel>
      <TabPanel className="content-tabs">
      {Cards[0].card2.map((card2) =>{
            const{name , price ,description} = card2;
            return (
      <div className="after-display">
        <h2>{name}</h2>
        <h3>{price} </h3>
        <p>{description} </p>
        <button className="buy">Buy Now</button>
        </div>
                      )
        
                    })
                }   
      </TabPanel>
      <TabPanel className="content-tabs">
      {Cards[0].card3.map((card2) =>{
            const{name , price ,description} = card2;
            return (
      <div className="after-display">
        <h2>{name}</h2>
        <h3>{price} </h3>
        <p>{description} </p>
        <button className="buy">Buy Now</button>
        </div>
                      )
        
                    })
                }   
      </TabPanel>
      <TabPanel className="content-tabs">
      {Cards[0].card4.map((card2) =>{
            const{name , price ,description} = card2;
            return (
      <div className="after-display">
        <h2>{name}</h2>
        <h3>{price} </h3>
        <p>{description} </p>
        <button className="buy">Buy Now</button>
        </div>
                      )
        
                    })
                }   
      </TabPanel>
      <TabPanel className="content-tabs">
      {Cards[0].card5.map((card2) =>{
            const{name , price ,description} = card2;
            return (
      <div className="after-display">
        <h2>{name}</h2>
        <h3>{price} </h3>
        <p>{description} </p>
        <button className="buy">Buy Now</button>
        </div>
                      )
        
                    })
                }   
      </TabPanel>
      <TabPanel className="content-tabs">
      {Cards[0].card6.map((card2) =>{
            const{name , price ,description} = card2;
            return (
      <div className="after-display">
        <h2>{name}</h2>
        <h3>{price} </h3>
        <p>{description} </p>
        <button className="buy">Buy Now</button>
        </div>
                      )
        
                    })
                }   
      </TabPanel>
      <TabPanel className="content-tabs">
      {Cards[0].card7.map((card2) =>{
            const{name , price ,description} = card2;
            return (
      <div className="after-display">
        <h2>{name}</h2>
        <h3>{price} </h3>
        <p>{description} </p>
        <button className="buy">Buy Now</button>
        </div>
                      )
        
                    })
                }   
      </TabPanel>
      <TabPanel className="content-tabs">
      {Cards[0].card8.map((card2) =>{
            const{name , price ,description} = card2;
            return (
      <div className="after-display">
        <h2>{name}</h2>
        <h3>{price} </h3>
        <p>{description} </p>
        <button className="buy">Buy Now</button>
        </div>
          )
        
         })
       }   
      </TabPanel>
    </Tabs>
  );
