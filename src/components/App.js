import React, { useEffect, useState } from "react";
import '../styles/App.css';

const App=()=>{
    const [renderBall,setRenderBall] = useState(false);
    const [posi,setPosi] = useState(0);
    const [ballPosition,setBallPosition] = useState({left:0,top:0});

const buttonClickHandler=()=>{
    setRenderBall(true);
};

function rightKeyPress(event){
    if(event.keyCode==39){
        setBallPosition({
            left:ballPosition.left+5,
        });
    }
}

useEffect(()=>{
    document.addEventListener("keydown", rightKeyPress);
    // cleanup function
    //and this will store in 1st use of useEffect and then when again useEffect is used then it will executed first
    return()=>{
        document.removeEventListener('keydown',rightKeyPress);
    }    
},[ballPosition]);

const renderBallOrButton=()=> {
     if (renderBall) {
         return <div className="ball" 
         style={{
             left: ballPosition.left + "px",
             top: ballPosition.top + "px",
             position: "absolute",
         }}></div>;
        //  style is object
     } else {
         return <button onClick={buttonClickHandler}>Click For One Ball</button>
     }
 };
 
    return <div className="playground">{renderBallOrButton()}</div>;
};

export default App;


 // if(event.keyCode==39){
        //         setBallPosition({
        //             left: ballPosition.left + 5,
        //             top: ballPosition.top, 
        //         });
            // case 40:
            //     setBallPosition({
            //         left: ballPosition.left,
            //         top: ballPosition.top+5,
            //     });
            //     break;
            // case 37:
            //     setBallPosition({
            //         left: ballPosition.left-5,
            //         top: ballPosition.top,
            //     });
            //     break;
            // case 38:
            //     setBallPosition({
            //         left: ballPosition.left,
            //         top: ballPosition.top-5,
            //     })
//if arrow key is pressed event should happen so attack keydowm event listner




// class App extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             renderBall: false,
//             posi : 0,
//             ballPosition: { left: "0px" }
//         };
//         this.renderChoice = this.renderBallOrButton.bind(this)
//         this.buttonClickHandler = this.buttonClickHandler.bind(this)
//     };

//     buttonClickHandler() {
   
//    }
//     renderBallOrButton() {
// 		if (this.state.renderBall) {
// 		    return <div className="ball" style={this.state.ballPosition}></div>
// 		} else {
// 		    return <button onClick={this.buttonClickHandler} >Click For One Ball</button>
// 		}
//     }

    // bind ArrowRight keydown event
//     componentDidMount() {
      
//     }

//     render() {
//         return (
//             <div className="playground">
//                 {this.renderBallOrButton()}
//             </div>
//         )
//     }
// }

