import React from 'react';
import BottomNavigation from "@material-ui/core/BottomNavigation";
import {makeStyles} from "@material-ui/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

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
        fontFamily: "AppleSDGothicNeo-UltraLight",
        color: "white",
    },

});

export default function Footer() {
    const classes = useStyles();
    return (
        <BottomNavigation className={classes.root}>
            <table>
                <tr>
                    <p className={classes.text}>Designed & Developed by Idan Aftaker</p>
                </tr>
                <tr>
                    <FontAwesomeIcon className={classes.icon} icon={faFacebookF} />
                    <FontAwesomeIcon className={classes.icon} icon={faLinkedinIn} />
                    <FontAwesomeIcon className={classes.icon} icon={faGithubAlt} />
                    <FontAwesomeIcon className={classes.icon} icon={faEnvelope} />
                </tr>
            </table>
        </BottomNavigation>
    );
}
