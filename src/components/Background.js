import React, { Component } from 'react';
import ParticlesBg from 'particles-bg'


export default class Background extends Component{
    render() {
        return (
            <ParticlesBg
                type="cobweb"
                num={300}
                bg={true} />
        );
    }
}
