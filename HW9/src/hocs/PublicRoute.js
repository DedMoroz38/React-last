import React from "react";
import { Route, Navigate, Routes } from "react-router-dom";

export default function PublicRoute({ authenticated, ...rest }) {
    return !authenticated ? (
        <Routes>
            <Route {...rest} />
        </Routes>

    ) : (
        <Navigate to="/chats" />)
}