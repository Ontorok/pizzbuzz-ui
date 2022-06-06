import React, { Fragment } from "react";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Navbar />
      {children}
      <Footer />
    </Fragment>
  );
};

export default Layout;
