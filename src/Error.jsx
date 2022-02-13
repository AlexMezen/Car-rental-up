import React from "react";

export default function Error(props) {
  return <div>{props.errorMessage.message}</div>;
}
