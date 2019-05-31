import React from 'react';

function Nyhetsartikel (props){  //här skapas komponenten Nhetsartikel som är den enskilda artikeln som visas i appen. 
    return (
        <div className="grid-container3">  
            <article>
               <img src={props.minArtikel.urlToImage} alt={props.minArtikel.title}
               className="img"/>  
                <h2 className="h2">{props.minArtikel.title}</h2>
                <p className="p">{props.minArtikel.description}</p>
                <a href={props.minArtikel.url}  target="_blank" className= "a:hover, a" >Läs mer</a>
                <div className="border"></div> 
            </article>
        </div>
    );
    }
export default Nyhetsartikel; // här exporteras nyhetsartikeln så den kan visas upp i browsern


//Rad 5 använder en grid för att placera och layouta innehållet som Nyhetsartikeln består av.
//Rad 7 hämtar in artikelns bild och bildtext (fråmn apit) till den enskilda artikeln samt rad 8 stylar den enl img i css-filen. 
//rad 9 hämtar in och stylar artikeln titel = rubrik h2 enl styling i css-filen
//rad 10 hämtar in innehållsbeskrivningen i artikeln och stylar den som p enl css-filen
//rad 11 hämtar in läs mer länk så du kan läsa den fulla artikeln i ett nytt webfönster.