import React from "react";

export default function Item({ name, email, url }) {
  return (
    <div className="items">
      <div className="item name">name: {name}</div>
      <div className="item email">email: {email}</div>
      <div className="item url">url: {url}</div>
    </div>
  );
}
