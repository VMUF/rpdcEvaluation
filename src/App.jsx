import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import EvaluationForm from "./pages/EvaluationForm";
import Button from "./ui/Button";
import GlobalStyle from "./styles/GlobalStyle";
import GlobalStyleLight from "./styles/GlobalStyleLight";
import { ButtonDark } from "./ui/ButtonDark";
import useDarkMode from "./hook/useDarkMode";
import Landing from "./pages/Landing";

const router = createBrowserRouter([
  {
    index: "/rpdcEvaluation/",
    element: <Navigate replace to={"/rpdcEvaluation/home"} />,
  },
  {
    path: "/rpdcEvaluation",
    element: <Home />,
  },
  { path: "/rpdcEvaluation/Evalform", element: <EvaluationForm /> },
  { path: "/rpdcEvaluation/finish", element: <Landing /> },
]);

function App() {
  const { dark, dispatch } = useDarkMode();
  return (
    <>
      {dark ? <GlobalStyle /> : <GlobalStyleLight />}
      <ButtonDark>
        <Button onClick={() => dispatch({ type: "darkModes", payload: !dark })}>
          {dark ? (
            <p>
              🌚 <span> Dark Mode</span>
            </p>
          ) : (
            <p>
              ☀️ <span style={{ color: "black" }}> Light Mode</span>
            </p>
          )}
        </Button>
      </ButtonDark>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
