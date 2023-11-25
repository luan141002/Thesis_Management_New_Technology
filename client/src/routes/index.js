import Home from "../pages/Home";

// Route khong can dang nhap
const publicRoutes = [
    { path: '/', component: Home, },
    // { path: '/list-faculty', component: Shop,},
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
