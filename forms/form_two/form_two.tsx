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
import DatePicker from "@mui/lab/DatePicker";
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

  const [formData, setFormData] = useState({
    name: "",
    schoolname: "",
    district: "",
    enquirythrough: "",
    regno: "",
    dob: "",
    tentativecutoff: "",
    boardofstudy: "",
    college: "",
    course: "",
    category: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFormSubmit = () => {
    console.log(formData);
    // You can perform additional actions here, such as sending the data to a backend server
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
            Admission Enquiry
          </Typography>

          <TextField
            id="outlined-basic"
            label="Name"
            value={formData.name}
            variant="outlined"
            name="name"
            onChange={handleChange}
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
            value={formData.dob}
            name="dob"
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              style: { color: "#6B6A6A" },
            }}
            onChange={handleChange}
            sx={{
              width: "70%",
              paddingBottom: "20px",
            }}
          />

          <TextField
            id="outlined-basic"
            label="School Name"
            variant="outlined"
            value={formData.schoolname}
            name="schoolname"
            onChange={handleChange}
            sx={{
              width: "70%",
              paddingBottom: "20px",
            }}
          />

          <TextField
            id="outlined-basic"
            label="School Reg No"
            variant="outlined"
            value={formData.regno}
            name="regno"
            onChange={handleChange}
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
              value={formData.boardofstudy}
              onChange={handleChangeboard}
              name="boardofstudy"
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
                  width: "100%",
                  paddingBottom: "20px",
                }}
                label="Enter Other Value"
                value={formData.boardofstudy}
                onChange={handleChange}
                name="boardofstudy"
              />
            )}
          </FormControl>

          <TextField
            id="outlined-basic"
            label="Tentative Cut Off"
            variant="outlined"
            value={formData.tentativecutoff}
            onChange={handleChange}
            name="tentativecutoff"
            sx={{
              width: "70%",
              paddingBottom: "20px",
            }}
          />

          <TextField
            id="outlined-basic"
            label="Father Name"
            variant="outlined"
            onChange={handleChange}
            name="fathername"
            sx={{
              width: "70%",
              paddingBottom: "20px",
            }}
          />
          <TextField
            id="outlined-basic"
            label="Father Occupation"
            variant="outlined"
            onChange={handleChange}
            name="fatheroccupation"
            sx={{
              width: "70%",
              paddingBottom: "20px",
            }}
          />

          <TextField
            id="outlined-basic"
            label="Father Work Place"
            variant="outlined"
            onChange={handleChange}
            name="fatherworkplace"
            sx={{
              width: "70%",
              paddingBottom: "20px",
            }}
          />

          <TextField
            id="outlined-basic"
            label="Father Phone No"
            variant="outlined"
            onChange={handleChange}
            name="fatherphoneno"
            sx={{
              width: "70%",
              paddingBottom: "20px",
            }}
          />

          <TextField
            id="outlined-basic"
            label="Mother Name"
            variant="outlined"
            onChange={handleChange}
            name="mothername"
            sx={{
              width: "70%",
              paddingBottom: "20px",
            }}
          />
          <TextField
            id="outlined-basic"
            label="Mother Occupation"
            variant="outlined"
            onChange={handleChange}
            name="motheroccupation"
            sx={{
              width: "70%",
              paddingBottom: "20px",
            }}
          />

          <TextField
            id="outlined-basic"
            label="Mother Work Place"
            variant="outlined"
            onChange={handleChange}
            name="motherworkplace"
            sx={{
              width: "70%",
              paddingBottom: "20px",
            }}
          />

          <TextField
            id="outlined-basic"
            label="Mother Phone No"
            variant="outlined"
            onChange={handleChange}
            name="motherphoneno"
            sx={{
              width: "70%",
              paddingBottom: "20px",
            }}
          />

          <TextField
            id="outlined-multiline-flexible"
            label="Address for Communication"
            name="address"
            multiline
            maxRows={4}
            sx={{
              width: "70%",
              paddingBottom: "20px",
            }}
          />

          <TextField
            id="outlined-basic"
            label="District"
            variant="outlined"
            value={formData.district}
            onChange={handleChange}
            name="district"
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
              value={formData.enquirythrough}
              onChange={handleChangeenquiry}
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
            {enquiry === "other" && (
              <TextField
                sx={{
                  width: "70%",
                  paddingBottom: "20px",
                }}
                label="Enter Other Value"
                name="enquirythrough"
                value={formData.enquirythrough}
                onChange={handleChange}
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
              label="Select College"
              value={formData.college}
              onChange={handleChange}
              name="college"
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
              value={formData.course}
              onChange={handleChange}
              name="course"
              sx={{
                width: "100%",
                marginBottom: "20px",
              }}
            >
              <MenuItem value="CSE">
                Computer Science Engineering (CSE)
              </MenuItem>
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
            }}
          >
            <InputLabel>Category</InputLabel>
            <Select
              labelId="demo-simple-select-label1"
              id="demo-simple-select"
              label="Board of Study"
              value={formData.category}
              onChange={handleChangecategory}
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

          <Button variant="contained" onClick={handleFormSubmit}>
            Submit
          </Button>
        </Box>
      </form>
    </>
  );
}
