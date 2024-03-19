import React from "react";
import { useState } from "react";

import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import { Theme, useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Button from "@mui/material/Button";

export default function Form1() {
  const [enquiry, setenquiry] = useState("");
  const [otherenquiry, setOtherenquiry] = useState("");

  const handleChangeenquiry = (event) => {
    const enquiry = event.target.value;
    setenquiry(enquiry);
    // If "Other" is selected, clear the other value
    if (enquiry !== "other") {
      setOtherenquiry("");
    }
  };

  const handleOtherenquiryChange = (event) => {
    setOtherenquiry(event.target.value);
  };

  const [board, setboard] = useState("");
  const [otherboard, setOtherboard] = useState("");

  const handleChangeboard = (event) => {
    const board = event.target.value;
    setboard(board);
    // If "Other" is selected, clear the other value
    if (board !== "other") {
      setOtherboard("");
    }
  };

  const handleOtherboardChange = (event) => {
    setOtherenquiry(event.target.value);
  };

  const [college, setcollege] = useState("");

  const handleChangecollege = (event) => {
    const college = event.target.value;
    setcollege(college);
  };

  const [course, setcourse] = useState("");
  const handleChangecourse = (event) => {
    const course = event.target.value;
    setcourse(course);
  };

  const [category, setcategory] = useState("");
  const [othercategory, setOthercategory] = useState("");

  const handleChangecategory = (event) => {
    const category = event.target.value;
    setcategory(category);
    // If "Other" is selected, clear the other value
    if (category !== "other") {
      setOthercategory("");
    }
  };

  const handleOthercategoryChange = (event) => {
    setOtherenquiry(event.target.value);
  };
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
          Admission Enquiry
        </Typography>

        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          sx={{
            width: "70%",
            paddingBottom: "20px",
          }}
        />

        <TextField
          id="outlined-basic"
          label="School Name"
          variant="outlined"
          sx={{
            width: "70%",
            paddingBottom: "20px",
          }}
        />

        <TextField
          id="outlined-basic"
          label="District"
          variant="outlined"
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
            value={enquiry}
            onChange={handleChangeenquiry}
            sx={{
              width: "100%",
              marginBottom: "20px",
            }}
          >
            <MenuItem value="parents">Parents</MenuItem>
            <MenuItem value="sibilings">Sibilings</MenuItem>
            <MenuItem value="relativeandfriends">Relative And Friends</MenuItem>
            <MenuItem value="alumini">Alumini</MenuItem>
            <MenuItem value="collegewebsite">College Website</MenuItem>
            <MenuItem value="socialmedia">Social Media</MenuItem>
            <MenuItem value="other">Other</MenuItem>
          </Select>
          {enquiry === "other" && (
            <TextField
              sx={{
                width: "70%",
                paddingBottom: "20px",
              }}
              label="Enter Other Value"
              value={otherenquiry}
              onChange={handleOtherenquiryChange}
            />
          )}
        </FormControl>

        <TextField
          id="outlined-basic"
          label="Reg No"
          variant="outlined"
          sx={{
            width: "70%",
            paddingBottom: "20px",
          }}
        />

        <TextField
          id="outlined-basic"
          label="DOB"
          type="date"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{
            style: { color: '#a6a6a6' }, // Light color for placeholder text
          }}
          sx={{
            width: "70%",
            paddingBottom: "20px",
          }}
        />

        <TextField
          id="outlined-basic"
          label="Tentative Cut Off"
          variant="outlined"
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
          <InputLabel>Board of Study</InputLabel>
          <Select
            labelId="demo-simple-select-label1"
            id="demo-simple-select"
            label="Board of Study"
            value={board}
            onChange={handleChangeboard}
            sx={{
              width: "100%",
              marginBottom: "20px",
            }}
          >
            <MenuItem value="cbse">CBSE</MenuItem>
            <MenuItem value="stateboard">Stateboard</MenuItem>
            <MenuItem value="other">Other</MenuItem>
          </Select>
          {board === "other" && (
            <TextField
              sx={{
                width: "70%",
                paddingBottom: "20px",
              }}
              label="Enter Other Value"
              value={otherboard}
              onChange={handleOtherboardChange}
            />
          )}
        </FormControl>

        <FormControl
          sx={{
            width: "70%",
            marginBottom: "20px",
          }}
        >
          <InputLabel>Select College</InputLabel>
          <Select
            labelId="demo-simple-select-label1"
            id="demo-simple-select"
            label="Board of Study"
            value={college}
            onChange={handleChangecollege}
            sx={{
              width: "100%",
              marginBottom: "20px",
            }}
          >
            <MenuItem value="sjce">SJCE</MenuItem>
            <MenuItem value="sjit">SJIT</MenuItem>
          </Select>
        </FormControl>

        <FormControl
          sx={{
            width: "70%",
            marginBottom: "20px",
          }}
        >
          <InputLabel>Select Course</InputLabel>
          <Select
            labelId="demo-simple-select-label1"
            id="demo-simple-select"
            label="Board of Study"
            value={course}
            onChange={handleChangecourse}
            sx={{
              width: "100%",
              marginBottom: "20px",
            }}
          >
            <MenuItem value="CSE">Computer Science Engineering (CSE)</MenuItem>
            <MenuItem value="IT">Information Technology (IT)</MenuItem>
            <MenuItem value="ADS">Advanced Data Science (ADS)</MenuItem>
            <MenuItem value="AML">
              Artificial Intelligence and Machine Learning(AML)
            </MenuItem>
            <MenuItem value="ECE">
              Electronics and Communications Engineering(ECE)
            </MenuItem>
            <MenuItem value="EEE">
              Electrical and Electronics Engineering(EEE)
            </MenuItem>
            <MenuItem value="Mech">Mechanical Engineering(Mech)</MenuItem>
            <MenuItem value="Chem">Chemical Engineering(Chem)</MenuItem>
            <MenuItem value="BioTech">
              BioTechnology Engineering(BioTech)
            </MenuItem>
            <MenuItem value="MBA">
              Master of Business Administration(MBA)
            </MenuItem>
          </Select>
        </FormControl>

        <FormControl 
        sx={{
          width: "70%",
          marginBottom: "20px",
        }}>
          <InputLabel>Category</InputLabel>
          <Select
            labelId="demo-simple-select-label1"
            id="demo-simple-select"
            label="Board of Study"
            value={category}
            onChange={handleChangecategory}
            sx={{
              width: "100%",
              marginBottom: "20px",
            }}
          >
            <MenuItem value="bc">BC</MenuItem>
            <MenuItem value="stateboard">BCM</MenuItem>
            <MenuItem value="stateboard">MBC</MenuItem>
            <MenuItem value="stateboard">BCM</MenuItem>
            <MenuItem value="stateboard">SCA</MenuItem>
            <MenuItem value="stateboard">SC</MenuItem>
            <MenuItem value="stateboard">ST</MenuItem>
            <MenuItem value="stateboard">OC</MenuItem>
            <MenuItem value="other">Other</MenuItem>
          </Select>
          {category === "other" && (
            <TextField
              sx={{
                width: "100%",
                paddingBottom: "20px",
              }}
              label="Enter Other Value"
              value={othercategory}
              onChange={handleOthercategoryChange}
            />
          )}
        </FormControl>

        <Button variant="contained">Submit</Button>
      </Box>
    </>
  );
}
