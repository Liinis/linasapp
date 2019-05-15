import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Nyhetslista from './components/Nyhetslista';
//import data from './data';

class App extends Component {
  constructor  (props) {
    super(props);
    this.state = {
      articles: []};
    
    

  }
  componentDidMount() { 
    fetch("https://newsapi.org/v2/top-headlines?country=se&category=entertainment&apiKey=1a5dd5650dad49f9ac2c821974147928")
      .then(function (response) {
      // gör något med det som kom tillbaka
        if (response.status !== 200) {
          throw Error(`status: ${response.status}`);
        }
      return response.json()
    } ).then( jsondata => {
      //gör något med json-objektet
      this.setState({ articles: jsondata.articles })
    }).catch(error =>{
      this.setState({
        articles: [{
          urlToImage: "fejk.jpg",
          title: "Något gick fel",
          description: `Något gick fel, ${error.message}`,
        }]
      });
    })
  }

  render() {
    return (
      <div className="App">
<header className="App-header">
<div className="grid-container">
     
     <h1 className="h1">Här kan du läsa de senaste nöjesnyheterna från Sverige</h1>
 </div>
     
     

 </header>
      <Nyhetslista
        minaArtiklar={this.state.articles} />

</div>
    );
  }
}

export default App;

/*
class App extends Component {
  constructor  (props) {
    super(props);
    this.state = {
      articles: [
        {
          urlToImage: "https://source.unsplash.com/random/75*25/?music",
      title:"Musiknyhet 1",
      description: "Beskrivning av musiknyheten",
        },
        {
        urlToImage: "https://source.unsplash.com/random/75*25/?music",
        title:"Musiknyhet 2",
        description: "Beskrivning av den andra musiknyheten",
          }]};

  }*/