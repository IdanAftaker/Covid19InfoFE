import React, {Component, Fragment} from "react";
import CountriesTable from "./CountriesTable";
import {BASE_URL} from '../Utils'
import CircularProgress from "@material-ui/core/CircularProgress";

export default class Body extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            countries: [],
        };
    }

    render() {
        if (this.state.isLoading) {
            return <CircularProgress />
        }
        return(
            <Fragment>
                <CountriesTable data={this.state.countries}/>
            </Fragment>
        );
    }

    componentDidMount = async () => {
        await fetch(BASE_URL + '/countries')
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        countries: [...result],
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
}

