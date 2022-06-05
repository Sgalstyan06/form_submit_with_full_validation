import React from "react";
import Item from "./item";
import Form from "./form";
import {isValidName, isValidEmail, isValidURL} from "../validation/validation"

export default function ListItem() {
  return (
    <div>
      <Form/>
      <Item/>
    </div>
  );
}
