import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "../src/components/shared-component/Layout.jsx";
import Home from "./pages/01-landing-page/Home.jsx";
import SignInAndSignUpPage from "./pages/02-sign-in-sign-up/SignInAndSignUpPage.jsx";
import MenusPage from "./pages/03-menus/MenusPage.jsx";
import MenuDetailPage from "./pages/03.5-menu-detail/MenuDetailPage.jsx";
import CaloriesCalculatorPage from "./pages/06-calories-calculator/CaloriesCalculatorPage.jsx";
import BlogPage from "./pages/07-blog/BlogPage.jsx";
import BlogDetail from "./components/blog-detail/BlogDetail.jsx";
import CheckoutPage from "./pages/04-checkout/CheckoutPage.jsx";
import EditInformationPage from "./pages/08-edit-information/EditInformationPage.jsx";
import DashboardPage from "./pages/09-dashboard/DashboardPage.jsx";
import AboutUsPage from "./pages/05-about-us/AboutUsPage.jsx";
import AddressProvider from "./contexts/addressContext/AddressProvider.jsx";
import CaloriesCalculatorProvider from "./pages/06-calories-calculator/context/CaloriesCalculatorProvider.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    // errorElement: NotFoundPage,
    children: [
      { index: true, element: <Home /> },
      { path: "/menus", element: <MenusPage /> },
      { path: "/menus/:menuSlugId", element: <MenuDetailPage /> },
      {
        path: "/calories-calculator",
        element: (
          <CaloriesCalculatorProvider>
            <CaloriesCalculatorPage />
          </CaloriesCalculatorProvider>
        ),
      },
      { path: "/blog", element: <BlogPage /> },
      { path: "/blog/:blogSlugId", element: <BlogDetail /> },
      {
        path: "/checkout",
        element: (
          <AddressProvider>
            <CheckoutPage />
          </AddressProvider>
        ),
      },
      {
        path: "/edit-address",
        element: (
          <AddressProvider>
            <EditInformationPage />
          </AddressProvider>
        ),
      },
      { path: "/dashboard", element: <DashboardPage /> },
      { path: "/about-us", element: <AboutUsPage /> },
    ],
  },
  { path: "/sign-in-and-sign-up", element: <SignInAndSignUpPage /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
