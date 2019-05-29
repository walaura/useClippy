import React, { useCallback, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import useClippy from "./useClippy";
function App() {
  const withClippy = useClippy("Clippy");
  const [text, setText] = useState("im not cybernetically enahcne");
  return (
    <>
      <input
        type="text"
        onChange={ev => {
          setText(ev.target.value);
        }}
        value={text}
      />
      <button onClick={() => withClippy(clippy => clippy.speak(text))}>
        aaa
      </button>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
