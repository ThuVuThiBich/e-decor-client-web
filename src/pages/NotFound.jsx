import { Button, Typography } from "@material-ui/core";
import React from "react";
import notFound from "../assets/images/page_not_found.svg";
export default function NotFound() {
  return (
    <div>
      <img src={notFound} alt="" />
      <Typography variant="h6" style={{ color: "#3f3d56" }}>
        Sorry, page not found!
      </Typography>
      <Typography>
        Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve
        mistyped the URL? Be sure to check your spelling.
      </Typography>
      <Button>Go To Home</Button>
    </div>
  );
}
