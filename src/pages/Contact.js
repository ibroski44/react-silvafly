import React from "react";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Divider } from "@mui/material";

import { Box } from "@mui/material";

const Contact = () => {
  return (
    <Box>
      <Box position={"relative"}>
        <Typography
          width={"100%"}
          height={"625px"}
          sx={{ backgroundColor: "blue" }}
        ></Typography>

        <Typography
          variant="h3"
          textAlign={"center"}
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            fontWeight: "bolder",
            fontFamily: "montserrat",
          }}
        >
          CONTACT-US
        </Typography>
      </Box>

      <Grid>
        <Box
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"center"}
          backgroundColor={"rgba(128, 128, 128, 0.316)"}
          paddingTop={"100px"}
          paddingBottom={"100px"}
        >
          <Box>
            <Box marginTop={"41px"}>
              <Card sx={{ width: 345, height: "250px", mr: "50px" }}>
                <CardContent>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item>
                      <CardContent>
                        <img
                          src="/images/pc.png"
                          alt="scan"
                          width={"20px"}
                          height={"20px"}
                        />
                        <Typography gutterBottom variant="h5" component="div">
                          Call Us
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          +1(469)-605-1142
                        </Typography>
                      </CardContent>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Box>
          </Box>
          <Box marginTop={"41px"}>
            <Card sx={{ width: 345, height: "250px" }}>
              <CardContent>
                <Grid container spacing={2} alignItems="center">
                  <Grid item>
                    <CardContent>
                      <img
                        src="/images/em.png"
                        alt="scan"
                        width={"20px"}
                        height={"20px"}
                      />
                      <Typography gutterBottom variant="h5" component="div">
                        Write Us
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        silvaflyllc@gmail.com
                      </Typography>
                    </CardContent>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Box>
          <Box marginTop={"41px"}>
            <Card sx={{ width: 345, height: "250px", ml: "50px" }}>
              <CardContent>
                <Grid container spacing={2} alignItems="center">
                  <Grid item>
                    <img
                      src="/images/em.png"
                      alt="scan"
                      width={"20px"}
                      height={"20px"}
                    />
                    <Typography gutterBottom variant="h5" component="div">
                      Main Office
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Hillsboro, USA.
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Grid>
      <Grid>
        <Box
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"center"}
          backgroundColor={"rgba(128, 128, 128, 0.316)"}
          paddingBottom={"100px"}
        >
          <Box>
            <Box>
              <Card sx={{ width: 345, height: "250px", mr: "50px" }}>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    color="black"
                    component="div"
                  >
                    Like and follow us
                  </Typography>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item>
                      <img
                        src="/images/instagram.png"
                        alt="instagram"
                        width={"60px"}
                        height={"60px"}
                      />
                    </Grid>
                    <Grid item>
                      <Typography variant="body2" color="black">
                        @silvaflybakery
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Box>
          </Box>
          <Box>
            <Card sx={{ width: 345, height: "250px" }}>
              <CardContent>
                <Typography marginBottom={"2px"} paddingTop={"2px"}>
                  Scan to contact us on whatsapp
                </Typography>
                <Grid container spacing={2} alignItems="center">
                  <Grid item>
                    <img
                      src="/images/w.png"
                      alt="scan"
                      width={"200px"}
                      height={"200px"}
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Grid>
      <footer
        style={{
          width: "100%",
          height: "650px",
          backgroundColor: "rgba(253, 131, 35, 1)",
        }}
      >
        <Box>
          <Typography
            textAlign={"center"}
            paddingTop={"50px"}
            color={"rgba(18, 39, 221, 1)"}
          >
            Currently, Agege Bread is available only on <br /> WEDNESDAYS
            AND SATURDAYS
          </Typography>
          <Typography textAlign={"center"} color={"white"}>
            Order a day prior latest 10pm PST
          </Typography>
          <Box
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"center"}
            pt={"150px"}
            pb={"220px"}
          >
            <Box paddingRight={"100px"}>
              <Grid container spacing={2} alignItems="center">
                <Grid item>
                  <img
                    src="/images/em.png"
                    alt="instagram"
                    width={"60px"}
                    height={"60px"}
                  />
                </Grid>
                <Grid item>
                  <Typography variant="h5" color="black">
                    silvaflyllc@gmail.com
                  </Typography>
                </Grid>
              </Grid>
            </Box>
            <Box>
              <Grid container spacing={2} alignItems="center">
                <Grid item>
                  <img
                    src="/images/pc.png"
                    alt="instagram"
                    width={"60px"}
                    height={"60px"}
                  />
                </Grid>
                <Grid item>
                  <Typography variant="h5" color="black">
                    +1(469)-605-1142
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <div>
            <Divider />
          </div>
          <Box>
            <Grid
              container
              spacing={2}
              justifyContent={"center"}
              paddingTop={"20px"}
            >
              <Typography
                variant="body2"
                color="black"
                paddingTop={"20px"}
                paddingRight={"300px"}
              >
                copyright© 2024 silvafly bakery
              </Typography>
              <Grid item>
                <img
                  src="/images/instagram.png"
                  alt="instagram"
                  width={"40px"}
                  height={"40px"}
                />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </footer>
    </Box>
  );
};

export default Contact;
