import { useState, useEffect, useRef } from "react";
import useVisualMode from "../hooks/useVisualMode";

import Home from "./home";

export default function Index() {
  const HOME = "HOME";

  const { mode, transition } = useVisualMode(HOME);

  return (
    <div>
      {mode === HOME && <Home transition={transition} />}
    </div>
  );
}
