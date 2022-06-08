import React, { useEffect, useState } from "react";
import { setStore, getStore, removeClearStore } from "../store/store";
import "../App.css";
import {
  isValidName,
  isValidEmail,
  isValidURL,
} from "../validation/validation";
import { useForm } from "react-hook-form";

export default function Form({ onAdd }) {  
  const [listItem, setListItem] = useState(
    getStore() && getStore().length > 0 ? getStore() : []
  );

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  useEffect(() => {
    if (listItem && listItem.length > 0) {
      console.log("test onAdd");
      setStore(listItem);
    }
    onAdd(listItem);
    // console.log("listItem", listItem);
  }, [listItem]);

  const onSubmit = (data) => {
    console.log(data);
    setListItem([...listItem, data]);

    reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            type="text"
            {...register("name", {
              required: "this field is required",
              pattern: {
                value: /^[a-zA-Z ]{2,30}$/,
                message: "Please write letters ",
              },
            })}
          />
        </div>
        <div style={{ height: 28 }}>
          {errors?.name && <p>{errors?.name?.message}</p>}
        </div>
        <input
          type="email"
          {...register("email", {
            required: "this field is required",
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "Please write correct email",
            },
          })}
        />
        <div style={{ height: 28 }}>{errors?.email?.message}</div>
        <div>
          <input
            type="url"
            {...register("url", {
              pattern: {
                value:
                  /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%.\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%\+.~#?&//=]*)/g,
                message: "Please write correct url",
              },
            })}
          />
        </div>
        <div style={{ height: 28 }}>{errors?.url?.message}</div>
        <input type="submit" />
        <input
          type="reset"
          // className="reset button"
          onClick={() => {
            removeClearStore();
            setListItem([]);
          }}
        />
      </form>
    </div>
  );
}
