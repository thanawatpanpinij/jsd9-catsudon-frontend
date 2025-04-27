import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "../src/components/shared-component/Layout.jsx";
import HomePage from "./pages/01-landing-page/HomePage.jsx";
import SignInAndSignUpPage from "./pages/02-sign-in-sign-up/SignInAndSignUpPage.jsx";
import MenusPage from "./pages/03-menus/MenusPage.jsx";
import MenuDetailPage from "./pages/03-menus/menu-detail/MenuDetailPage.jsx";
import CaloriesCalculatorPage from "./pages/06-calories-calculator/CaloriesCalculatorPage.jsx";
import BlogPage from "./pages/07-blog/BlogPage.jsx";
import BlogDetail from "./components/blog-detail/BlogDetail.jsx";
import CheckoutPage from "./pages/04-checkout/CheckoutPage.jsx";
import EditInformationPage from "./pages/08-edit-information/EditInformationPage.jsx";
import DashboardPage from "./pages/09-dashboard/DashboardPage.jsx";
import AboutUsPage from "./pages/05-about-us/AboutUsPage.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        Component: Layout,
        children: [
            { index: true, Component: HomePage },
            { path: "/menus", Component: MenusPage },
            { path: "/menus/:slug", Component: MenuDetailPage },
            { path: "/calories-calculator", Component: CaloriesCalculatorPage },
            { path: "/blog", Component: BlogPage },
            { path: "/blog/:slug", Component: BlogDetail },
            { path: "/checkout", Component: CheckoutPage },
            { path: "/edit-information", Component: EditInformationPage },
            { path: "/dashboard", Component: DashboardPage },
            { path: "/about-us", Component: AboutUsPage },
        ],
    },
    { path: "/sign-in-and-sign-up", Component: SignInAndSignUpPage },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
