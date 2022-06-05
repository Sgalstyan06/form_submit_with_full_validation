import React, { useEffect, useState } from "react";
import {setStore} from "../store/store"

export default function Form({}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [url, setUrl] = useState("");
  const [listItem, setListItem] = useState([]);

  useEffect(() =>{
    if(listItem && listItem.length > 0){
        setStore(listItem);
      }
      console.log("listItem", listItem)
  }, [listItem])
  

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setListItem([...listItem, {name, email, url}]);       
          setName("");
          setEmail("");
          setUrl("");
            console.log("listItem", listItem)
        }}
      >
        <input type="text" value={name}  onChange={(e) => setName(e.target.value)} required/>

        <div>
          <input
            type="email"
            value={email}            
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <input type="url" value={url} onChange={(e) => setUrl(e.target.value)} />
        <div>
          <button>Submit</button>
          <input type="reset" />
        </div>
        
      </form>
    </div>
  );
}
