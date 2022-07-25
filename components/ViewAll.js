import React from "react";
import { FiChevronDown } from "react-icons/fi";

export default function ViewAll(props) {
  return (
    <div className="viewAll-catalog" onClick={props.onClick}>
      VIEWALL
      <FiChevronDown size={20} />
    </div>
  );
}
