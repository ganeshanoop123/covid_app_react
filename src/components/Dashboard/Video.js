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
    componentDidMount(){
        window.onload= function(){
            var x = document.getElementById("myVideo").play();
        }
    }

    render() {
        return (
            <div className="video">
                <video className="w-100" autoPlay={true} muted playsinline loop id="myVideo">
                    <source src="https://storage.cloudconvert.com/tasks/ce97f0b4-2663-4710-bdb2-c3222e947208/201211%2020_01_Covid%2020Vaccine_4k_011_preview.mp4?AWSAccessKeyId=cloudconvert-production&Expires=1623083660&Signature=sr5dyXjeRb8konDYvOpwVebykL4%3D&response-content-disposition=inline%3B%20filename%3D%22201211%2020_01_Covid%2020Vaccine_4k_011_preview.mp4%22&response-content-type=video%2Fmp4" type="video/mp4" />
                </video>
            </div>    
        );
    }
}
