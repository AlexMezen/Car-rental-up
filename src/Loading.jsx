import React from "react";
import { useState, useEffect } from "react";

export default function Loading() {
  const [loading, setLoading] = useState([]);
  useEffect((props) => {
    setLoading.then(Loading ? "Loading" : "Error");
    return;
  }, []);

  return <div></div>;
}
