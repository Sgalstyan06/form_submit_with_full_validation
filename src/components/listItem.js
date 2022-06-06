import React, { useEffect, useState } from "react";
import Item from "./item";
import Form from "./form";
import { getStore } from "../store/store";
import image from "../img/image.jpg";

export default function ListItem() {
  const [renderItem, setRenderItem] = useState([]);

  useEffect(() => {
    if (getStore() && getStore().length > 0) {
      setRenderItem(getStore());
    }
  }, []);

  
  return (
    <div className="Listitem">
      <span className="contact">CONTACT US</span>
      <h1>Get In Touch</h1>
      <div className="form-with-iamge-block">
      <Form onAdd={(list) =>{
        
        setRenderItem([...list])
      }} />
      <div className="image"><img src= {image}/></div>
      </div>
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
