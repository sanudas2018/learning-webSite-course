import { RouterProvider } from "react-router-dom";
import logo from "./logo.svg";
import { router } from "./Routes/Router";
// import "./App.css";

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
