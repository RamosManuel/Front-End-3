import React, {Component} from "react";
import data from '../data.json';

export default class Historias extends Component{
    render(){
        return(
            <>
            <h2 className="historia" >{data[this.props.contador].historia}  </h2>
            </>
        )
    }
}

