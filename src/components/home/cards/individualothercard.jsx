//intro into other cards
//pass in status
//highlight grey if used
//in later rounds turn green if higher and red if lower

import { useState, useEffect } from "react";

import reactLogo from "../../assets/react.svg";

import "./Home.css";

export default function Home(props) {
  const [btnState, setBtnState] = useState("");
  const [hoverImageState, setHoverImageState] = useState("");

  const clicked = () => {
    props.transition(btnState);
  };

  const divStyle = {
    backgroundImage: hoverImageState,
  };

  return (
    <div>
        
    </div>
  );
}
