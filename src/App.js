import "./App.css";
import Home from "./screens/Home";
import Signup from "./screens/Signup";
import Login from "./screens/Login";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./context/ProtectedRoutes";
import { UserAuthContextProvider } from "./context/AuthContext";
import Cart from "./screens/Cart";
import Men from "./screens/Men";
import Women from "./screens/Women";
import Shoes from "./screens/Shoes";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <UserAuthContextProvider>
        <Routes>
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/men"
            element={
              <ProtectedRoute>
                <Men />
              </ProtectedRoute>
            }
          />
          <Route
            path="/women"
            element={
              <ProtectedRoute>
                <Women />
              </ProtectedRoute>
            }
          />
          <Route
            path="/shoes"
            element={
              <ProtectedRoute>
                <Shoes />
              </ProtectedRoute>
            }
          />
          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            }
          />
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </UserAuthContextProvider>
    </>
  );
}

export default App;
