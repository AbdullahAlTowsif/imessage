import { createBrowserRouter } from "react-router";
import ChatPage from "./pages/ChatPage";
import AuthPage from "./pages/AuthPage";
import ProtectedRoute from "./AuthCheck";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <ProtectedRoute><ChatPage /></ProtectedRoute>,
    },
    {
        path: "/auth",
        element: <AuthPage />,
    },
]);
