import React from 'react';
import BottomNavigation from "@material-ui/core/BottomNavigation";
import {makeStyles} from "@material-ui/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
    root: {
        background: "black",
        height: '7.5rem',
        bottom: 0,
    },
    icon: {
        fontSize: 25,
        padding: 10,
        color: "white",
    },
    text: {
        fontSize: 20,
        fontFamily: "GillSans-Light",
        color: "white",
    },

});

export default function Footer() {
    const classes = useStyles();
    return (
        <BottomNavigation className={classes.root}>
        <Paper>
            <Table className={classes.root}>
                <TableHead>
                    <TableRow key="0">
                        <TableCell className={classes.text}>Designed & Developed by Idan Aftaker</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow key="1">
                        <FontAwesomeIcon className={classes.icon} icon={faFacebookF} />
                        <FontAwesomeIcon className={classes.icon} icon={faLinkedinIn} />
                        <FontAwesomeIcon className={classes.icon} icon={faGithubAlt} />
                        <FontAwesomeIcon className={classes.icon} icon={faEnvelope} />

                    </TableRow>
                </TableBody>
            </Table>
        </Paper>
        </BottomNavigation>
    );
}
