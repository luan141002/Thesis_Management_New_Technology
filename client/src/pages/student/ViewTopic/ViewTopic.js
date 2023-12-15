import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  Button,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import DeleteIcon from "@mui/icons-material/Delete";
import EditNoteIcon from "@mui/icons-material/EditNote";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { Link, useNavigate } from "react-router-dom";

import FirstPageIcon from "@mui/icons-material/FirstPage";
import LastPageIcon from "@mui/icons-material/LastPage";
import { TableCell, styled } from "@mui/material";

const CustomTableCell = styled(TableCell)({
  fontSize: "1.4rem",
});

function ViewTopic() {
  const [selectedUserId, setSelectedUserId] = React.useState(null);
  const [filteredUsers, setFilteredUsers] = React.useState([]);
  const [users, setUsers] = React.useState([]);
  const [showPopup, setShowPopup] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [typeMessage, setTypeMessage] = React.useState("");
  const [searchTerm, setSearchTerm] = React.useState("");
  const [currentPage, setCurrentPage] = React.useState(1);
  const [itemsPerPage, setItemsPerPage] = React.useState(6);
  const [isSearchFocused, setIsSearchFocused] = React.useState(false);
  const [allUsers, setAllUsers] = React.useState([]);
  // make pagination

  const navigate = useNavigate();

  React.useEffect(() => {
    // Set the initial data for both all users and filtered users
    setAllUsers([
      // Your list of users goes here
    ]);
    setFilteredUsers([
      // Your list of users goes here
    ]);
  }, []);

  // make pagination
  // const indexOfLastItem = currentPage * itemsPerPage;
  // const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // const currentItems = filteredUsers.slice(indexOfFirstItem, indexOfLastItem);

  // const pageNumbers = Math.ceil(filteredUsers.length / itemsPerPage);

  const handleSearch = () => {
    // Filter users based on the search term
    const filteredResults = allUsers.filter(
      (user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.phone.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Update the filtered users state with filtered results
    setFilteredUsers(filteredResults);

    // Reset current page to 1 after search
    setCurrentPage(1);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, 8));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const renderPageNumbers = Array.from({ length: 8 }).map((_, index) => (
    <Button
      key={index}
      onClick={() => setCurrentPage(index + 1)}
      sx={{ mt: 2 }}
    >
      <Typography>{index + 1}</Typography>
    </Button>
  ));

  //search animation
  const handleSearchFocus = () => {
    setIsSearchFocused(true);
  };

  const handleSearchBlur = () => {
    setIsSearchFocused(false);
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "16px",
        }}
      >
        <Box>
          <Typography sx={{ fontSize: "3rem", fontWeight: 600 }}>
            Customers
          </Typography>
          {/* <Stack spacing={1} direction="row">
                        <Button sx={{ fontSize: '1.4rem', textTransform: 'none' }}>
                            <UploadIcon sx={{ mr: 1 }} />
                            Import
                        </Button>
                        <Button sx={{ fontSize: '1.4rem', textTransform: 'none' }}>
                            <DownloadIcon sx={{ mr: 1 }} />
                            Export
                        </Button>
                    </Stack> */}
        </Box>
      </Box>
      <Paper sx={{ mt: 4, mb: 4, padding: 1.5, borderRadius: 4 }}>
        <TextField
          placeholder="Search Customer"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={handleSearchFocus}
          onBlur={handleSearchBlur}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ height: 25, width: 25 }} />
              </InputAdornment>
            ),
            style: {
              fontSize: "1.4rem",
              color: "#000",
              borderRadius: 8,
              width: isSearchFocused ? "300px" : "200px",
              transition: "width 0.3s ease-in-out",
            },
          }}
        />
        <Button onClick={handleSearch} sx={{ marginLeft: 2 }}>
          Search
        </Button>
      </Paper>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <CustomTableCell sx={{ fontWeight: "bold" }}>No</CustomTableCell>
              <CustomTableCell sx={{ fontWeight: "bold" }} align="left">
                Name
              </CustomTableCell>
              <CustomTableCell sx={{ fontWeight: "bold" }} align="left">
                Email
              </CustomTableCell>
              <CustomTableCell sx={{ fontWeight: "bold" }} align="left">
                Phone
              </CustomTableCell>
              <CustomTableCell sx={{ fontWeight: "bold" }} align="center">
                Detail
              </CustomTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <CustomTableCell component="th" scope="row">
                1
              </CustomTableCell>
              <CustomTableCell align="left">Phan Thành Luân</CustomTableCell>
              <CustomTableCell align="left">student1@gmail.com</CustomTableCell>
              <CustomTableCell align="left">0987654321</CustomTableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Typography sx={{ mt: 2, fontSize: "16px" }}>
        Total of users: {users.length}
      </Typography>
    </Box>
  );
}

export default ViewTopic;
