import * as React from "react";
// import axios from "axios";
import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";

import { submitForm } from "./actions";

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const [emailError, setEmailError] = React.useState(false);
  const [phoneError, setPhoneError] = React.useState(false);
  const [registerError, setRegisterError] = React.useState(false);
  const [dobError, setDobError] = React.useState(false);
  const [touchedFields, setTouchedFields] = useState({
    name: false,
    email: false,
    phone: false,
    registerNumber: false,
    dob: false,
  });

  
  const [district, setdistrict] = useState("");
  const handleChangedistrict = (event: { target: { name: any; value: any } }) => {
    const district = event.target.value;
    setdistrict(district);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [course, setCourse] = React.useState("");
  const [tentativeCutoff, setTentativeCutoff] = React.useState("");

  const handleCourseChange = (event) => {
    setCourse(event.target.value);
  };

  const handleTentativeCutoffChange = (event) => {
    setTentativeCutoff(event.target.value);
  };

  const handleFormSubmit =  (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());
    console.log("Form submitted:", formJson);
    submitForm(formJson);
    // try {
    //   console.log("Form submitted:", formJson);
    //   await axios.post("http://localhost:5000/api/formone", formJson, {
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   });
    //   alert("Form submitted successfully!");
    //   handleClose();
    // } catch (error) {
    //   console.error("Error submitting form:", error);
    // }
  };

  const handleFieldFocus = (field) => {
    setTouchedFields((prev) => ({ ...prev, [field]: true }));
  };

  const handleFieldBlur = (field) => {
    setTouchedFields((prev) => ({ ...prev, [field]: false }));
  };

  return (
    <React.Fragment>






<Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          "& .MuiDialog-paper": {
            width: "50%",
            maxWidth: "700px",
            maxHeight: "auto", // Set custom maximum width
          },
        }}
        
      ><br></br>
        <img
          src="../images/banner.jpg"
          className="responsive-image"
          alt="logo" width={900} 
        />
      

      <Button variant="outlined" onClick={handleClickOpen} >
        Enquire Now!
      </Button>
      </Box>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: handleFormSubmit,
        }}
      >
        <DialogTitle>Application Enquiry Form</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter the details to move further with the application
            process
          </DialogContentText>

          <TextField
            autoFocus
            required
            margin="dense"
            id="outlined-basic"
            name="name"
            label="Name"
            fullWidth
            variant="outlined"
            placeholder={!touchedFields.name ? "Enter your name" : ""}
            onFocus={() => handleFieldFocus("name")}
            onBlur={() => handleFieldBlur("name")}
          />
          <FormControl fullWidth>
            <InputLabel htmlFor="dob"></InputLabel>
            <TextField
              required
              margin="dense"
              id="outlined-basic"
              label="Date Of Birth"
              type="date"
              variant="outlined"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                style: { color: "#6B6A6A" },
              }}
              name="dob"
              error={dobError}
              helperText={dobError ? "Please enter a valid date" : ""}
              onFocus={() => handleFieldFocus("dob")}
              onBlur={() => handleFieldBlur("dob")}
              sx={{
                marginTop: "20px", // Adjust the top margin as needed
              }}
            />
          </FormControl>

          <TextField
            required
            margin="dense"
            id="outlined-basic"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="outlined"
            error={emailError}
            helperText={emailError ? "Please enter a valid email address" : ""}
            placeholder={!touchedFields.email ? "Enter your email address" : ""}
            onFocus={() => handleFieldFocus("email")}
            onBlur={() => handleFieldBlur("email")}
          />
          <TextField
            required
            margin="dense"
            id="outlined-basic"
            name="phone"
            label="Phone Number"
            type="tel"
            fullWidth
            variant="outlined"
            error={phoneError}
            helperText={phoneError ? "Please enter a valid phone number" : ""}
            placeholder={!touchedFields.phone ? "Enter your phone number" : ""}
            onFocus={() => handleFieldFocus("phone")}
            onBlur={() => handleFieldBlur("phone")}
          />
          <TextField
            required
            margin="dense"
            id="outlined-basic"
            name="registerNumber"
            label="Register Number"
            type="number"
            fullWidth
            variant="outlined"
            error={registerError}
            helperText={
              registerError ? "Please enter a valid register number" : ""
            }
            placeholder={
              !touchedFields.registerNumber ? "Enter your register number" : ""
            }
            onFocus={() => handleFieldFocus("registerNumber")}
            onBlur={() => handleFieldBlur("registerNumber")}
          />
          <FormControl fullWidth margin="dense" sx={{
                paddingBottom: "10px",
              }}>
            <InputLabel id="course-label">Course</InputLabel>
            <Select
              labelId="course-label"
              id="outlined-basic"
              name="course"
              label="Course"
              value={course}
              onChange={handleCourseChange}
              // MenuProps={{
              //   anchorOrigin: {
              //     vertical: "bottom",
              //     horizontal: "left",
              //   },
              //   MenuListProps: {
              //     style: {
              //       top: "unset",
              //     },
              //   },
              // }}
              placeholder="Select your course"
              
            >
              <MenuItem value="CSE">
                Computer Science Engineering (CSE)
              </MenuItem>
              <MenuItem value="IT">Information Technology (IT)</MenuItem>
              <MenuItem value="ADS">
                Artificial Intelligence and Data Science (ADS)
              </MenuItem>
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
              <MenuItem value="Int. MBA">
                Integrated Master of Business Administration(MBA)
              </MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth sx={{
                paddingBottom: "10px",
              }}>
            <InputLabel id="outlined-basic">Expected Cut-off</InputLabel>
            <Select
              // labelId="cutoff-label"
              id="outlined-basic"
              name="tentativeCutoff"
              label="Expected Cut-off"
              value={tentativeCutoff}
              onChange={handleTentativeCutoffChange}
              // placeholder="Select tentative cut-off"
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
            <InputLabel>District of Study</InputLabel>
            <Select
              labelId="demo-simple-select-label1"
              id="demo-simple-select"
              label="district"
              name="district"
              onChange={handleChangedistrict}
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
            {district === "other" && (
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

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Submit</Button>
        </DialogActions>
      </Dialog>

      

    </React.Fragment>
  );
}
