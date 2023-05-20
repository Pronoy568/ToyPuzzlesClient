import { useEffect } from "react";

const UseTitle = (title) => {
  useEffect(() => {
    document.title = `ToyPuzzles  ${title}`;
  }, [title]);
};

export default UseTitle;
