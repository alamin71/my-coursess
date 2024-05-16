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
            <div>
                <h1 className="text-center text-4xl mt-5">Course Registration</h1>
            </div>
            <div className="grid grid-cols-3 gap-5 mt-5 pl-3 px-3 text-justify">
            {
                cards.map(card=><Card key={card.id} card={card}></Card>)
            }
        </div>
        </div>
    );
};

export default Cards;