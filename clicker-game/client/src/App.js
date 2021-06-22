import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { Box, Container, Grid } from "@material-ui/core"
import './App.css';
import Header from "./components/Header";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Box className={classes.root}>
        <Grid classname="paper">
          <Header />
        </Grid> 
      </Box>
    </div>
  );
}

export default App;
