import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import img from '../assets/img/covid19.png';


export default class Summary extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            summary: {}
        };
    }

    componentDidMount = async () => {
        await fetch('http://localhost:8080/summary')
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
                            <div>
                                <h3>NewConfirmed</h3>
                                <p>{this.state.summary.NewConfirmed}</p>
                            </div>
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Share
                    </Button>
                    <Button size="small" color="primary">
                        Learn More
                    </Button>
                </CardActions>
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
