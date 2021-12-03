import Footer from "components/layout/Footer";
import Header from "components/layout/Header";
import React from "react";
import { getAuth } from "utils/helpers";

const withAuthLayout = (Component) => (props) => {
  return (
    <div className="app">
      {!(getAuth() && getAuth().token) ? (
        <>
          <Header />
          <div className="app__body">
            <Component {...props} />
          </div>
          <Footer />
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default withAuthLayout;
