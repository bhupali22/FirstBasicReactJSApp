import React from 'react';
import ReactDOM from 'react-dom';
import { Characters } from './characters/Characters'     //We need to use {} for importing functions defined using const
import Movies from './movies/Movies'


class Layout extends React.Component {
    constructor(){
        super();        //must as we extend React.Component so call must be made to its constructor.
        this.cons_item = "This is constructor.We must call super() first."
        this.state = {      //state is reserved keyword in react
            welcome : "Welcome to star world!",
            shoutOut : "No shoutout !"
        };      //Need to initialize in constructor
    }

    getText(){
        return "This is function";
    }

    createNewShoutOut(shoutOut){
        this.setState({
            shoutOut
        });
    }

    changeMessage(){
        //console.log(this);
        this.setState({     
            welcome : "Thank you for subscribing."
        });             //To change state of component we need to call setState method. This method accepts object which is new state of component.
    }

    render() {
        const var1 = "This is variable";
        const movieQuestion = "Have you seen movies?";
        const characterQuestion = "Who is your favourite character?";     //These are props
        return(
            <div>
                <h1>This is layout page</h1>

                <h2>{this.state.welcome}</h2>           {/* State is accessed here. State value is bind in render function*/}

                <button onClick ={() => this.changeMessage()} >Subscribe</button>

                {/*<button onClick ={this.changeMessage.bind(this)} >Subscribe</button> */}     {/* onClick is a event on button which checks whether button is clicked or not. To this event we assign a handler(in {}) which is arrow function*/}

                <h4>Newest shoutout in Layout class : {this.state.shoutOut}</h4>
                <p>Variable says : {var1}</p>
                <p>Function says : {this.getText()}</p>
                <p>Constructor says : {this.cons_item}</p>
                <Movies shoutOut = {this.state.shoutOut} parentShoutOut = {this.createNewShoutOut.bind(this)} question = {movieQuestion} />       {/* Props are passed as attribute of tag*/}
                <Characters question = {characterQuestion} />
            </div>
        );
    }
}

export default Layout