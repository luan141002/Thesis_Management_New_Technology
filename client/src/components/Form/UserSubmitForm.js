import React, { useState, useEffect } from "react";
import {
  Box,
  Stack,
  Typography,
  Button,
  IconButton,
  InputLabel,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Select,
  MenuItem,
  FormControl,
  TextField,
  FormHelperText,
} from "@mui/material";
import dayjs from "dayjs";
import majorService from "../../services/majorService.js";
import userService from "../../services/userServices";
import ToastMessage from "../ToastMessage/ToastMessage";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers";

const UserSubmitForm = ({ handleClose, id, type, actions, title }) => {
  const [message, setMessage] = useState("");
  const [typeMessage, setTypeMessage] = useState("");
  const [user, setUser] = useState({});

  const [userId, setUserId] = useState({
    value: "",
    message: "",
  });
  const [firstName, setFirstName] = useState({
    value: "",
    message: "",
  });
  const [lastName, setLastName] = useState({
    value: "",
    message: "",
  });
  const [email, setEmail] = useState({
    value: "",
    message: "",
  });
  const [password, setPassword] = useState({
    value: "",
    message: "",
  });
  const [address, setAddress] = useState({
    value: "",
    message: "",
  });
  const [phone, setPhone] = useState({
    value: "",
    message: "",
  });
  const [birthday, setBirthday] = useState(null);
  const [majors, setMajors] = useState([]);
  const [major, setMajor] = useState({ value: "", message: "" });

  const checkError = () => {
    if (
      firstName.message !== "" ||
      lastName.message !== "" ||
      password.message !== "" ||
      email.message !== "" ||
      phone.message !== ""
    ) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    async function fetchUser() {
      const majors = await majorService.getAllMajor();
      console.log(majors);
      setMajors(majors);
      if (actions === "edit") {
        const user = await userService.getUserById(id);
        setUser(user);
        console.log(user);

        setUserId({
          value: user.studentId ? user.studentId : user.facultyId || "",
          message: "",
        });
        setFirstName({
          value: user.firstName || "",
          message: "",
        });
        setLastName({
          value: user.lastName || "",
          message: "",
        });
        setEmail({
          value: user.email || "",
          message: "",
        });
        setPassword({
          value: user.password || "",
          message: "",
        });
        setAddress({
          value: user.address || "",
          message: "",
        });
        setPhone({
          value: user.phone || "",
          message: "",
        });
        setBirthday(dayjs(user.birthday));

        setMajor({
          value: user.major || " ",
          message: "",
        });
      }
    }
    fetchUser();
  }, []);

  // const handleClose = () => {
  //   setS
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!checkError()) {
      const userType = "student";
      const idField = "studentId";
      const data = {
        [idField]: userId.value,
        type: userType,
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        password: password.value,
        address: address.value,
        phone: phone.value,
        birthday: birthday,
        major: major.value,
      };
      if (actions === "create") {
        const response = await userService.createUser(data);
        if (response.status === 201) {
          console.log("add user thành công ");
        } else {
          console.log("add user thất bại ");
        }
      } else {
        const response = await userService.updateUser(id, data);
        console.log(response);
        if (response.status === 200) {
          console.log("update user thành công ");
        } else {
          console.log("update user thất bại ");
        }
      }
    }
  };

  return (
    <React.Fragment>
      <Dialog open={true} onClose={handleClose}>
        <form onSubmit={handleSubmit}>
          <DialogTitle>{title}</DialogTitle>
          <DialogContent sx={{ width: "600px" }}>
            <Box>
              <TextField
                label="ID"
                required
                value={userId.value}
                error={userId.message ? true : false}
                variant="outlined"
                placeholder="Enter user id"
                sx={{ width: "100%", mt: 1 }}
                onChange={(e) => {
                  setUserId({ ...userId, value: e.target.value });
                }}
              />
              {/* <FormHelperText sx={{ mb: 2}} error>
              {userId.message}
            </FormHelperText> */}
            </Box>

            <Box>
              <TextField
                label="FName"
                required
                value={firstName.value}
                error={firstName.message ? true : false}
                variant="outlined"
                placeholder="Enter user id"
                sx={{ width: "100%", mt: 1 }}
                onChange={(e) => {
                  setFirstName({ ...firstName, value: e.target.value });
                }}
              />
              {/* <FormHelperText sx={{ mb: 2}} error>
              {userId.message}
            </FormHelperText> */}
            </Box>
            <Box>
              <TextField
                label="LName"
                required
                value={lastName.value}
                error={lastName.message ? true : false}
                variant="outlined"
                placeholder="Enter user id"
                sx={{ width: "100%", mt: 1 }}
                onChange={(e) => {
                  setLastName({ ...lastName, value: e.target.value });
                }}
              />
              {/* <FormHelperText sx={{ mb: 2}} error>
              {userId.message}
            </FormHelperText> */}
            </Box>
            <Box>
              <TextField
                label="Email"
                required
                value={email.value}
                error={email.message ? true : false}
                variant="outlined"
                placeholder="Enter user id"
                sx={{ width: "100%", mt: 1 }}
                onChange={(e) => {
                  setEmail({ ...email, value: e.target.value });
                }}
              />
              {/* <FormHelperText sx={{ mb: 2}} error>
              {userId.message}
            </FormHelperText> */}
            </Box>
            <Box>
              <TextField
                label="Phone Number"
                required
                value={phone.value}
                error={phone.message ? true : false}
                variant="outlined"
                placeholder="Enter user id"
                sx={{ width: "100%", mt: 1 }}
                onChange={(e) => {
                  setPhone({ ...phone, value: e.target.value });
                }}
              />
              {/* <FormHelperText sx={{ mb: 2}} error>
              {userId.message}
            </FormHelperText> */}
            </Box>
            <Box>
              <TextField
                label="Address"
                required
                value={address.value}
                error={address.message ? true : false}
                variant="outlined"
                placeholder="Enter user id"
                sx={{ width: "100%", mt: 1 }}
                onChange={(e) => {
                  setAddress({ ...address, value: e.target.value });
                }}
              />
              {/* <FormHelperText sx={{ mb: 2}} error>
              {userId.message}
            </FormHelperText> */}
            </Box>

            <Box>
              <TextField
                label="Password"
                required
                value={password.value}
                error={password.message ? true : false}
                type="password"
                variant="outlined"
                placeholder="Enter user password"
                sx={{ width: "100%", mt: 1 }}
                onChange={(e) => {
                  setPassword({ ...password, value: e.target.value });
                }}
              />
              {/* <FormHelperText sx={{ mb: 2}} error>
              {userId.message}
            </FormHelperText> */}
            </Box>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Select birthday"
                value={birthday}
                onChange={(newDay) => {
                  setBirthday(newDay);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
            <FormControl sx={{ minWidth: "100%", mt: 2 }}>
              <InputLabel htmlFor="grouped-select">Major</InputLabel>
              <Select
                value={major.value}
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                onChange={(e) => setMajor({ ...major, value: e.target.value })}
              >
                {majors?.length > 0 &&
                  majors.map((major) => (
                    <MenuItem value={major._id}>{major.name}</MenuItem>
                  ))}
              </Select>
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            {actions === "create" ? (
              <Button type="submit">Add</Button>
            ) : (
              <Button type="submit">Update</Button>
            )}
          </DialogActions>
        </form>
      </Dialog>
    </React.Fragment>
  );
};

export default UserSubmitForm;
