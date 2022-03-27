import { faEye, faThumbsUp, faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { getMoreDetails } from "../../API/api";


interface IProp  {
    statistics: any;
    item:object;
}

interface ID {
    id:string;
}



const Details = ({id}:ID) => {
    const [detail, setDetail] = useState([]);

    const handleClick=()=>{
        setTimeout(()=>getMoreDetails(id, setDetail),200);  
        const elem = document.querySelector(`#${id}`);
        if (elem){
       const detail = elem.querySelector('.details') as HTMLElement;
       detail.className='hide';}
        console.log(elem)
    }



    return (
      <>
            <button className="details" onClick={handleClick}>...</button>
        {detail.map((item:IProp)=>(
            <>
                <p ><FontAwesomeIcon icon={faEye}  /> {item.statistics.viewCount}</p>
                <p ><FontAwesomeIcon icon={faThumbsUp} /> {item.statistics.likeCount}</p>
                <p ><FontAwesomeIcon icon={faComment} /> {item.statistics.commentCount}</p>
        </>
        ))}

        </>
    )
}


export default Details;