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
        <TextField
          id="outlined-basic"
          label="Address for communication"
          variant="outlined"
          name="address for communication"
          sx={{
            width: "70%",
            paddingBottom: "20px",
          }}
        />

        <TextField
          id="outlined-basic"
          label="Mail-id"
          variant="outlined"
          name="mail-id"
          sx={{
            width: "70%",
            paddingBottom: "20px",
          }}
        />

        <TextField
          id="outlined-basic"
          label="Phone number"
          variant="outlined"
          name="phone number"
          sx={{
            width: "70%",
            paddingBottom: "20px",
          }}
        />

        <TextField
          id="outlined-basic"
          label="Date of birth"
          variant="outlined"
          name="dob"
          sx={{
            width: "70%",
            paddingBottom: "20px",
          }}
        />

        <TextField
          id="outlined-basic"
          label="Name of school studied"
          variant="outlined"
          name="school name"
          sx={{
            width: "70%",
            paddingBottom: "20px",
          }}
        />

        <TextField
          id="outlined-basic"
          label="School code No."
          variant="outlined"
          name="school code"
          sx={{
            width: "70%",
            paddingBottom: "20px",
          }}
        />

        <TextField
          id="outlined-basic"
          label="12th Exam registration No."
          variant="outlined"
          name="12th reg no."
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
            <InputLabel>Category</InputLabel>
            <Select
              labelId="demo-simple-select-label1"
              id="demo-simple-select"
              label="category"
              value={formData.category}
              onChange={handleChange}
              name="category"
              sx={{
                width: "100%",
                marginBottom: "20px",
              }}
            >
              <MenuItem value="bc">BC</MenuItem>
              <MenuItem value="bcm">BCM</MenuItem>
              <MenuItem value="mbc">MBC</MenuItem>
              <MenuItem value="bcm">BCM</MenuItem>
              <MenuItem value="sca">SCA</MenuItem>
              <MenuItem value="sc">SC</MenuItem>
              <MenuItem value="st">ST</MenuItem>
              <MenuItem value="oc">OC</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </Select>
            {category === "other" && (
              <TextField
                sx={{
                  width: "100%",
                  paddingBottom: "20px",
                }}
                label="Enter Other Value"
                value={formData.category}
                onChange={handleChange}
                name="category"
              />
            )}
        </FormControl>

        <FormControl
            sx={{
              width: "70%",
              marginBottom: "20px",
            }}
          >
            <InputLabel>Willing to avail merit scholarship?</InputLabel>
            <Select
              labelId="scholarship"
              id="scholarship"
              label="scholarship"
              value={formData.category}
              onChange={handleChange}
              name="scholarship"
              sx={{
                width: "100%",
                marginBottom: "20px",
              }}
            >
              <MenuItem value="yes">Yes</MenuItem>
              <MenuItem value="no">No</MenuItem>
            </Select>
        </FormControl>  

        <Button variant="contained" onClick={handleFormSubmit}>
            Submit
        </Button>


      </Box>
    </>
  );
}
