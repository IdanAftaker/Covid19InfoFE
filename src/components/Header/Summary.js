import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import img from '../../assets/img/covid19.png';
import {BASE_URL} from '../Utils'
import DetailsCard from "./DetailsCard";
import GridList from "@material-ui/core/GridList";
import Grid from "@material-ui/core/Grid";


export default class Summary extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            summary: {}
        };
    }

    componentDidMount = async () => {
        await fetch(BASE_URL + '/summary')
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        summary: result,
                        isLoading: false,
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                });
    };

    render() {
        // if (this.state.isLoading) {
        //     return <CircularProgress color="secondary" />;
        // }
        return (
            <Card>
                <CardActionArea>
                    <CardMedia
                        // className={styles.media}
                        component="img"
                        alt="COVID-19 Info"
                        height="180"
                        image={img}
                        title="COVID-19 Info"
                    />
                    <CardContent>
                        <GridList cols={1} spacing={24}>
                            <Grid item xs={4}>
                                <DetailsCard title={"Confirmed Cases"} new={this.state.summary.NewConfirmed} total={this.state.summary.TotalConfirmed} color={"yellow"}/>
                            </Grid>
                            <Grid item xs={4}>
                                <DetailsCard title={"Deaths Cases"} new={this.state.summary.NewDeaths} total={this.state.summary.TotalDeaths} color={"red"}/>
                            </Grid>
                            <Grid item xs={4}>
                                <DetailsCard title={"Recovered Cases"} new={this.state.summary.NewRecovered} total={this.state.summary.TotalRecovered} color={"green"}/>
                            </Grid>
                        </GridList>
                    </CardContent>

                </CardActionArea>
            </Card >
        );
    }


}
const styles = {
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9,
        marginTop: '30',
        size: 103213
    },
    gridList: {
        maxWidth: '100%',
        height: 450,
    },
};
