import React, { useState } from "react";
import { faCalendarDays, faComment, faEye, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactCardFlip from 'react-card-flip';
import Details from "./Details";





const Card = ({ item }: { item: any }) => {

    const [isFlipped, setFlipped] = useState(false);

    const flipped = () => {
        setFlipped(!isFlipped)
    }

    const converDate = (date: string) => date.substring(0, 10);
    

    return (
        
        <ul className="items" id={item.id.videoId}>
            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">

                <li className="front item" key={item.id.videoId} >
                <p className="videoImage">  <a className="videoImage" target={'_blank'} rel='noreferrer' href={`https://www.youtube.com/watch?v=${item.id.videoId}`}> <img alt="" src={item.snippet.thumbnails.medium.url} /></a></p>

                    <p>  <a target={'_blank'} rel='noreferrer' href={`https://www.youtube.com/watch?v=${item.id.videoId}`}>{item.snippet.title}</a></p>
                    <p>{item.snippet.description}</p>
                    <button onClick={flipped}>More Information</button>
                </li>

                <li className="back item" key={item.id.videoId}>
                    <a target={'_blank'} rel='noreferrer' href={`https://www.youtube.com/c/${item.snippet.channelTitle}`}> {item.snippet.channelTitle}</a>
                    <p><FontAwesomeIcon icon={faCalendarDays} />{converDate(item.snippet.publishTime)}</p>
                    <Details id={item.id.videoId}/>
                    <button onClick={flipped}>Back</button>
                </li>
            </ReactCardFlip>
        </ul>
    );
};


export default Card;

