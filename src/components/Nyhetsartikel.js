import React from 'react';

function Nyhetsartikel (props){
    return (
        <article>
               <img src={props.minArtikel.urlToImage} alt={props.minArtikel.title}/>  
      <h2>{props.minArtikel.title}</h2>
      <p>{props.minArtikel.description}</p>
      <a href={props.minArtikel.url}  target="">Läs mer</a>
        </article>
    );
    }


export default Nyhetsartikel;


//rad 6 "https://source.unsplash.com/random/75*25/?music"

//rad 9 <a href={item.url} target="">Full article</a>
//<a> Läs mer  {props.minArtikel.url}</a>   

