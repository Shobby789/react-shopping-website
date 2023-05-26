import React from "react";

export default function Timer() {
  const date = new Date();
  const hr = date.getHours();
  const mn = date.getMinutes();
  const ss = date.getSeconds();

  return (
    <>
      <p>Your Order Will be Delivered in:</p>
    </>
  );
}
