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


import OutlinedInput from "@mui/material/OutlinedInput";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";

import "./App.css";

import { submitForm } from "./actions";
import { set } from "zod";


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


export default function FormDialog() {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  const [error, setError] = useState("");
  const handleFormSubmit = async (event: any) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());
    console.log("Form submitted:", formJson);
    if (String(formJson.parentphoneno).length !== 10) { // Fix: Convert the value to a string before checking its length
      setError("Enter a valid parent phone number");
      return;
    }
    submitForm(formJson);1

    event.target.reset();
    setboard("");
    setcategory("");
    settentativecutoff("");
    setcourse([]); // Fix: Pass an empty array instead of an empty string
  };


  const [courselist, setcourse] = React.useState<string[]>([]);

  const handleChange = (event: {
    target: { name: any; value: any };
  }) => {
    const {
      target: { value },
    } = event;
    setcourse(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const [board, setboard] = useState("");

  const handleChangeboard = (event: { target: { name: any; value: any } }) => {
    const board = event.target.value;
    setboard(board);
  };

  const [tentativecutoff, settentativecutoff] = useState("");

  const handleChangetentativecutoff = (event: { target: { name: any; value: any } }) => {
    const tentativecutoff = event.target.value;
    settentativecutoff(tentativecutoff);
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
              maxWidth: "700px",
              maxHeight: "auto", // Set custom maximum width
            },
          }}
        >
          <img src="../images/grphead2.jpg" alt="logo" />
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
            required
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
            label="Address for Communication"
            required
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

            <h1>{error}</h1>
          <TextField
            id="outlined-basic"
            label="Parent Name"
            required
            variant="outlined"
            name="parentname"
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
            label="Parent E-Mail Id"
            variant="outlined"
            name="parentmailid"
            type="email"
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
            label="Parent Phone Number"
            required
            variant="outlined"
            name="parentphoneno"
            type="number"
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
            label="Student E-Mail Id"
            required
            variant="outlined"
            name="studentmailid"
            type="email"
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
            label="Student Phone Number"
            required
            variant="outlined"
            name="studentphoneno"
            type="number"
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
            required
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
            label="Name of School Studied"
            required
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
            label="School Code No."
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

          <TextField
            id="outlined-basic"
            required
            label="Place of Study"
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
          <FormControl
            sx={{
              width: {
                xs: "85%",
                sm: "70%",
              },
            }}
          >
            <InputLabel>Board of Study</InputLabel>
            <Select
              labelId="demo-simple-select-label1"
              required
              id="demo-simple-select"
              label="Board of Study"
              name="boardofstudy"
              value={board}
              onChange={handleChangeboard}
              sx={{
                width: "100%",
                marginBottom: "10px",
              }}
            >
              <MenuItem value="cbse">CBSE</MenuItem>
              <MenuItem value="stateboard">TN State Board</MenuItem>
              <MenuItem value="cisce">CISCE</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </Select>
            {board === "other" && (
              <TextField
              required
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
            label="12th Exam Registration No."
            required
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
              width: {
                xs: "85%",
                sm: "70%",
              },
              marginBottom: "20px",
            }}
          >
            <InputLabel id="outlined-basic">Expected Cut-off</InputLabel>
            <Select
              labelId="demo-simple-select-label1"
              required
              id="demo-simple-select"
              name="tentativecutoff"
              label="Expected Cut-off"
              value={tentativecutoff}
              onChange={handleChangetentativecutoff}
              variant="outlined"
              sx={{
                width: "100%",
                marginBottom: "10px",
              }}
            >
              <MenuItem value="<150">&lt;150</MenuItem>
              <MenuItem value="151-160">151-160</MenuItem>
              <MenuItem value="161-170">161-170</MenuItem>
              <MenuItem value="171-180">171-180</MenuItem>
              <MenuItem value="181-185">181-185</MenuItem>
              <MenuItem value="186-190">186-190</MenuItem>
              <MenuItem value="191-195">191-195</MenuItem>
              <MenuItem value=">195">{">"}195</MenuItem>
              {/* Add more options as needed */}
            </Select>
          </FormControl>


          <FormControl sx={{
              width: "70%",
              marginBottom: "10px",
            }}>
            <InputLabel id="demo-multiple-checkbox-label">Select Courses</InputLabel>
            <Select
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              multiple
              value={courselist}
              name="course"
              onChange={handleChange}
              input={<OutlinedInput label="Select Courses" />}
              renderValue={(selected) => selected.join(", ")}
              MenuProps={MenuProps}
            >
              {courses.map((course) => (
                <MenuItem key={course} value={course}>
                  <Checkbox checked={courselist.indexOf(course) > -1} />
                  <ListItemText primary={course} />
                </MenuItem>
              ))}
            </Select>
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
            <InputLabel>Category</InputLabel>
            <Select
              labelId="demo-simple-select-label1"
              required
              id="demo-simple-select"
              label="category"
              name="category"
              value={category}
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
              required
                sx={{
                  width: "100%",
                  paddingBottom: "20px",
                }}
                label="Enter Other Value"
                name="category"
              />
            )}
          </FormControl>

          

          <Button type="submit" variant="contained" sx={{
            width: {
              xs: "85%",
              sm: "70%",
            },
          }}>
            Submit
          </Button>
        </Box>
      </form>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",

        }}
      >
        <br></br>
        <img
          src="../images/grphead2.jpg"
          className="responsive-image"
          alt="logo"
        />
      </Box>
    </React.Fragment>
  );
}


const courses = [
  "Computer Science Engineering",
  "Information Technology",
  "Artificial Intelligence and Data Science",
  "Artificial Intelligence and Machine Learning",
  "Electronics and Communications Engineering",
  "Electrical and Electronics Engineering",
  "Computer Science Engineering (Cybersecurity)",
  "Mechatronics Engineering",
  "Mechanical Engineering",
  "Chemical Engineering",
  "BioTechnology",
  "Master of Business Administration(MBA)",
];