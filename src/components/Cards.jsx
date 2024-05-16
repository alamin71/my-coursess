import { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";


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
            {
                cards.map(card=><Card key={card.id} card={card}></Card>)
            }
        </div>
    );
};

export default Cards;