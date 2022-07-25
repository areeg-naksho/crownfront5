import Image from "next/image";
import React from "react";

export default function MyImage(props) {
  const myLoader = ({ src }) => props.src;

  return (
    <Image alt="" loader={myLoader} src={props.src} width={150} height={150} />
  );
}
