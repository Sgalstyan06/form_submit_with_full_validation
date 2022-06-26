import React, { useEffect, useState } from "react";
import { setStore, getStore, removeClearStore } from "../store/store";
import "../App.css";
import { TextField } from "@mui/material";
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
      
      setStore(listItem);
    }
    onAdd(listItem);
  }, [listItem]);

  const onSubmit = (data) => {
    console.log(data);
    setListItem([...listItem, data]);
    reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div id="all-inp">
          <TextField
            className="first text-field"
            id="standard-basic"
            placeholder="name"
            variant="standard"
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
        <div className="error">
          {errors?.name && <p>{errors?.name?.message}</p>}
          {console.log("errors", errors)}
        </div>
        <TextField
          id="standard-basic"
          placeholder="email"
          variant="standard"
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

        <div className="error">{errors?.email?.message}</div>
        <div>
          <TextField
            id="standard-basic"
            placeholder="Your Company Name"
            variant="standard"
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
        <div className="error">{errors?.url?.message}</div>
        <input type="submit" className="submit btn" />
        <input
          className="reset btn"
          type="reset"
          onClick={() => {
            removeClearStore();
            setListItem([]);
          }}
        />
      </form>
    </div>
  );
}
