import React, { useEffect, useState } from "react";
import Item from "./item";
import Form from "./form";
import { getStore } from "../store/store";
import image from "../img/form-image.jpg";

export default function ListItem() {
  const [renderItem, setRenderItem] = useState([]);

  // useEffect(() => {
  //   if (getStore() && getStore().length > 0) {
  //     setRenderItem(getStore());
  //   }
  // }, []);

  
 

  return (
    <div className="main">
      <div className="form-with-iamge-block">
        <div className="form">
          <span className="contact">CONTACT US</span>
          <h1>Get In Touch</h1>
          <Form
            onAdd={(list) => {
              
              setRenderItem([...list]);
            }}
            
          />
        </div>
        <div className="image">
          {/* <img src={image} /> */}
        </div>
      </div>
      <div className='blue-fone'></div>
      {renderItem &&
        renderItem.length > 0 &&
        renderItem.map((item, index) => {
          
          return (
            <Item
              key={index}
              name={item.name}
              email={item.email}
              url={item.url}
            />
          );
        })}
    </div>
  );
}
