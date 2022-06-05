import React from "react";

export default function Form() {
  return (
    <div>
      <form>
        <input type="text" required />
        <input type="email" required />
        <input type="url" />
      </form>
    </div>
  );
}
