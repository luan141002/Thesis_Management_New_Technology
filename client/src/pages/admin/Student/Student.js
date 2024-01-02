import React, { useState, useEffect } from "react";
import { Box, Stack, Typography, Button, IconButton } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import EditNoteIcon from "@mui/icons-material/EditNote";
import AddIcon from "@mui/icons-material/Add";

import ToastMessage from "../../../components/ToastMessage/ToastMessage.js";
import userService from "../../../services/userServices.js";
import UserSubmitForm from "../../../components/Form/UserSubmitForm.js";

const StudentTable = () => {
  const columns = [
    { field: "studentId", headerName: "Student ID", width: 100 },
    { field: "firstName", headerName: "First Name", width: 200 },
    { field: "lastName", headerName: "Last Name", width: 200 },
    { field: "birthday", headerName: "Birthday", width: 200 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "major", headerName: "Major", width: 200 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <IconButton
              aria-label="edit"
              onClick={() => handleEdit(params.row._id)}
            >
              <EditNoteIcon />
            </IconButton>
            <IconButton
              aria-label="delete"
              onClick={() => handleDelete(params.row._id)}
            >
              <DeleteIcon />
            </IconButton>
          </>
        );
      },
    },
  ];

  const handleDelete = async (id) => {
    const response = await userService.deleteUser(id);
    if (response.status === 204) {
      console.log("delete user thành công");
      const updatedStudent = students.filter((student) => student._id !== id);
      setStudents(updatedStudent);
    } else {
      console.log("delete user thất bại ");
    }
  };

  const [message, setMessage] = useState("");
  const [typeMessage, setTypeMessage] = useState("");
  const [students, setStudents] = useState([]);
  const [formAction, setFormAction] = useState("");
  const [sId, setSId] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");

  useEffect(() => {
    async function fetchStudent() {
      const listStudent = await userService.getAllStudent();
      setStudents(listStudent);
    }
    fetchStudent();
  }, [showForm]);

  const handleAdd = () => {
    setFormAction("create");
    setTitle("Add New Student");
    setShowForm(true);
  };
  const handleEdit = (id) => {
    setFormAction("edit");
    setTitle("Edit Student");
    setShowForm(true);
    setSId(id);
  };
  const handleClose = () => {
    setShowForm(false);
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 4,
        }}
      >
        <Box>
          {" "}
          <Typography sx={{ fontSize: "2rem", fontWeight: 600 }}>
            {" "}
            Student{" "}
          </Typography>
        </Box>
        <Button
          variant="contained"
          sx={{ fontSize: "1rem" }}
          onClick={() => handleAdd()}
        >
          ADD
        </Button>
      </Box>
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={students}
          getRowId={(row) => row._id}
          columns={columns}
          pagination={{
            paginationMode: {
              pageSize: 5,
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
      {showForm && (
        <UserSubmitForm
          handleClose={handleClose}
          actions={formAction}
          id={sId}
          title={title}
          type="student"
        />
      )}
    </Box>
  );
};

export default StudentTable;
