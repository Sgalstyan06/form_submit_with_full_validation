import React, { useEffect, useState } from "react";
import { setStore, getStore, removeClearStore } from "../store/store";
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
    console.log("listItem", listItem);
  }, [listItem]);

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setListItem([...listItem, { name, email, url }]);
          setName("");
          setEmail("");
          setUrl("");

          console.log("listItem", listItem);
        }}
      >
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <div>
          <button>Submit</button>
          <input
            type="reset"
            onClick={() => {
              removeClearStore();
              setListItem([]);
              setName("");
              setEmail("");
              setUrl("");
            }}
          />
        </div>
      </form>
    </div>
  );
}
