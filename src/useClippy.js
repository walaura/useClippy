import "jquery";
import clippyjs from "clippyjs";
import "./styles.css";
import { useEffect, useState } from "react";

export default (human = "Clippy") => {
  const [clippy, setClippy] = useState(null);
  const [updatedClippy, setUpdatedClippy] = useState([0, () => {}]);

  useEffect(() => {
    clippyjs.load(human, agent => {
      agent.show();
      setClippy(agent);
    });
  }, [human]);

  useEffect(() => {
    updatedClippy[1](clippy);
  }, [updatedClippy[0]]);

  return cb => {
    setUpdatedClippy(([count]) => [count + 1, cb]);
  };
};
