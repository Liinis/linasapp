
import React from 'react';
import Nyhetsartikel from './Nyhetsartikel';

function Nyhetslista(props) {
  return (<section>
      <div className="grid-container">
      <h1 className="h1">Här kan du läsa de senaste nöjesnyheterna från Sverige</h1>
  </div>
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