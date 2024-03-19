import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  dialogTitle: {
    textAlign: 'center',
  },
});

export default function FormDialog() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [emailError, setEmailError] = React.useState(false);
  const [whatsappError, setWhatsappError] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [course, setCourse] = React.useState('');

  const handleCourseChange = (event) => {
    setCourse(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formJson.email)) {
      setEmailError(true);
      return;
    }

    // WhatsApp number validation
    const whatsappRegex = /^\d{10}$/;
    if (!whatsappRegex.test(formJson.whatsapp)) {
      setWhatsappError(true);
      return;
    }

    handleClose();
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
          component: 'form',
          onSubmit: handleFormSubmit,
        }}
      >
        <DialogTitle className={classes.dialogTitle}>Application Enquiry Form</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter the details to move further with the application process
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
            helperText={emailError ? 'Please enter a valid email address' : ''}
          />
          <TextField
            required
            margin="dense"
            id="whatsapp"
            name="whatsapp"
            label="WhatsApp Number"
            type="tel"
            fullWidth
            variant="standard"
            error={whatsappError}
            helperText={whatsappError ? 'Please enter a 10-digit number' : ''}
          />
          <FormControl fullWidth margin="dense">
            <InputLabel id="course-label">Course</InputLabel>
            <Select
              labelId="course-label"
              id="course"
              value={course}
              onChange={handleCourseChange}
              MenuProps={{
                anchorOrigin: {
                  vertical: 'bottom',
                  horizontal: 'left',
                },
                getContentAnchorEl: null,
                MenuListProps: {
                  style: {
                    top: 'unset',
                  },
                },
              }}
            >
              <MenuItem value="CSE">Computer Science Engineering (CSE)</MenuItem>
              <MenuItem value="IT">Information Technology (IT)</MenuItem>
              <MenuItem value="ADS">Advanced Data Science (ADS)</MenuItem>
              <MenuItem value="AML">Artificial Intelligence and Machine Learning(AML)</MenuItem>
              <MenuItem value="ECE">Electronics and Communications Engineering(ECE)</MenuItem>
              <MenuItem value="EEE">Electrical and Electronics Engineering(EEE)</MenuItem>
              <MenuItem value="Mech">Mechanical Engineering(Mech)</MenuItem>
              <MenuItem value="Chem">Chemical Engineering(Chem)</MenuItem>
              <MenuItem value="BioTech">BioTechnology Engineering(BioTech)</MenuItem>
              <MenuItem value="MBA">Master of Business Administration(MBA)</MenuItem>
              {/* Add more courses as needed */}
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
            id="cutoff"
            name="cutoff"
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
