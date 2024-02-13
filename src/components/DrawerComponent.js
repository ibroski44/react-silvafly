import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";
import DehazeRoundedIcon from "@mui/icons-material/DehazeRounded";
const DrawerComponent = ({ links }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Drawer
        PaperProps={{
          sx: { backgroundColor: "rgba(253, 131, 35, 1)" },
        }}
        open={open}
        onClose={() => setOpen(false)}
      >
        <list>
          {links.map((el, index) => (
            <Link to={`/${el}`} key={index}>
              <ListItemButton onClick={() => setOpen(false)} divider>
                <ListItemIcon>
                  <ListItemText
                    sx={{
                      color: "white",
                      backgroundColor: "blue",
                      width: "70px",
                      height: "40px",
                      textAlign: "center",
                      pt: "5px",
                      "&:hover": { backgroundColor: "orange" },
                    }}
                  >
                    {el}
                  </ListItemText>
                </ListItemIcon>
              </ListItemButton>
            </Link>
          ))}
        </list>
      </Drawer>
      <IconButton sx={{ marginLeft: "auto" }} onClick={() => setOpen(!open)}>
        <DehazeRoundedIcon />
      </IconButton>
    </>
  );
};

export default DrawerComponent;
