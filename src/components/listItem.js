import React, { useEffect, useState } from "react";
import Item from "./item";
import Form from "./form";
import { getStore } from "../store/store";

export default function ListItem() {
  const [renderItem, setRenderItem] = useState([]);

  useEffect(() => {
    if (getStore() && getStore().length > 0) {
      setRenderItem(getStore());
    }
  }, []);

  // useEffect(() =>{}, [renderItem])

  // function onAdd(list) {
  //   setRenderItem(list);
  //   console.log("is listItem render");
  // }
  return (
    <div>
      <Form onAdd={(list) =>{
        console.log("list", list);
        setRenderItem([...list])
      }} />
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
