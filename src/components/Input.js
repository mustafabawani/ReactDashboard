import React from "react";
import { TextField, MenuItem } from '@mui/material';

const Input = ({text, data, setValue}) => {
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ width: "100%" }}>
        <h3 style={{color: "white"}}>{text}</h3>
      </div>
      <div style={{ width: "100%" }}>
        <TextField
          id="standard-select-currency"
          select
          label="Fields"
          InputLabelProps={{
    style: { color: "white" }
  }}
  InputProps={{
    style: { color: "white" }
  }}
          style={{ marginLeft: "3%", width: "93%" }}
          onChange={handleChange}
          required
        >
          {data.map((item, index) => (
            <MenuItem style={{color:"black"}}key={index} value={item}>{item}</MenuItem>
          ))}
        </TextField>
      </div>
    </div>
  );
}

export default Input;
