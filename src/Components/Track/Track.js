import React from "react";

import './Track.css';

class Track extends React.Component{

    renderAction(){
        if (this.props.isRemoval){
            return <button className="Track-action">-</button>
        } else {
            return <button className="Track-action">+</button>
        }
    }
    render(){
        return(
            <div className="Track">
                <div className="Track-information">
                    <h3> tracknamehere</h3>
                    <p>trackartisthere - trackalbumhere</p>
                </div>
                <button className="Track-action"> + or - </button>
            </div>
        )
    }
}

export default Track;