import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import HomePage from "../Pages/HomePage";
import ContactPage from "../Pages/ContactPage";
import AboutPage from "../Pages/AboutPage";
import RootLayout from "../Pages/Layout";
import QuickStartPage from "../Pages/learn";
import LearnLayout from "../Pages/learn/Layout";
import ThinkingInReactPage from "../Pages/learn/ThinkingInReact";
import InstallationPage from "../Pages/learn/Installation";
import ContributePage from "../Pages/ContributePage";
import LoginPage from "../Pages/LoginPage";
import ProtectedRoute from "../Components/Auth/ProtectedRoute";
import ErrorHandler from "../Components/Errors/ErrorHandler";
import ErrorPage from "../Pages/ErrorPage";

const isLoggedIn = true;
const userData: {email: string} | null = isLoggedIn ? {email: 'buhussien@gmail.com'} : null;

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Root Layout */}
      <Route path={"/"} element={ <div><RootLayout /></div> } errorElement={<ErrorHandler/> }>
        <Route index element={<HomePage />} errorElement={ <ErrorHandler /> } />
        <Route path={"contact"} element={ <ContactPage /> } errorElement={ <ErrorHandler/> } />
        <Route path={"about"} element={ <AboutPage /> } errorElement={ <ErrorHandler/> } />
        <Route
          path={"contribute"}
          element={
            <ProtectedRoute isAllowed={isLoggedIn} redirectPath="/login" data={userData}>
              <ContributePage />
            </ProtectedRoute>
          }
        />
        <Route
          path={"login"}
          element={
            <ProtectedRoute isAllowed={!isLoggedIn} redirectPath="/contribute" data={userData}>
              <LoginPage />
            </ProtectedRoute>
          }
        />
      </Route>

      {/* LEARN PAGEs */}
      <Route
        path={"/learn"}
        element={
          <div>
            {" "}
            <LearnLayout />{" "}
          </div>
        }
      >
        <Route index element={<QuickStartPage />} />
        <Route path={"thinking-in-react"} element={<ThinkingInReactPage />} />
        <Route path={"installation"} element={<InstallationPage />} />
      </Route>
      
      <Route path={"*"} element={<ErrorPage statusCode={404}title="Page Not Found" />} />
    </>,
  ),
);

export default router;
