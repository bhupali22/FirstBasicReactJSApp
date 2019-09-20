import React from 'react';
import ReactDOM from 'react-dom';

class Layout extends React.Component {
    constructor(){
        super();        //must as we extend React.Component so call must be made to its constructor.
        this.cons_item = "This is constructor.We must call super() first."
        this.state = {      //state is reserved keyword in react
            welcome : "Welcome to star world!"
        };      //Need to initialize in constructor
    }

    getText(){
        return "This is function";
    }

    changeMessage(){
        this.setState({         
            welcome : "Thank you for subscribing."
        })              //To change state of component we need to call setState method. This method accepts object which is new state of component.
    }

    render() {
        const var1 = "This is variable";
        return(
            <div>
                <h1>This is layout page</h1>

                <h2>{this.state.welcome}</h2>           {/* State is accessed here. State value is bind in render function*/}

                <button onClick ={() => this.changeMessage()} >Subscribe</button>      {/* onClick is a event on button which checks whether button is clicked or not. To this event we assign a handler(in {}) which is arrow function*/}
                <p>Variable says : {var1}</p>
                <p>Function says : {this.getText()}</p>
                <p>Constructor says : {this.cons_item}</p>
            </div>
        );
    }
}

export default Layout