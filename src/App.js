import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function App() {
  const [text, setText] = useState("");

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        label=""
        variant="outlined"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <Button
        variant="outlined"
        onClick={() => {
          setText(text);
          console.log(text);
        }}
      >
        Submit
      </Button>
    </Box>
  );
}

export default App;
