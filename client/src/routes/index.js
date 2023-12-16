import DefaultLayout from "../layouts/DefaultLayout/DefaultLayout";
import Instruction from "../pages/Instructions/Instruction";
import ListFaculty from "../pages/ListFaculty";
import ListThesis from "../pages/ListThesis";
import Notification from "../pages/Notification";
import Login from "../pages/Login";
import Home from "../pages/Home";
import ThesisDetail from "../pages/ThesisDetails";
import FacultyDetail from "../pages/FacultyDetail";
import Dashboard from "../pages/admin/Dashboard";
import AdminLayout from "../layouts/AdminLayout/AdminLayout";
import Student from "../pages/admin/Student/Student";
import Faculty from "../pages/admin/Faculty/Faculty";
import Schedule from "../pages/admin/Schedule/Schedule";
import Thesis from "../pages/admin/Thesis/Thesis";
import Term from "../pages/admin/Term/Term";
import Major from "../pages/admin/Major/Major";
import RegisterAccount from "../pages/RegisterAccount";
import HeadLecturerBusinessTable from "../components/Table/HeadLecturerBusinessTable.js";
import StudentTable from "../components/Table/StudentTable.js";

// Route khong can dang nhap
const publicRoutes = [
  { path: "/", component: Home, layout: DefaultLayout },
  { path: "/login", component: Login },
  { path: "/register-account", component: RegisterAccount },
  { path: "/list-thesis", component: ListThesis, layout: DefaultLayout },
  { path: "/list-thesis/:id", component: ThesisDetail, layout: DefaultLayout },
  { path: "/list-faculty", component: ListFaculty, layout: DefaultLayout },
  {
    path: "/list-faculty/:id",
    component: FacultyDetail,
    layout: DefaultLayout,
  },

  {
    path: "/head-lecturer/manage-thesis",
    component: HeadLecturerBusinessTable,
    layout: AdminLayout,
    type: "theses",
  },
  {
    path: "/head-lecturer/pending-thesis",
    component: HeadLecturerBusinessTable,
    layout: AdminLayout,
    type: "pendingTheses",
  },
  {
    path: "/head-lecturer/approved-thesis",
    component: HeadLecturerBusinessTable,
    layout: AdminLayout,
    type: "approvedTheses",
  },
  {
    path: "/student/assign-thesis",
    component: StudentTable,
    layout: AdminLayout,
    type: "students-thesis",
  },
  {
    path: "/student/manage-thesis",
    component: StudentTable,
    layout: AdminLayout,
    type: "students-manage-thesis",
  },
  // {
  //   path: "/thesis",
  //   component: ThesisTable,
  //   layout: AdminLayout,
  //   type: "pendingTheses",
  // },

  // {
  //   path: "/lecturers",
  //   component: ThesisTable,
  //   layout: AdminLayout,
  //   type: "lecturers",
  // },
  // {
  //   path: "/thesis",
  //   component: ThesisTable,
  //   layout: AdminLayout,
  //   type: "students",
  // },

  // {
  //   path: "/lecturers",
  //   component: ThesisTable,
  //   layout: AdminLayout,
  //   type: "lecturers",
  // },

  { path: "/instruction", component: Instruction, layout: DefaultLayout },
  { path: "/notifications", component: Notification, layout: DefaultLayout },

  // not found page
  // { path: '/*', component: PageNotFound },
];

// Route can dang nhap
const privateRoutes = [
  // for authenticated
  // { path: '/profile', component: PersonalAccount },
  // { path: '/change-password', component: ChangePassword },
  { path: "/dashboard", component: Dashboard, layout: AdminLayout },
  { path: "/manage-student", component: Student, layout: AdminLayout },

  { path: "/manage-faculty", component: Faculty, layout: AdminLayout },
  { path: "/manage-schedule", component: Schedule, layout: AdminLayout },
  { path: "/manage-thesis", component: Thesis, layout: AdminLayout },
  { path: "/manage-term", component: Term, layout: AdminLayout },
  { path: "/manage-major", component: Major, layout: AdminLayout },
];

export { publicRoutes, privateRoutes };
