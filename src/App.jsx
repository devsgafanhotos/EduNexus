import { useReducer } from "react";

import "./index.css";
import Alert from "./components/Modal/Alert";
import { DispatchAlert } from "./context/AlertContext";
import AppRoutes from "./partials/AppRoutes";

import AuthProvider from "./context/AuthContext";

function alertRedutor(state, action) {
    switch (action.type) {
        case "SHOW":
            return {
                text: action.text,
                alertType: action.alertType || "done",
                show: true,
            };

        case "HIDE":
            return { ...state, show: false };
        default:
            return state;
    }
}

export default function App() {
    const [alertProps, dispatchAlert] = useReducer(alertRedutor, {
        text: "",
        alertType: "done", // warning || error || done
        show: false, // true || false
    });

    return (
        <DispatchAlert.Provider value={dispatchAlert}>
            <AuthProvider>
                <Alert show={alertProps.show} alertType={alertProps.alertType}>
                    {alertProps.text}
                </Alert>
                <AppRoutes />
            </AuthProvider>
        </DispatchAlert.Provider>
    );
}
