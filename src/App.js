import React, { Component } from 'react';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';
import './App.css';
import Nyhetslista from './components/Nyhetslista'

const firebaseApp = firebase.initializeApp(firebaseConfig); //Initializerar Firebase appen genom att använda konfigurera den

class App extends Component {   //en klass skapas som heter "App". Det är en komponent = befintlig grej från React, och består av element = det man ser på skärmen, som i den här appen de enskilda nyheterna som kommer att visas på sidan.
  constructor  (props) {      // en constructor gör att...
    super(props);               //super...props..
    this.state = {              //this.state läser in artiklarna som en string
      articles: []};            
  }


  componentDidMount() { //denna försäkrar att komponenten omedelbart körs/renderas el vad man ska säga, så fort browser öppnas eller refreshas. 
    fetch("https://newsapi.org/v2/top-headlines?country=se&category=entertainment&apiKey=1a5dd5650dad49f9ac2c821974147928")  //fetch hämtar in datat från denna apinyckel dvs alla nöjesnyheter
      .then(function (response) {
      // gör något med det som kom tillbaka
        if (response.status !== 200) {
          throw Error(`status: ${response.status}`);
        }   // om allt är ok visas nyheterna i appen

      return response.json()
    } ).then( jsondata => {
      //gör något med json-objektet
      this.setState({ articles: jsondata.articles })
    }).catch(error =>{  //om ngt går fel med att läsa in datat visas felmeddelande i browsern
      this.setState({
        articles: [{
          urlToImage: "fejk.jpg",
          title: "Något gick fel",
          description: `Något gick fel, ${error.message}`,
        }]
      });
    })
  }


    render() {          // Appen  renderas och resultatet är en App som består av en rubrik på rad 53 och signinknapp på 66.
      const {           //ger oss user , error och signIn och signOut metoder som properties.
        user,
        signOut,
        signInWithGoogle,
      } = this.props;

    return (
      <div>
        <header className="grid-container"> 
            <h1 className="h1">Här kan du läsa de senaste nöjesnyheterna</h1>
 
              <div>
                
                {                     
                  user  //Ändrar markup så den frågar användaren att sign in eller sign out:
                  ? <h2 className="h2center">Hello, {user.displayName}</h2>
                  : <h2 className="h2center">Please sign in</h2>
                }

                {
                  user
                  ? <button onClick={signOut}>Sign out</button>
                  : <button onClick={signInWithGoogle}>Sign in with Google</button>
                }
              </div>
  
          </header>

      <Nyhetslista    //  komponenten Nyhetslista importeras. Allt från Nyhetslista.js kommer att placeras här i App.
        minaArtiklar={this.state.articles} />

</div>
    );
  }
}
/*Sätt upp the providers("leverantören") vi vill supporta och få tillgång till  auth library (autentiseringsbibilioteket):*/
const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};


export default withFirebaseAuth({  //ger tillgång till the properties som ges av FirebaseAuth HOC i App komponenten.
  providers,                        
  firebaseAppAuth,
})(App);                          //exporterar appen så den kan användas och visas i browsern.



//rad 52 skapar en grid dvs en plats för att stoppa i rubriken som skapas på rad 53 samt loginönstret ligger i denna 



