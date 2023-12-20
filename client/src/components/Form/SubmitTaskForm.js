import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useNavigate } from "react-router-dom";
import FormHelperText from "@mui/material/FormHelperText";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import ToastMessage from "../ToastMessage/ToastMessage";
import taskService from "../../services/taskService";

function SubmitTaskForm({ handleClose, task }) {
  const [message, setMessage] = useState("");
  const [typeMessage, setTypeMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      // file data
    };
    const respone = await taskService.submitTask(task, data);
    console.log(("task: ", respone));
    // chưa có api for submit files
    if (respone.status === 201) {
      setMessage("Submit Task thành công");
      setTypeMessage("success");
    } else {
      setMessage("Submit Task thất bại");
      setTypeMessage("error");
    }
    setTimeout(() => {
      setMessage("");
      setTypeMessage("");
    }, 3000);
  };
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log(file);
    // Do something with the selected file
  };
  return (
    <Box>
      <Dialog open={true} onClose={handleClose}>
        <form onSubmit={handleSubmit}>
          <DialogTitle>{"Submit Task"}</DialogTitle>
          <DialogContent sx={{ width: "600px" }}>
            <ToastMessage message={message} type={typeMessage} />
            <Box>
              <Input
                type="file"
                inputProps={{ accept: "image/*" }} // Optional: Set the accepted file types
                onChange={handleFileChange}
              />
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>

            <Button type="submit">Submit</Button>
          </DialogActions>
        </form>
      </Dialog>
    </Box>
  );
}

export default SubmitTaskForm;
