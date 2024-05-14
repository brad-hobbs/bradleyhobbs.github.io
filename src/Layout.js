import React from 'react';
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <main className="content-wrap">{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
