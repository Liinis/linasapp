
import React from 'react';
import Nyhetsartikel from './Nyhetsartikel';

function Nyhetslista(props) {  //Funktionen Nyhetslista skapas som innehåller alla de unika nyhetsartiklar som visas i appen. Prop() är en uppsättning metoder eller som returnerar properties och värden av det valda elementet.

  return (<section>
      <div className="grid-container2">
 
    {props.minaArtiklar.map(
      function (item, index) {
        return <Nyhetsartikel
          minArtikel={item}
          key={`artikel${index}`}
        />
    })}
      </div>
  </section>);
}
 
export default Nyhetslista;

//rad 7 returnerar en sektion i browsern där nyhetsartiklarna visas i en grid som skapas på rad 8.
// rad 10-11 räknar upp artiklarna, map är en metod som kallar in den önskvärda funktionen som en array i en bestämd ordning.
//rad 12 och en funktion som läser in artiklarnas item och index kan returneras 
//rad 21 exporetrar Nyhetslistan så den kan visas i browsern