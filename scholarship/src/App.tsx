// // import React from "react";
// import { useState } from "react";
// import axios from "axios";
// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
// import TextField from "@mui/material/TextField";
// import FormControl from "@mui/material/FormControl";
// import InputLabel from "@mui/material/InputLabel";
// import Select from "@mui/material/Select";
// import MenuItem from "@mui/material/MenuItem";
// import Button from "@mui/material/Button";
// import { Dialog } from "@mui/material";
// import "./App.css";

// export default function Formthree() {
//   const [open, setOpen] = useState(true);

//   const handleClose = () => {
//     setOpen(false);
//   };

//   // const [category] = useState("");

//   const [formData, setFormData] = useState({
//     name: "",
//     address: "",
//     parentmailid: "",
//     studentmailid: "",
//     parentphoneno: "",
//     studentphoneno: "",
//     dob: "",
//     schoolname: "",
//     schoolcode: "",
//     regno: "",
//     tentativecutoff: "",
//     category: "",
//     scholarship: "",
//     board: "",
//   });

//   const handleChange = (event: { target: { name: any; value: any } }) => {
//     const { name, value } = event.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: value,
//     }));

//     // console.log(formData);
//   };

//   const handleFormSubmit = async () => {
//     // console.log(formData);

//     console.log(formData);
//     const formJson = Object.fromEntries(Object.entries(formData));
//     try {
//       console.log("Form submitted:", formJson);
//       await axios.post("https://backend.comcareservices.com/api/formone", formJson, {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//       alert("Form submitted successfully!");
//       window.location.reload();
//     } catch (error) {
//       console.error("Error submitting form:ccc", error);
//     }
//   };


//   const [board, setboard] = useState("");
//   const [otherboard, setOtherboard] = useState("");

//   const handleChangeboard = (event: any) => {
//     const board = event.target.value;
//     setboard(board);
//     // If "Other" is selected, clear the other value
//     if (board !== "other") {
//       setOtherboard("");
//     }
//   };

//   return (
//     <>
//       <Box>
//         <Dialog
//           open={open}
//           onClick={handleClose}
//           fullWidth // Make dialog take full width
//           maxWidth="md" // Set maximum width of the dialog
//           sx={{
//             // Customize dialog size
//             "& .MuiDialog-paper": {
//               width: "100%",
//               maxWidth: "750px",
//               maxHeight: "auto", // Set custom maximum width
//             },
//           }}
//         >
//           <img src="../images/merit.jpg" alt="logo" />
//         </Dialog>
//       </Box>

//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <img
//           src="../images/grphead1.png"
//           className="responsive-image"
//           alt="logo"
//         />
//       </Box>
//       <form onSubmit={handleFormSubmit}>
//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "center",
//             alignItems: "center",
//             width: "100%",
//             height: "100%",
//           }}
//         >
//           <Typography
//             variant="h4"
//             align="center"
//             sx={{
//               marginTop: "20px",
//               paddingBottom: "20px",
//             }}
//           >
//             Merit Scholarship Application Form
//           </Typography>

//           <TextField
//             id="outlined-basic"
//             label="Name"
//             variant="outlined"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             sx={{
//               width: {
//                 xs: "85%",
//                 sm: "70%",
//               },
//               paddingBottom: "20px",
//             }}
//           />
//           <TextField
//             id="outlined-multiline-flexible"
//             label="Address for communication"
//             variant="outlined"
//             multiline
//             name="address"
//             value={formData.address}
//             onChange={handleChange}
//             sx={{
//               width: {
//                 xs: "85%",
//                 sm: "70%",
//               },
//               paddingBottom: "20px",
//             }}
//           />

// <FormControl
//             sx={{
//               width: "70%",
//               marginBottom: "20px",
//             }}
//           >
//             <InputLabel>Board of Study</InputLabel>
//             <Select
//               labelId="demo-simple-select-label1"
//               id="demo-simple-select"
//               label="Board of Study"
//               value={formData.board}
//               onChange={handleChangeboard}
//               name="board"
//               sx={{
//                 width: "100%",
//                 marginBottom: "20px",
//               }}
//             >
//               <MenuItem value="cbse">CBSE</MenuItem>
//               <MenuItem value="stateboard">Stateboard</MenuItem>
//               <MenuItem value="other">Other</MenuItem>
//             </Select>
//             {board === "other" && (
//               <TextField
//                 sx={{
//                   width: "100%",
//                   paddingBottom: "20px",
//                 }}
//                 label="Enter Other Value"
//                 value={formData.board}
//                 onChange={handleChange}
//                 name="board"
//               />
//             )}
//           </FormControl>


//           <TextField
//             id="outlined-basic"
//             label="Parent Mail Id"
//             variant="outlined"
//             name="parentmailid"
//             value={formData.parentmailid}
//             onChange={handleChange}
//             sx={{
//               width: {
//                 xs: "85%",
//                 sm: "70%",
//               },
//               paddingBottom: "20px",
//             }}
//           />

//           <TextField
//             id="outlined-basic"
//             label="Student Mail Id"
//             variant="outlined"
//             name="studentmailid"
//             value={formData.studentmailid}
//             onChange={handleChange}
//             sx={{
//               width: {
//                 xs: "85%",
//                 sm: "70%",
//               },
//               paddingBottom: "20px",
//             }}
//           />

//           <TextField
//             id="outlined-basic"
//             label="Parent Phone number"
//             variant="outlined"
//             name="parentphoneno"
//             value={formData.parentphoneno}
//             onChange={handleChange}
//             sx={{
//               width: {
//                 xs: "85%",
//                 sm: "70%",
//               },
//               paddingBottom: "20px",
//             }}
//           />

//           <TextField
//             id="outlined-basic"
//             label="Student Phone number"
//             variant="outlined"
//             name="studentphoneno"
//             value={formData.studentphoneno}
//             onChange={handleChange}
//             sx={{
//               width: {
//                 xs: "85%",
//                 sm: "70%",
//               },
//               paddingBottom: "20px",
//             }}
//           />

//           <TextField
//             id="outlined-basic"
//             label="DOB"
//             type="date"
//             variant="outlined"
//             name="dob"
//             value={formData.dob}
//             onChange={handleChange}
//             InputLabelProps={{
//               shrink: true,
//             }}
//             InputProps={{
//               style: { color: "#6B6A6A" },
//             }}
//             sx={{
//               width: {
//                 xs: "85%",
//                 sm: "70%",
//               },
//               paddingBottom: "20px",
//             }}
//           />

//           <TextField
//             id="outlined-basic"
//             label="Name of school studied"
//             variant="outlined"
//             name="schoolname"
//             value={formData.schoolname}
//             onChange={handleChange}
//             sx={{
//               width: {
//                 xs: "85%",
//                 sm: "70%",
//               },
//               paddingBottom: "20px",
//             }}
//           />

//           <TextField
//             id="outlined-basic"
//             label="School code No."
//             variant="outlined"
//             name="schoolcode"
//             value={formData.schoolcode}
//             onChange={handleChange}
//             sx={{
//               width: {
//                 xs: "85%",
//                 sm: "70%",
//               },
//               paddingBottom: "20px",
//             }}
//           />

//           <TextField
//             id="outlined-basic"
//             label="12th Exam registration No."
//             variant="outlined"
//             name="regno"
//             value={formData.regno}
//             onChange={handleChange}
//             sx={{
//               width: {
//                 xs: "85%",
//                 sm: "70%",
//               },
//               paddingBottom: "20px",
//             }}
//           />

//           <FormControl
//             sx={{
//               width: "70%",
//               marginBottom: "20px",
//             }}
//           >
//             <InputLabel id="outlined-basic">Tentative Cut-off</InputLabel>
//             <Select
//               // labelId="cutoff-label"
//               id="outlined-basic"
//               name="tentativecutoff"
//               value={formData.tentativecutoff}
//               onChange={handleChange}
//               sx={{
//                 width: "100%",
//                 marginBottom: "10px",
//               }}
//             >
//               <MenuItem value="<150">&lt;150</MenuItem>
//               <MenuItem value="150-160">150-160</MenuItem>
//               <MenuItem value="160-170">160-170</MenuItem>
//               <MenuItem value="170-180">170-180</MenuItem>
//               <MenuItem value="180-190">180-190</MenuItem>
//               <MenuItem value="190-195">190-195</MenuItem>
//               <MenuItem value=">195">{">"}195</MenuItem>
//               {/* Add more options as needed */}
//             </Select>
//           </FormControl>

//           <FormControl
//             sx={{
//               width: "70%",
//               marginBottom: "20px",
//             }}
//           >
//             <InputLabel>Category</InputLabel>
//             <Select
//               labelId="demo-simple-select-label1"
//               id="demo-simple-select"
//               label="category"
//               value={formData.category}
//               onChange={handleChange}
//               name="category"
//               sx={{
//                 width: "100%",
//                 marginBottom: "20px",
//               }}
//             >
//               <MenuItem value="bc">BC</MenuItem>
//               <MenuItem value="bcm">BCM</MenuItem>
//               <MenuItem value="mbc">MBC</MenuItem>
//               <MenuItem value="bcm">BCM</MenuItem>
//               <MenuItem value="sca">SCA</MenuItem>
//               <MenuItem value="sc">SC</MenuItem>
//               <MenuItem value="st">ST</MenuItem>
//               <MenuItem value="oc">OC</MenuItem>
//               <MenuItem value="general">General</MenuItem>
//             </Select>
//           </FormControl>

//           <FormControl
//             sx={{
//               width: {
//                 xs: "85%",
//                 sm: "70%",
//               },
//               marginBottom: "20px",
//             }}
//           >
//             <InputLabel>Willing to avail merit scholarship?</InputLabel>
//             <Select
//               labelId="scholarship"
//               id="demo-simple-select"
//               label="scholarship"
//               name="scholarship"
//               value={formData.scholarship}
//               onChange={handleChange}
//               sx={{
//                 width: "100%",
//                 marginBottom: "20px",
//               }}
//             >
//               <MenuItem value="yes">Yes</MenuItem>
//               <MenuItem value="no">No</MenuItem>
//             </Select>
//           </FormControl>

//           <Button variant="contained" onClick={handleFormSubmit}>
//             Submit
//           </Button>
//         </Box>
//       </form>
//     </>
//   );
// }
