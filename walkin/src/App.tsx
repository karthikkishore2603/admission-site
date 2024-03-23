import * as React from "react";
// import axios from "axios";
import { useState } from "react";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";

import OutlinedInput from "@mui/material/OutlinedInput";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";

import "./App.css";

// import { submitForm } from "./actions";

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
    // submitForm(formJson);
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

  // Enquiry Through

  const [enquiry, setenquiry] = useState("");

  const handleChangeenquiry = (event: {
    target: { name: any; value: any };
  }) => {
    const enquiry = event.target.value;
    setenquiry(enquiry);
    // If "Other" is selected, clear the other value
    if (enquiry !== "other") {
      setenquiry("");
    }
  };

  // Courses

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

  return (
    <React.Fragment>
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
            Admission Form
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
            label="Name of School Studied"
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
            label="12th Registration Number"
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
              width: "70%",
              marginBottom: "10px",
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
              <MenuItem value="stateboard">TN State Board</MenuItem>
              <MenuItem value="cisce">CISCE</MenuItem>
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

          <FormControl
            sx={{
              width: "70%",
              marginBottom: "10px",
            }}
          >
            <InputLabel id="outlined-basic">Expected Cut-off</InputLabel>
            <Select
              labelId="demo-simple-select-label1"
              id="demo-simple-select"
              name="tentativecutoff"
              label="Expected Cut-off"
              variant="outlined"
              sx={{
                width: "100%",
                marginBottom: "10px",
              }}
            >
              <MenuItem value="<150">&lt;150</MenuItem>
              <MenuItem value="150-160">150-160</MenuItem>
              <MenuItem value="161-170">160-170</MenuItem>
              <MenuItem value="171-180">170-180</MenuItem>
              <MenuItem value="181-185">180-185</MenuItem>
              <MenuItem value="186-190">186-190</MenuItem>
              <MenuItem value="190-195">190-195</MenuItem>
              <MenuItem value=">195">{">"}195</MenuItem>
              {/* Add more options as needed */}
            </Select>
          </FormControl>

          <TextField
            id="outlined-multiline-flexible"
            label="10th Mark Total"
            variant="outlined"
            name="tenthmarktotal"
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
            label="10th Mark Scored"
            variant="outlined"
            name="tenthmarkscored"
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
            label="10th Percentage"
            variant="outlined"
            name="tenthpercentage"
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
            label="Father Name"
            variant="outlined"
            name="fathername"
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
            label="Father Occupation"
            variant="outlined"
            name="fatheroccupation"
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
            label="Father Work Place"
            variant="outlined"
            name="fatherworkplace"
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
            label="Father Phone No"
            variant="outlined"
            name="fatherphoneno"
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
            label="Mother Name"
            variant="outlined"
            name="mothername"
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
            label="Mother Occupation"
            variant="outlined"
            name="motheroccupation"
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
            label="Mother Work Place"
            variant="outlined"
            name="motherworkplace"
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
            label="Mother Phone No"
            variant="outlined"
            name="motherphoneno"
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
            label="Student Mail Id"
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

          <Stack
            spacing={2}
            sx={{
              width: "70%",
              marginBottom: "20px",
            }}
          >
            <Autocomplete
              id="free-solo-demo"
              options={district.map((option) => option.title)}
              renderInput={(params) => (
                <TextField {...params} label="District" />
              )}
            />
          </Stack>

          <FormControl
            sx={{
              width: "70%",
              marginBottom: "5px",
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
                  paddingBottom: "10px",
                }}
                label="Enter Other Value"
                name="category"
              />
            )}
          </FormControl>

          <FormControl
            sx={{
              width: "70%",
              marginBottom: "10px",
            }}
          >
            <InputLabel>Enquiry Through</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Enquiry Through"
              name="enquirythrough"
              onChange={handleChangeenquiry}
              sx={{
                width: "100%",
                marginBottom: "10px",
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
            {enquiry === "other" && (
              <TextField
                sx={{
                  width: "70%",
                  paddingBottom: "10px",
                }}
                label="Enter Other Value"
                name="enquirythrough"
              />
            )}
          </FormControl>

          <FormControl
            sx={{
              width: "70%",
              marginBottom: "10px",
            }}
          >
            <InputLabel>Select College</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Select College"
              name="college"
              sx={{
                width: "100%",
                marginBottom: "10px",
              }}
            >
              <MenuItem value="sjce">SJCE</MenuItem>
              <MenuItem value="sjit">SJIT</MenuItem>
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
              name="courses"
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

          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Box>
      </form>
    </React.Fragment>
  );
}

const district = [
  { title: "Ariyalur" },
  { title: "Chengalpattu" },
  { title: "Chennai" },
  { title: "Coimbatore" },
  { title: "Cuddalore" },
  { title: "Dharmapuri" },
  { title: "Dindigul" },
  { title: "Erode" },
  { title: "Kallakurichi" },
  { title: "Kancheepuram" },
  { title: "Kanniyakumari" },
  { title: "Karur" },
  { title: "Krishnagiri" },
  { title: "Madurai" },
  { title: "Mayiladuthurai" },
  { title: "Nagapattinam" },
  { title: "Namakkal" },
  { title: "Nilgiris" },
  { title: "Perambalur" },
  { title: "Pudukkottai" },
  { title: "Ramanathapuram" },
  { title: "Ranipet" },
  { title: "Salem" },
  { title: "Sivagangai" },
  { title: "Tenkasi" },
  { title: "Thanjavur" },
  { title: "Theni" },
  { title: "Thiruvallur" },
  { title: "Thiruvarur" },
  { title: "Thoothukudi" },
  { title: "Tiruchirappalli" },
  { title: "Tirunelveli" },
  { title: "Tirupathur" },
  { title: "Tiruppur" },
  { title: "Tiruvannamalai" },
  { title: "Vellore" },
  { title: "Viluppuram" },
  { title: "Virudhunagar" },
];
