import React from 'react';

// function Characters(){          //This is normal function
//     return <h1>Characters List</h1>
// }


// export const Characters = () => <h1>Characters List(Functional Component)</h1>      //This is arrow function

//this.props is not used in functional component

export const Characters = (props) => {
    console.log(props.question)
    return(
        <div>
            <h2>Characters List(Functional Component)</h2>
            <h4>{props.question}</h4>
        </div>
    );
}

// export default Characters