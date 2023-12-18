import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

// const account = JSON.parse(localStorage.getItem("account"));

// let result;
// console.log("da vo day");
// result = await thesisService.getApprovedThesisByMajor(account.major);
// console.log(result.length);

// if (result.length !== 0) {
//   console.log("vo day 1");
//   const processedResults = result.map((element) => ({
//     title: element.title,
//     description: element.description,
//     major: element.major.name, // ObjectId của Major
//     students: element.authors.length, // Mảng ObjectId của Student
//     adviser: element.adviser.firstName, // ObjectId của Faculty
//     lecturerReviews: element.panelists.length, // Mảng ObjectId của Faculty
//     remarks: element.remarks,
//     status: element.status,
//   }));
//   setData([...processedResults]);
// } else {
//   console.log("vo day 2");
//   setData([
//     {
//       title: "Thesis Title",
//       description: "Thesis Description",
//       major: "613b0c5eabf2c3001f4b4d6a", // ObjectId của Major
//       students: 2, // Mảng ObjectId của Student
//       adviser: "613b0c5eabf2c3001f4b4d6d", // ObjectId của Faculty
//       lecturerReviews: 2, // Mảng ObjectId của Faculty
//       remarks: "Thesis Remarks",
//       status: "New",
//     },
//   ]);
// }

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <TableCell>Thesis</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Start Date</TableCell>
            <TableCell align="right">End Date</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Created By</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row._id}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.description}</TableCell>
              <TableCell align="right">{row.start}</TableCell>
              <TableCell align="right">{row.end}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
              <TableCell align="right">{row.createdBy}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
