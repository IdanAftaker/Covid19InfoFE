import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import img from '../../assets/img/covid19.png';
import SummaryTable from "./SummaryTable";
import {BASE_URL} from '../Utils'


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
        if (this.state.isLoading) {
            return <p>Loading...</p>;
        }
        return (
            <Card>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="COVID-19 Info"
                        height="180"
                        image={img}
                        title="COVID-19 Info"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            <SummaryTable data={this.state.summary}/>
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Last Update {this.state.summary.date}
                        </Typography>
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
    }
};
