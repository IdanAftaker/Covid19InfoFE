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
        background: '#1a1a1a',
        height: '10rem',
        bottom: 0,
    },
    icon: {
        fontSize: 35,
        padding: 10,
        color: "white",
    },
    text: {
        fontSize: 20,
        fontFamily: "KohinoorBangla-Light",
        color: "white",
    },
    links: {
        fontSize: 50,
        color: "white",
        backgroundColor: '#1a1a1a',
        justifyContent:"center",
        paddingLeft: 90,
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
                        <TableCell className={classes.links}>
                            <a href='https://www.facebook.com/idan.aftaker'>
                                <FontAwesomeIcon className={classes.icon} icon={faFacebookF} />
                            </a>
                            <a href="https://www.linkedin.com/in/idanaftaker/">
                                <FontAwesomeIcon className={classes.icon} icon={faLinkedinIn} />
                            </a>
                            <a href="https://github.com/IdanAftaker">
                                <FontAwesomeIcon className={classes.icon} icon={faGithubAlt} />
                            </a>
                            <a href="mailto:idanaftaker@gmail.com">
                                <FontAwesomeIcon className={classes.icon} icon={faEnvelope} />
                            </a>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </Paper>
        </BottomNavigation>
    );
}
