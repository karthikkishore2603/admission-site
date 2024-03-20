import * as React from "react";
import axios from "axios";
import { useState, ChangeEvent, FormEvent } from "react";
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
import { Typography } from "@mui/material";

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const [emailError, setEmailError] = React.useState(false);
  const [phoneError, setphoneError] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [course, setCourse] = React.useState("");

  const handleCourseChange = (event) => {
    setCourse(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());
    try {
      console.log("Form submitted:", formData);
      await axios.post("http://localhost:5000/api/formone", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("Form submitted:", formJson);
      alert("Form submitted successfully!");
      handleClose();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Enquire Now!
      </Button>

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
            id="name"
            name="name"
            label="Name"
            fullWidth
            variant="standard"
          />
          <TextField
            required
            margin="dense"
            id="email"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            error={emailError}
            helperText={emailError ? "Please enter a valid email address" : ""}
          />
          <TextField
            required
            margin="dense"
            id="phone"
            name="phone"
            label="phone Number"
            fullWidth
            variant="standard"
            
          />
          <FormControl fullWidth margin="dense">
            <InputLabel id="course-label">Course</InputLabel>
            <Select
              labelId="course-label"
              id="course"
              name="course"
              value={course}
              onChange={handleCourseChange}
              MenuProps={{
                anchorOrigin: {
                  vertical: "bottom",
                  horizontal: "left",
                },
                MenuListProps: {
                  style: {
                    top: "unset",
                  },
                },
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
          <TextField
            margin="dense"
            id="district"
            name="district"
            label="District"
            fullWidth
            variant="standard"
          />
          <TextField
            margin="dense"
            id="tentative_cutoff"
            name="tentative_cutoff"
            label="Tentative Cut-off"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Submit</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

// import React, { useState } from 'react';
// import axios from 'axios';
// import {
//   Button,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogContentText,
//   DialogTitle,
//   FormControl,
//   InputLabel,
//   MenuItem,
//   Select,
//   TextField
// } from '@mui/material';

// function FormDialog() {
//   const [open, setOpen] = useState(false);
//   const [emailError, setEmailError] = useState(false);
//   const [phoneError, setphoneError] = useState(false);
//   // const [course, setCourse] = useState('');
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     // course: '',
//     district: '',
//     tentative_cutoff: ''
//   });

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const handleCourseChange = (event) => {
//     setCourse(event.target.value);
//   };

//   const handleChange = (event) => {
//     setFormData({ ...formData, [event.target.name]: event.target.value });
//   };

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       console.log('Form submitted:', formData);
//       await axios.post('http://localhost:5000/api/submit-form', formData, {
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       });

//       alert('Form submitted successfully!');
//       handleClose();
//     } catch (error) {
//       console.error('Error submitting form:', error);
//     }
//   };

//   return (
//     <React.Fragment>
//       <Button variant="outlined" onClick={handleClickOpen}>
//         Enquire Now!
//       </Button>
//       <Dialog
//         open={open}
//         onClose={handleClose}
//         PaperProps={{
//           component: 'form',
//           onSubmit: handleFormSubmit,
//         }}
//       >
//         <DialogTitle>Application Enquiry Form</DialogTitle>
//         <DialogContent>
//           <DialogContentText>
//             Please enter the details to move further with the application process
//           </DialogContentText>

//           <TextField
//             autoFocus
//             required
//             margin="dense"
//             id="name"
//             name="name"
//             label="Name"
//             fullWidth
//             variant="standard"
//             value={formData.name}
//             onChange={handleChange}
//           />
//           <TextField
//             required
//             margin="dense"
//             id="email"
//             name="email"
//             label="Email Address"
//             type="email"
//             fullWidth
//             variant="standard"
//             error={emailError}
//             helperText={emailError ? 'Please enter a valid email address' : ''}
//             value={formData.email}
//             onChange={handleChange}
//           />
//           <TextField
//             required
//             margin="dense"
//             id="phone"
//             name="phone"
//             label="phone Number"
//             type="tel"
//             fullWidth
//             variant="standard"
//             error={phoneError}
//             helperText={phoneError ? 'Please enter a 10-digit number' : ''}
//             value={formData.phone}
//             onChange={handleChange}
//           />

//           <TextField
//             margin="dense"
//             id="district"
//             name="district"
//             label="District"
//             fullWidth
//             variant="standard"
//             value={formData.district}
//             onChange={handleChange}
//           />
//           <TextField
//             margin="dense"
//             id="tentative_cutoff"
//             name="tentative_cutoff"
//             label="Tentative Cut-off"
//             fullWidth
//             variant="standard"
//             value={formData.tentative_cutoff}
//             onChange={handleChange}
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose}>Cancel</Button>
//           <Button type="submit">Submit</Button>
//         </DialogActions>
//       </Dialog>
//     </React.Fragment>
//   );
// }

// export default FormDialog;
