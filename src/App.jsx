import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "../src/components/shared-component/Layout.jsx";
import Home from "./pages/01-landing-page/Home.jsx";
import Menus from "./pages/03-menus/Menus.jsx";
import MenuDetail from "./components/menus-detail/MenuDetail.jsx";
import CaloriesCalculator from "./pages/06-calories-calculator/CaloriesCalculator.jsx";
import Blog from "./pages/07-blog/Blog.jsx";
import BlogDetail from "./components/blog-detail/BlogDetail.jsx";
import Checkout from "./pages/04-checkout/Checkout.jsx";
import EditInformation from "./pages/08-edit-information/EditInformation.jsx";
import Dashboard from "./pages/09-dashboard/Dashboard.jsx";
import SignInAndSignUp from "./pages/02-sign-in-sign-up/SignInAndSignUp.jsx";
import AboutUs from "./pages/05-about-us/AboutUs.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        Component: Layout,
        children: [
            { index: true, Component: Home },
            { path: "/menus", Component: Menus },
            { path: "/menus/:slug", Component: MenuDetail },
            { path: "/calories-calculator", Component: CaloriesCalculator },
            { path: "/blog", Component: Blog },
            { path: "/blog/:name", Component: BlogDetail },
            { path: "/checkout", Component: Checkout },
            { path: "/edit-information", Component: EditInformation },
            { path: "/dashboard", Component: Dashboard },
            { path: "/about-us", Component: AboutUs },
        ],
    },
    { path: "/sign-in-and-sign-up", Component: SignInAndSignUp },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
