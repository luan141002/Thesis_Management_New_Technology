import DefaultLayout from "../layouts/DefaultLayout/DefaultLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";

// Route khong can dang nhap
const publicRoutes = [
    { path: '/', component: Home, layout: DefaultLayout},
    { path: '/login', component: Login,},
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
