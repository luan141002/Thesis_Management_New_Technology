// import { useState, useEffect, useMemo } from "react";
// import {
//   createColumnHelper,
//   flexRender,
//   getCoreRowModel,
//   getFilteredRowModel,
//   getPaginationRowModel,
//   useReactTable,
// } from "@tanstack/react-table";
// import DebouncedInput from "./DebouncedInput";
// import userService from "../../services/userServices";
// import BaseTable from "./BaseTable.js";
// import SearchIcon from './BaseTable';

// const Table = ({ type }) => {
//   const columnHelper = createColumnHelper();
//   // initial columns if there is no data
//   const [data, setData] = useState(() => {
//     switch (type) {
//       case "students":
//         return [
//           {
//             firstName: "Luân ",
//             lastName: "Heo",
//             email: "student1@gmail.com",
//             phone: "0987654321",
//             address: "số 1 vvn ",
//             studentId: "20110380",
//             birthday: "",
//             major: "",
//           },
//         ];
//         break;
//     }
//   });
//   const loadPage = async () => {
//     try {
//       let result;
//       switch (type) {
//         case "students":
//           result = await userService.getAllStudent();
//           console.log(result.length);

//           if (result.length !== 0) {
//             console.log("vo day 1");
//             const processedResults = result.map((element) => ({
//               studentId: element.studentId,
//               fullName: element.firstName + " " + element.lastName,
//               email: element.email,
//               phone: element.phone,
//               address: element.address,
//               //   birthday: (element.birthday).toLocaleString().replace(''),
//               birthday: parseDate(element.birthday),
//               major: element.major,
//             }));
//             setData([...processedResults]);
//           } else {
//             console.log("vo day 2");
//             setData([
//               {
//                 firstName: "Luân ",
//                 lastName: "Heo",
//                 email: "student1@gmail.com",
//                 phone: "0987654321",
//                 address: "số 1 vvn ",
//                 studentId: "20110380",
//                 birthday: "",
//                 major: "",
//               },
//             ]);
//           }

//           break;

//         default:
//           break;
//       }
//     } catch (err) {
//       //   toast.error("Failed", {
//       //     position: toast.POSITION.TOP_RIGHT,
//       //   });
//     }
//   };

//   useEffect(() => {
//     loadPage();
//   }, []);

//   return (
//     <div><BaseTable data={data}/></div>

//   );
// };

// function parseDate(string) {
//   const birthday = new Date(string);

//   // Lấy ngày, tháng, năm
//   const day = birthday.getDate();
//   const month = birthday.getMonth() + 1; // Ghi chú: getMonth trả về giá trị từ 0 đến 11
//   const year = birthday.getFullYear();

//   // Tạo chuỗi ngày tháng năm
//   return `${day}/${month}/${year}`;
// }
// export default Table;
