import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/styles/makeStyles";
import Divider from "@material-ui/core/Divider";
import * as theme from "@material-ui/system";

export default function DetailsCard(data) {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardContent className={data.color}>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {data.title}
                </Typography>
                <Divider color='white'/>
                <Typography className={classes.pos} variant="h5" component="h4">
                    New {data.new}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    Total {data.total}
                </Typography>
            </CardContent>
        </Card>
    );
}


const useStyles = makeStyles({
    root: {
        minWidth: 275,
        backgroundColor: '#1a1a1a',
        color: 'white',
        fontFamily: "GillSans-Light",
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 20,
        color: 'white',
        fontFamily: "Futura",
    },
    pos: {
        marginBottom: 12,
        color: 'white',
        fontFamily: "GillSans-Light",
    },
});
