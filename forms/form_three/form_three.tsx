import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

export default function Formthree() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <img src="../src/assets/img/grphead1.png" alt="logo" />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <Typography
          variant="h4"
          align="center"
          sx={{
            marginTop: "20px",
            paddingBottom: "20px",
          }}
        >
          Merit Scholarship Application Form
        </Typography>

        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          name="name"
          sx={{
            width: "70%",
            paddingBottom: "20px",
          }}
        />

<FormControl
            sx={{
              width: "70%",
              marginBottom: "20px",
            }}
          >
            <InputLabel>Enquiry Through</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Enquiry Through"
              name="enquirythrough"
              sx={{
                width: "100%",
                marginBottom: "20px",
              }}
            >
              <MenuItem value="parents">Parents</MenuItem>
              <MenuItem value="sibilings">Sibilings</MenuItem>
              <MenuItem value="relativeandfriends">
                Relative And Friends
              </MenuItem>
              <MenuItem value="alumini">Alumini</MenuItem>
              <MenuItem value="collegewebsite">College Website</MenuItem>
              <MenuItem value="socialmedia">Social Media</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </Select>
           </FormControl>

      </Box>
    </>
  );
}
