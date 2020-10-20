import React from "react";
import { DataContext } from "./context/DataContext";

const B = (props) => {
  const [value, setValue] = React.useContext(DataContext);
  return (
    <div className="theme2">
      <label>B Component</label>
      <br />
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};
export default B;
