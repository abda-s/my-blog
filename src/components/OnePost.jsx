import React from "react";
import "../styls/one-post.css"
import TruncatedText from './TruncatedText';



export default function OnePost(props) {

    return (
        <div className="post-container">
            <img src="https://wallpaperbat.com/img/641219-react-js-wallpaper-top-free-react-js-background.jpg" />
            <div className="content">

                <h1>{props.title}</h1>
                <TruncatedText text={props.description} maxLength={50} />
                <div className="tags">
                    {props.tags.map((item, index) => {
                        return <span key={index} >{item}</span>
                    })}
                </div>
                <span className="date">{props.date}</span>

            </div>
        </div>
    )
}