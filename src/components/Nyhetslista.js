
import React from 'react';
import Nyhetsartikel from './Nyhetsartikel';

function Nyhetslista(props) {
  return (<section>
      <div>
      <h1 className="h1">Här kan du läsa de senaste nöjesnyheterna från Sverige</h1>
  </div>
    {props.minaArtiklar.map(
      function (item, index) {
        return <Nyhetsartikel
          minArtikel={item}
          key={`artikel${index}`}
        />
    })}
  </section>);
}
 
export default Nyhetslista;