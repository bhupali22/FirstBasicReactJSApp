import React from 'react';

export default class Movies extends React.Component {

    createShoutOut(e){      //value e is returned from the onChange event handler (value of input)
        const shout = e.target.value;
        this.props.parentShoutOut(shout);
    }

    render(){
        console.log(this.props.question)
        return(
            <div>
                <h2>Movies List(Class component)</h2>
                <h4>{this.props.question}</h4>
                <h4>Current ShoutOut in Movies class : {this.props.shoutOut}!!</h4>
                <input onChange = {this.createShoutOut.bind(this)}/>
            </div>
            
        );
    }
}