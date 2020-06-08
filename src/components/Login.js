import React from "react";
import { Box, Typography, Grid, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  Container: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    border: "2px solid black",
    width: "100wv",
    zIndex: 1,
  },
  root: {    
      "& .MuiTextField-root":{
        margin: theme.spacing(1),
        width: '50%',
        color:"#fff",              
      }
      
  }
}));

const Login = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.Container}>
        <Grid container justify="center">
          <Typography variant="h5">Sign In</Typography>
            <br />
          <form className={classes.root}>
            <TextField label="User Name"/>
            <TextField label="Password"/>
          </form>
        </Grid>
      </Box>
    </>
  );
};

export default Login;
