import React, { Component } from 'react';
import './App.css';
import Nyhetslista from './components/Nyhetslista';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';

const firebaseApp = firebase.initializeApp(firebaseConfig);

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
    const {
      user,
      signOut,
      signInWithGoogle,
    } = this.props;

    return (
     <div className="App">
      <header className="App-header">
       <div>
        {
       
          user 
            ? <p>Hello, {user.displayName}</p>
            : <p>Please sign in.</p>
        }
        {
          user
            ? <button onClick={signOut}>Sign out</button>
            : <button onClick={signInWithGoogle}>Sign in with Google</button>
        }
        </div>
     

     
     <h1 className="h1">Läs de senaste nöjesnyheterna här</h1>
     </header>

     
     


      <Nyhetslista
        minaArtiklar={this.state.articles} />

</div>
    );
  }
}

const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);


