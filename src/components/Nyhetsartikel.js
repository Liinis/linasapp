import React from 'react';

function Nyhetsartikel (props){
    return (
        <article>
            <div className="grid-container3"> 

               <img src={props.minArtikel.urlToImage} alt={props.minArtikel.title}
               className="img"/>  
      <h2 className="h2">{props.minArtikel.title}</h2>
      <p className="p">{props.minArtikel.description}</p>
      
      <a href={props.minArtikel.url}  target="_blank" className= "a:hover, a" >Läs mer</a>
      <div className="border"></div> 
   
     </div>
        </article>
       
    );
    }


export default Nyhetsartikel;


//rad 6 "https://source.unsplash.com/random/75*25/?music"

//rad 9 <a href={item.url} target="">Full article</a>
//<a> Läs mer  {props.minArtikel.url}</a>   

