import DefaultLayout from "../layouts/DefaultLayout/DefaultLayout";
import Instruction from "../pages/Instruction";
import ListFaculty from "../pages/ListFaculty";
import ListThesis from "../pages/ListThesis";
import Notification from "../pages/Notification";
import Login from "../pages/Login";
import Home from "../pages/Home";

// Route khong can dang nhap
const publicRoutes = [
    { path: '/', component: Home, layout: DefaultLayout},
    { path: '/login', component: Login, },
    { path: '/list-thesis', component: ListThesis, layout: DefaultLayout},
    { path: '/list-faculty', component: ListFaculty, layout: DefaultLayout},
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
    // { path: '/dashboard', component: Dashboard, layout: AdminLayout },
    // { path: '/manage-product', component: Product, layout: AdminLayout },
    // { path: '/manage-product/create', component: AddProduct, layout: AdminLayout },
    // { path: '/manage-product/:id/edit', component: EditProduct, layout: AdminLayout },
];

export { publicRoutes, privateRoutes };
