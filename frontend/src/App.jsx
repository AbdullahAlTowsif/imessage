import { createBrowserRouter } from "react-router";
import ChatPage from "./pages/ChatPage";
import AuthPage from "./pages/AuthPage";
import ProtectedRoute from "./ChatAuthCheck";
import AuthProtectedRoute from "./AuthCheck";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <ProtectedRoute><ChatPage /></ProtectedRoute>,
    },
    {
        path: "/auth",
        element: <AuthProtectedRoute><AuthPage /></AuthProtectedRoute>,
    },
]);
