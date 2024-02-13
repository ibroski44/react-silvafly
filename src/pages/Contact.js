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
      <Box position={"relative"} fontFamily={"montserrat"}>
        <Typography
          width={"100%"}
          height={"563px"}
          sx={{ backgroundColor: "blue" }}
        ></Typography>

        <Typography
          variant="h2"
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

      <Box
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"center"}
        backgroundColor={"rgba(128, 128, 128, 0.316)"}
        paddingTop={"100px"}
        paddingBottom={"100px"}
      >
        <Box pl={"100px"}>
          <Grid container spacing={5}>
            <Grid item lg={4} md={6}>
              <Card
                sx={{
                  width: 345,
                  height: "250px",
                  borderRadius: "20px",
                }}
              >
                <CardContent>
                  <Grid
                    container
                    spacing={2}
                    justifyContent={"center"}
                    paddingTop={"20px"}
                  >
                    <Grid item>
                      <img
                        src="/images/phone-call.png"
                        alt="scan"
                        width={"40px"}
                        height={"40px"}
                      />
                    </Grid>
                  </Grid>
                  <Typography
                    marginBottom={"2px"}
                    paddingTop={"30px"}
                    textAlign={"center"}
                    fontWeight={"bold"}
                  >
                    Call Us
                  </Typography>
                  <Typography
                    marginBottom={"2px"}
                    paddingTop={"30px"}
                    textAlign={"center"}
                    fontWeight={"bold"}
                  >
                    +1(469)-605-1142
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item lg={4} md={6}>
              <Card
                sx={{
                  width: 345,
                  height: "250px",
                  borderRadius: "20px",
                }}
              >
                <CardContent>
                  <Grid
                    container
                    spacing={2}
                    justifyContent={"center"}
                    paddingTop={"20px"}
                  >
                    <Grid item>
                      <img
                        src="/images/message-logo.png"
                        alt="scan"
                        width={"40px"}
                        height={"40px"}
                      />
                    </Grid>
                  </Grid>
                  <Typography
                    marginBottom={"2px"}
                    paddingTop={"30px"}
                    textAlign={"center"}
                    fontWeight={"bold"}
                  >
                    Write Us
                  </Typography>
                  <Typography
                    marginBottom={"2px"}
                    paddingTop={"30px"}
                    textAlign={"center"}
                    fontWeight={"bold"}
                  >
                    silvaflyllc@gmail.com
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item lg={4} md={6}>
              <Card
                sx={{
                  width: 345,
                  height: "250px",
                  borderRadius: "20px",
                }}
              >
                <CardContent>
                  <Grid
                    container
                    spacing={2}
                    justifyContent={"center"}
                    paddingTop={"20px"}
                  >
                    <Grid item>
                      <img
                        src="/images/office-logo.jpg"
                        alt="scan"
                        width={"40px"}
                        height={"40px"}
                      />
                    </Grid>
                  </Grid>
                  <Typography
                    marginBottom={"2px"}
                    paddingTop={"30px"}
                    textAlign={"center"}
                    fontWeight={"bold"}
                  >
                    Main Office
                  </Typography>
                  <Typography
                    marginBottom={"2px"}
                    paddingTop={"30px"}
                    textAlign={"center"}
                    fontWeight={"bold"}
                  >
                    Hillsboro, USA
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item lg={4} md={6}>
              <Card
                sx={{
                  width: 345,

                  height: "200px",
                  paddingTop: "50px",
                  borderRadius: "20px",
                }}
              >
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    color="black"
                    component="div"
                    textAlign={"center"}
                  >
                    Like and follow us
                  </Typography>

                  <Box
                    display={"flex"}
                    flexDirection={"row"}
                    justifyContent={"center"}
                  >
                    <a href="https://www.instagram.com/silvaflybakery/">
                      <img
                        src="/images/instagram.png"
                        alt="instagram"
                        width={"60px"}
                        height={"60px"}
                      />
                    </a>

                    <Typography
                      variant="body2"
                      color="black"
                      pl={"10px"}
                      pt={"15px"}
                      fontWeight={"bold"}
                    >
                      @silvaflybakery
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item lg={4} md={6}>
              <Card
                sx={{
                  width: 345,
                  height: "250px",
                  borderRadius: "20px",
                }}
              >
                <CardContent>
                  <Typography
                    marginBottom={"2px"}
                    paddingTop={"2px"}
                    textAlign={"center"}
                    fontWeight={"bold"}
                  >
                    Scan to contact us on whatsapp
                  </Typography>
                  <Grid container spacing={2} justifyContent={"center"}>
                    <Grid item>
                      <img
                        src="/images/scan-me.png"
                        alt="scan"
                        width={"200px"}
                        height={"200px"}
                      />
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <footer
        style={{
          width: "100%",
          height: "563px",
          backgroundColor: "rgba(253, 131, 35, 1)",
        }}
      >
        <Box>
          <Typography
            textAlign={"center"}
            paddingTop={"30px"}
            variant="h5"
            color={"rgba(18, 39, 221, 1)"}
          >
            Currently, Agege Bread is available only on <br /> WEDNESDAYS
            AND SATURDAYS
          </Typography>
          <Typography textAlign={"center"} variant="h6" color={"white"}>
            Order a day prior latest 10pm PST
          </Typography>
          <Box
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"center"}
            color={"white"}
            fontFamily={"montserrat"}
            pt={"70px"}
            pb={"200px"}
          >
            <Box paddingRight={"100px"}>
              <Grid container spacing={2} alignItems="center">
                <Grid item>
                  <img
                    src="/images/message-logo.png"
                    alt="instagram"
                    width={"60px"}
                    height={"60px"}
                  />
                </Grid>
                <Grid item>
                  <Typography variant="h5" color="white">
                    silvaflyllc@gmail.com
                  </Typography>
                </Grid>
              </Grid>
            </Box>
            <Box>
              <Grid container spacing={2} alignItems="center">
                <Grid item>
                  <img
                    src="/images/phone-call.png"
                    alt="instagram"
                    width={"60px"}
                    height={"60px"}
                  />
                </Grid>
                <Grid item>
                  <Typography variant="h5" color="white">
                    +1(469)-605-1142
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <div style={{ backgroundColor: "white" }}>
            <Divider />
          </div>
          <Box
            display={"flex"}
            flexDirection={"row"}
            paddingTop={"20px"}
            color={"white"}
            fontFamily={"montserrat"}
          >
            <Grid container spacing={2} justifyContent={"center"}>
              <Typography
                variant="body2"
                color="white"
                paddingTop={"20px"}
                paddingRight={"300px"}
              >
                copyright© 2024 silvafly bakery
              </Typography>
              <Grid item>
                <a href="https://www.instagram.com/silvaflybakery/">
                  <img
                    src="/images/instagram2.jpg"
                    alt="instagram"
                    width={"30px"}
                    height={"30px"}
                  />
                </a>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </footer>
    </Box>
  );
};

export default Contact;
