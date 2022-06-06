import React, { useEffect, useState } from "react";
import { setStore, getStore, removeClearStore } from "../store/store";
import "../App.css";
import {
  isValidName,
  isValidEmail,
  isValidURL,
} from "../validation/validation";

export default function Form({ onAdd }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [url, setUrl] = useState("");
  const [listItem, setListItem] = useState(
    getStore() && getStore().length > 0 ? getStore() : []
  );

  useEffect(() => {
    if (listItem && listItem.length > 0) {
      setStore(listItem);
    }
    onAdd(listItem);
    // console.log("listItem", listItem);
  }, [listItem]);

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("name", isValidName(name));
          console.log("email", isValidEmail(email));
          console.log("url", isValidURL(url));
          if (isValidName(name) !== false && isValidEmail(email) !== null) {
            if (url === "") {
              setListItem([
                ...listItem,
                { name, email, url: url ? url : "no url" },
              ]);
              setName("");
              setEmail("");
              setUrl("");
            } else if (isValidURL(url) !== false) {
              setListItem([
                ...listItem,
                { name, email, url: url ? url : "no url" },
              ]);
              setName("");
              setEmail("");
              setUrl("");
            }
          }
          console.log("listItem", listItem);
        }}
      >
        <input
          className="form-input"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <div>
          <input
            className="form-input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <input
          className="Your-Company-input"
          type="url"
          placeholder="Yout Company Name"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <div className="deferrence">
          <div className="lets-talk">Let's talk about your idea</div>
          <div className="buttons-block">
            
            <button className="submit button">Submit</button>
            <input
              type="reset"
              className="reset button"
              onClick={() => {
                removeClearStore();
                setListItem([]);
                setName("");
                setEmail("");
                setUrl("");
              }}
            />
          </div>
        </div>
      </form>
    </div>
  );
}
