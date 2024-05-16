import { useEffect } from "react";
import { useState } from "react";


const Cards = () => {
    const [cards, setCards] = useState([])
    useEffect(()=>{
        fetch('coursedata.json')
        .then(res=> res.json())
        .then(data=>setCards(data))
    },[])
    console.log(cards)

    return (
        <div className="md:w-2/3">
            <h2>Cards:{cards.length}</h2>
        </div>
    );
};

export default Cards;