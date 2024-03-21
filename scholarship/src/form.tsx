import * as React from "react";
// import axios from "axios";
import { useState } from "react";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";

import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import "./App.css";

import { submitForm } from "./actions";


export default function FormDialog() {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  const handleFormSubmit = async (event: any) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());
    console.log("Form submitted:", formJson);
    submitForm(formJson);
  };

  const [board, setboard] = useState("");

  const handleChangeboard = (event: { target: { name: any; value: any } }) => {
    const board = event.target.value;
    setboard(board);
  };

  const [category, setcategory] = useState("");
  const handleChangecategory = (event: {
    target: { name: any; value: any };
  }) => {
    const category = event.target.value;
    setcategory(category);
  };

  return (
    <React.Fragment>
      <Box>
        <Dialog
          open={open}
          onClick={handleClose}
          fullWidth // Make dialog take full width
          maxWidth="md" // Set maximum width of the dialog
          sx={{
            // Customize dialog size
            "& .MuiDialog-paper": {
              width: "100%",
              maxWidth: "750px",
              maxHeight: "auto", // Set custom maximum width
            },
          }}
        >
          <img src="../images/merit.jpg" alt="logo" />
        </Dialog>
      </Box>
      {/* <Button onClick={createPost}>Add Data</Button> */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src="../images/grphead1.png"
          className="responsive-image"
          alt="logo"
        />
      </Box>
      <form onSubmit={handleFormSubmit}>
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
            Merit Scholarship Registration Form
          </Typography>

          <TextField
            autoFocus
            margin="dense"
            id="outlined-basic"
            name="name"
            label="Name"
            fullWidth
            variant="outlined"
            sx={{
              width: {
                xs: "85%",
                sm: "70%",
              },
              paddingBottom: "20px",
            }}
          />

          <TextField
            id="outlined-multiline-flexible"
            label="Address for communication"
            variant="outlined"
            multiline
            name="address"
            sx={{
              width: {
                xs: "85%",
                sm: "70%",
              },
              paddingBottom: "20px",
            }}
          />

          <TextField
            id="outlined-basic"
            label="Parent Mail Id"
            variant="outlined"
            name="parentmailid"
            sx={{
              width: {
                xs: "85%",
                sm: "70%",
              },
              paddingBottom: "20px",
            }}
          />

          <TextField
            id="outlined-basic"
            label="Student Mail Id"
            variant="outlined"
            name="studentmailid"
            sx={{
              width: {
                xs: "85%",
                sm: "70%",
              },
              paddingBottom: "20px",
            }}
          />

          <TextField
            id="outlined-basic"
            label="Parent Phone number"
            variant="outlined"
            name="parentphoneno"
            sx={{
              width: {
                xs: "85%",
                sm: "70%",
              },
              paddingBottom: "20px",
            }}
          />

          <TextField
            id="outlined-basic"
            label="Student Phone number"
            variant="outlined"
            name="studentphoneno"
            sx={{
              width: {
                xs: "85%",
                sm: "70%",
              },
              paddingBottom: "20px",
            }}
          />

          <TextField
            id="outlined-basic"
            label="DOB"
            type="date"
            variant="outlined"
            name="dob"
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              style: { color: "#6B6A6A" },
            }}
            sx={{
              width: {
                xs: "85%",
                sm: "70%",
              },
              paddingBottom: "20px",
            }}
          />

          <TextField
            id="outlined-basic"
            label="Name of school studied"
            variant="outlined"
            name="schoolname"
            sx={{
              width: {
                xs: "85%",
                sm: "70%",
              },
              paddingBottom: "20px",
            }}
          />

          <TextField
            id="outlined-basic"
            label="School code No."
            variant="outlined"
            name="schoolcode"
            sx={{
              width: {
                xs: "85%",
                sm: "70%",
              },
              paddingBottom: "20px",
            }}
          />

          <FormControl
            sx={{
              width: "70%",
              marginBottom: "20px",
            }}
          >
            <InputLabel>Board of Study</InputLabel>
            <Select
              labelId="demo-simple-select-label1"
              id="demo-simple-select"
              label="Board of Study"
              name="boardofstudy"
              onChange={handleChangeboard}
              sx={{
                width: "100%",
                marginBottom: "10px",
              }}
            >
              <MenuItem value="cbse">CBSE</MenuItem>
              <MenuItem value="stateboard">Stateboard</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </Select>
            {board === "other" && (
              <TextField
                sx={{
                  width: "100%",
                  paddingBottom: "10px",
                }}
                label="Enter Other Value"
                name="boardofstudy"
              />
            )}
          </FormControl>

          <TextField
            id="outlined-basic"
            label="Place Of Study"
            variant="outlined"
            name="placeofstudy"
            sx={{
              width: {
                xs: "85%",
                sm: "70%",
              },
              paddingBottom: "20px",
            }}
          />
          <TextField
            id="outlined-basic"
            label="12th Exam registration No."
            variant="outlined"
            name="regno"
            sx={{
              width: {
                xs: "85%",
                sm: "70%",
              },
              paddingBottom: "20px",
            }}
          />

          <FormControl
            sx={{
              width: "70%",
              marginBottom: "20px",
            }}
          >
            <InputLabel id="outlined-basic">Tentative Cut-off</InputLabel>
            <Select
              labelId="demo-simple-select-label1"
              id="demo-simple-select"
              name="tentativecutoff"
              label="Tentative Cut-off"
              variant="outlined"
              sx={{
                width: "100%",
                marginBottom: "10px",
              }}
            >
              <MenuItem value="<150">&lt;150</MenuItem>
              <MenuItem value="150-160">150-160</MenuItem>
              <MenuItem value="160-170">160-170</MenuItem>
              <MenuItem value="170-180">170-180</MenuItem>
              <MenuItem value="180-190">180-190</MenuItem>
              <MenuItem value="190-195">190-195</MenuItem>
              <MenuItem value=">195">{">"}195</MenuItem>
              {/* Add more options as needed */}
            </Select>
          </FormControl>

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
              name="category"
              onChange={handleChangecategory}
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
              <MenuItem value="general">General</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </Select>
            {category === "other" && (
              <TextField
                sx={{
                  width: "100%",
                  paddingBottom: "20px",
                }}
                label="Enter Other Value"
                name="category"
              />
            )}
          </FormControl>

          <FormControl
            sx={{
              width: {
                xs: "85%",
                sm: "70%",
              },
              marginBottom: "20px",
            }}
          >
            <InputLabel>Willing to avail merit scholarship?</InputLabel>
            <Select
              labelId="scholarship"
              id="demo-simple-select"
              label="willing to avail merit scholarship?"
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

          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Box>
      </form>
    </React.Fragment>
  );
}
