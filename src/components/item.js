import React from "react";

export default function Item({ name, email, url }) {
  return (
    <>
      <div>name: {name}</div>
      <div>email: {email}</div>
      <div>url: {url}</div>
    </>
  );
}
