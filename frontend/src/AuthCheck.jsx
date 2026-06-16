import { Navigate } from "react-router";
import { useAuth } from "@clerk/react";
import PageLoader from "./components/PageLoader";


const ProtectedRoute = ({ children }) => {
    const { isLoaded, isSignedIn } = useAuth();

    // Show loader while Clerk is checking auth
    if (!isLoaded) {
        return <PageLoader />;
    }

    // Redirect if not signed in
    if (!isSignedIn) {
        return <Navigate to="/auth" replace />;
    }

    return children;
};

export default ProtectedRoute;
