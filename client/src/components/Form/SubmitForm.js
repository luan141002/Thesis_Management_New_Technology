import * as React from 'react';
import dayjs from 'dayjs';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import FormHelperText from '@mui/material/FormHelperText';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import ToastMessage from '../../../components/ToastMessage/ToastMessage';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';
import userService from '../../../services/userServices';
import majorService from '../../../services/majorService';



export default function SubmitForm({handleClose, id, actions, dataFields, title, type}) {
    const [message, setMessage] = React.useState('');
    const [typeMessage, setTypeMessage] = React.useState('');
        const navigate = useNavigate();

    
    const handleSubmit = async (e) => {
        e.preventDefault();
       
        setTimeout(() => {
            setMessage('');
            setTypeMessage('');
        }, 3000);
    };


    return (
        <React.Fragment>
        <Dialog open={true} onClose={handleClose}>
        <form onSubmit={handleSubmit}>
            <DialogTitle>{title}</DialogTitle>
            <DialogContent sx={{ width:"600px" }}>
                <ToastMessage message={message} type={typeMessage} />
                <Box>
                    <TextField
                      label="Student ID"
                      required
                      value={studentId.value}
                      error={studentId.message ? true : false}
                      variant="outlined"
                      placeholder="Enter Student ID"
                      sx={{ width: '100%', mb: 2, mt:1 }}
                      onBlur={validateFirstName}
                      onChange={(e) =>
                          setStudentId({ ...studentId, value: e.target.value })
                      }
                    />
                    <FormHelperText error>
                        {firstName.message}
                    </FormHelperText>
                </Box>
                <Box>
                    <TextField
                      label="First Name"
                      required
                      value={firstName.value}
                      error={firstName.message ? true : false}
                      variant="outlined"
                      placeholder="Enter First Name"
                      sx={{ width: '100%', mb: 2}}
                      onBlur={validateFirstName}
                      onChange={(e) =>
                          setFirstName({ ...firstName, value: e.target.value })
                      }
                    />
                    <FormHelperText error>
                        {firstName.message}
                    </FormHelperText>
                </Box>
                <Box>
                    <TextField
                      label="Last Name"
                      required
                      value={lastName.value}
                      error={lastName.message ? true : false}
                      variant="outlined"
                      placeholder="Enter Last Name"
                      sx={{ width: '100%', mb:2 }}
                      onBlur={validateLastName}
                      onChange={(e) =>
                          setLastName({ ...lastName, value: e.target.value })
                      }
                    />
                    <FormHelperText error>
                        {lastName.message}
                    </FormHelperText>
                </Box>
                <Box>
                    <TextField 
                      label="Email"
                      
                      required
                      sx={{ width: '100%'}}
                      value={email.value}
                      error={email.message ? true : false}
                      variant="outlined"
                      placeholder="Enter email"
                      onChange={(e) => setEmail({ ...email, value: e.target.value })}
                      onBlur={validateEmail}
                    />
                     <FormHelperText error  sx={{ mb:2 }}>
                        {email.message}
                    </FormHelperText>
                </Box>
                <Box>
                    <TextField 
                    id="validation-outlined-input"
                    label="Password"
                    value={password.value}
                    error={password.message ? true : false}
                    required
                    sx={{ width: '100%'}}
        
                    type={password.isShow ? 'text' : 'password'}
                    variant="outlined"
                    placeholder="Enter Password"
                    onChange={(e) =>
                        setPassword({ ...password, value: e.target.value })
                    }
                    onBlur={validatePassword}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton edge="end" onClick={handleShowPassword}>
                                    {password.isShow ? (
                                        <VisibilityIcon />
                                    ) : (
                                        <VisibilityOffIcon />
                                    )}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                    />
                     <FormHelperText error sx={{ mb:2 }} >
                        {password.message}
                    </FormHelperText>
                </Box>
                <Box>
                    <TextField
                     id="validation-outlined-input"
                     label="Phone Number"
                     value={phone.value}
                     error={phone.message ? true : false}
                     fullWidth
                     variant="outlined"
                     placeholder="Enter Phone Number"
                     onBlur={validatePhone}
                     onChange={(e) => setPhone({ ...phone, value: e.target.value })}
                    />
                    <FormHelperText error sx={{ mb:2 }}>
                        {phone.message}
                    </FormHelperText>
                </Box>
                <Box>
                    <TextField
                      label="Address"
                      value={address.value}
                      error={address.message ? true : false}
                      variant="outlined"
                      placeholder="Enter Address"
                      sx={{ width: '100%', mb:2 }}
                      onChange={(e) =>
                          setAddress({ ...address, value: e.target.value })
                      }
                    />
                    <FormHelperText error>
                        {address.message}
                    </FormHelperText>
                </Box>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                    label="Select Birth Date"
                    value={birthday}
                    onChange={(newDay)=> setBirthday(newDay)}
                    renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider> 
                <FormControl sx={{ minWidth: '100%', mt:2 }}>
                    <InputLabel htmlFor="grouped-select">Major</InputLabel>
                    <Select 
                        value={major.value}
                        labelId="demo-controlled-open-select-label"
                        id="demo-controlled-open-select"
                        label="Select Status"
                        onChange={(e)=> setMajor({...major, value:e.target.value})}
                    >
                        {majors.length> 0 && majors.map(major =>  (
                        <MenuItem value={major._id}>{major.name}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            {
                type === 'create' ? 
                (<Button type='submit'>Add</Button>) : 
                (<Button type='submit'>Update</Button>)
            }
            </DialogActions>
            </form>
        </Dialog>
        
        </React.Fragment>
    );
}