import DefaultLayout from "../layouts/DefaultLayout/DefaultLayout";
import Instruction from "../pages/Instruction";
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

// Route khong can dang nhap
const publicRoutes = [
    { path: '/', component: Home, layout: DefaultLayout},
    { path: '/login', component: Login, },
    { path: '/list-thesis', component: ListThesis, layout: DefaultLayout},
    { path: '/list-thesis/:id', component: ThesisDetail, layout: DefaultLayout},
    { path: '/list-faculty', component: ListFaculty, layout: DefaultLayout},
    { path: '/list-faculty/:id', component: FacultyDetail, layout: DefaultLayout},

    { path: '/instruction', component: Instruction, layout: DefaultLayout},
    { path: '/notifications', component: Notification, layout: DefaultLayout},

    // not found page
    // { path: '/*', component: PageNotFound },
];

// Route can dang nhap
const privateRoutes = [
    // for authenticated
    // { path: '/profile', component: PersonalAccount },
    // { path: '/change-password', component: ChangePassword },
    { path: '/dashboard', component: Dashboard, layout: AdminLayout },
    { path: '//manage-student', component: Student, layout: AdminLayout },
    { path: '/manage-faculty', component: Faculty, layout: AdminLayout },
    { path: '/manage-schedule', component: Schedule, layout: AdminLayout },
    { path: '/manage-thesis', component: Thesis, layout: AdminLayout },
    { path: '/manage-term', component: Term, layout: AdminLayout },
    { path: '/manage-major', component: Major, layout: AdminLayout },

];

export { publicRoutes, privateRoutes };
