import React from "react";
import "./Dashboard.css"

export default class Video extends React.Component {
    constructor(props) {
        super(props);
        this._video = null;
        this._fullScreenActive = null;
        this._fullScreenIntervalSeconds = 5;
        this.state = {
            fullScreen: false,
            playing: false,
            showSettings: false,
            dur: "00:00:00",
            progress: "0"
        };
    }

    render() {
        return (
            <div className="video">
                <video className="w-100" autoPlay={true} muted loop id="myVideo">
                    <source src="./covid.mp4" type="video/mp4" />
                </video>
            </div>    
        );
    }
}
