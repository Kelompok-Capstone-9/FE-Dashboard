import { Route, Routes } from "react-router-dom";
import React from "react";
import OnlineClass from "../pages/ManagesOnlineClass/OnlineClass";
import OnlineClassForm from "../components/Form/OnlineClass";

const LayoutOnline = () => {
    return(
        <>
        <Routes>
            <Route index element={<OnlineClass/>}/>
            <Route path="/:id" element={<OnlineClass/>}/>
        </Routes>
        </>
    )
}

export default LayoutOnline