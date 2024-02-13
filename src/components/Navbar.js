import React, { useState } from "react";
import {
  AppBar,
  Grid,
  Toolbar,
  Typography,
  Drawer,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Link } from "react-router-dom";
import DrawerComponent from "./DrawerComponent";

const Navbar = ({ links }) => {
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <AppBar
      style={{
        backgroundColor: "rgba(255, 255, 255, 1)",
        color: "black",
      }}
    >
      <Toolbar>
        {isMatch ? (
          <>
            <a href="/Home">
              <img
                src="/images/silvafly-logo.png"
                width={120}
                height={40}
              ></img>
            </a>
            <DrawerComponent links={links} />
          </>
        ) : (
          <Grid container>
            <Grid item xs={2}>
              <a href="/Home">
                <img
                  src="/images/silvafly-logo.png"
                  width={120}
                  height={40}
                ></img>
              </a>
            </Grid>

            <Grid
              item
              container
              xs={4}
              justifyContent="center"
              marginLeft={"auto"}
            >
              {links.map((el, index) => (
                <Link key={index} to={`/${el}`} style={{ padding: "10px" }}>
                  {el}
                </Link>
              ))}
            </Grid>
          </Grid>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
