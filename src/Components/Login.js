import {
  Button,
  Card,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
const useStyles = makeStyles((theme) => ({
  mainContainer: {
    backgroundImage:
      "url(https://assets.oyoroomscdn.com/cmsMedia/b3c9905c-31d1-4349-8594-c07deae6b36d.jpg)",
    backgroundSize: "cover",
    width: "100%",
    height: "100vh",
    opacity: "1",
    margin: "0 auto",
  },
  oyoIcon: {
    fontSize: "2.7rem",
    fontWeight: "900",
    fontFamily: "Roboto",
    color: "#fff",
  },
  textItem: {
    padding: "90px 80px 0 220px",
  },
  root: {
    color: "red",
  },
}));

const login = (props) => {
  const classes = useStyles();
  const [login, setLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Grid container className={classes.mainContainer} direction="column">
      <Grid item>
        <Grid container alignItems="center" style={{ padding: "30px 80px" }}>
          <Grid item style={{ marginRight: "20px" }}>
            <Typography variant="h3" className={classes.oyoIcon}>
              OYO
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              style={{ color: "#fff", fontWeight: "500", letterSpacing: "1px" }}
            >
              Hotels and homes across 800 cities, 24+ countries
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container>
          <Grid item className={classes.textItem}>
            <Grid container direction="column" style={{ color: "#fff" }}>
              <Grid item>
                <Typography
                  style={{
                    fontSize: "48px",
                    fontWeight: "700",
                    lineHeight: "1.04",
                    margin: "0",
                    padding: "0 0 17px",
                    fontFamily: "Sans-serif",
                  }}
                >
                  There’s a smarter way <br />
                  to OYO around
                </Typography>
              </Grid>
              <Grid
                item
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  lineHeight: "1.56",
                  margin: "0",
                  fontFamily: "Sans-serif",
                  letterSpacing: "1px",
                }}
              >
                Sign up with your phone number and get exclusive access to
                discounts and <br /> savings on OYO stays and with our many
                travel partners.
              </Grid>
            </Grid>
          </Grid>
          <Grid item style={{ margin: "15px 10px 88px 0" }}>
            <Card style={{ width: "480px", height: "fit-content" }}>
              <Grid container direction="column">
                <Grid
                  item
                  style={{
                    backgroundImage: "linear-gradient(270deg,#d11450,#ee2a24)",
                    padding: "5px 20px",
                  }}
                >
                  <Typography
                    style={{
                      fontSize: "14px",
                      fontWeight: "700",
                      lineHeight: "2",
                      color: "#fff",
                      letterSpaing: "1px",
                    }}
                  >
                    Sign up & Get ₹500 OYO Money
                  </Typography>
                </Grid>
                <Grid item style={{ width: "100%", padding: "24px 32px" }}>
                  {login ? (
                    <Grid container direction="column" alignItems="flex-start">
                      <Grid item style={{ marginBottom: "20px" }}>
                        <Typography
                          style={{
                            fontSize: "32px",
                            fontWeight: "700",
                            lineHeight: "1.5",
                          }}
                        >
                          Login / Signup
                        </Typography>
                      </Grid>
                      <Grid item>
                        <TextField
                          type="text"
                          id="username"
                          label=" enter Username"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                        />
                      </Grid>
                      <Grid item>
                        <TextField
                          type="password"
                          id="password"
                          label="enter password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </Grid>
                      <Grid item style={{ marginTop: "20px" }}>
                        <Button
                          variant="contained"
                          disableElevation
                          style={{ padding: "7px 35px" }}
                        >
                          Signup
                        </Button>
                      </Grid>
                    </Grid>
                  ) : (
                    <Grid container direction="column" alignItems="flex-start">
                      <Grid item style={{ marginBottom: "20px" }}>
                        <Typography
                          style={{
                            fontSize: "32px",
                            fontWeight: "700",
                            lineHeight: "1.5",
                          }}
                        >
                          Login / Signup
                        </Typography>
                      </Grid>
                      <Grid item>
                        <TextField
                          type="text"
                          id="username"
                          label="set Username"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                        />
                      </Grid>
                      <Grid item>
                        <TextField
                          type="email"
                          id="email"
                          label=" set email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </Grid>
                      <Grid item>
                        <TextField
                          type="password"
                          id="password"
                          label=" set password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </Grid>
                      <Grid item style={{ marginTop: "20px" }}>
                        <Button
                          variant="contained"
                          disableElevation
                          style={{ padding: "7px 35px" }}
                        >
                          Signup
                        </Button>
                      </Grid>
                      <Grid item>
                        <Grid container alignItems="center">
                          <Grid item>
                            <Typography>Already have an account ?</Typography>
                          </Grid>
                          <Grid item>
                            <Button onClick={() => setLogin(true)}>
                              Login
                            </Button>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  )}
                </Grid>
                <Grid item style={{ paddingLeft: "30px" }}>
                  <Grid container direction="column">
                    <Grid item style={{ marginBottom: "15px" }}>
                      <Typography>Or Sign as</Typography>
                    </Grid>
                    <Grid item>
                      <Grid container alignItems="center">
                        <Grid
                          item
                          style={{
                            fontSize: "18px",
                            padding: "10px 20px 10px 0",
                          }}
                        >
                          <Grid container>
                            <Grid item>
                              <Typography>Travel Agent </Typography>
                            </Grid>
                            <Grid item>
                              <ArrowForwardIosIcon fontSize="small" />
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item>
                          <Divider style={{ height: "30px", width: "2px" }} />
                        </Grid>
                        <Grid
                          item
                          style={{
                            fontSize: "18px",
                            padding: "10px 0 10px 20px",
                          }}
                        >
                          <Grid container>
                            <Grid item>
                              <Typography>Corporate</Typography>
                            </Grid>
                            <Grid item>
                              <ArrowForwardIosIcon fontSize="small" />
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default login;
