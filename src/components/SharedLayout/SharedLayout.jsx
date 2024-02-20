import Navbar from "components/Navbar/Navbar";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";



const SharedLayout = () => {
    return (
        <>
            <Navbar/>
            <Suspense fallback={<p>...Loading page</p>}>
                <Outlet />
            </Suspense>
        </>
    )
}

export default SharedLayout;