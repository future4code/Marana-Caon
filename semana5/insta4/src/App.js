import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import emily from './img/emily.jpg'
import caminho from './img/caminho.jpg'
import gato from './img/gato.jpg'
import amigos from './img/amigos.jpg'

class App extends React.Component {
  state = {
  post: [
        {
          nomeUsuario: "paulinha",
          fotoUsuario: "https://picsum.photos/50/50",
          fotoPost: "https://picsum.photos/200/150",
        }
        {
          nomeUsuario: "emily",
          fotoUsuario: "emily",
          fotoPost: "caminho",
        }
        {
          nomeUsuario: "gato",
          fotoUsuario: "gato",
          fotoPost: "amigos",
        }
  ]
  }

  render() {
    return (
      <div className={'app-container'}>
        
      </div>
    );
  }
}

export default App;
