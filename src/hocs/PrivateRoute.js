import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "react-use-auth";

export default function PrivateRoute({ children, authorization }) {
    return authorization ? children : <Navigate to="/login" />;
}