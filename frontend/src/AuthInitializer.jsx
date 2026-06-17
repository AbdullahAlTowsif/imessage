import { useAuth } from "@clerk/react";
import { useAuthStore } from "./store/useAuthStore";
import { useEffect } from "react";
import PageLoader from "./components/PageLoader";

function AuthInitializer({ children }) {
    const { isLoaded, isSignedIn } = useAuth();

    const checkAuth = useAuthStore((state) => state.checkAuth);
    const clearAuth = useAuthStore((state) => state.clearAuth);
    const isCheckingAuth = useAuthStore((state) => state.isCheckingAuth);

    useEffect(() => {
        if (!isLoaded) return;

        if (isSignedIn) checkAuth();
        else clearAuth();
    }, [isLoaded, isSignedIn, checkAuth, clearAuth]);

    if (!isLoaded || (isSignedIn && isCheckingAuth)) {
        return <PageLoader />;
    }

    return children;
}

export default AuthInitializer;