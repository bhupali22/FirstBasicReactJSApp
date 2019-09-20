import React from 'react';

export default class Movies extends React.Component {
    render(){
        console.log(this.props.question)
        return(
            <div>
                <h2>Movies List(Class component)</h2>
                <h4>{this.props.question}</h4>
            </div>
            
        );
    }
}