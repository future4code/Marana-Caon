import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import emily from './img/emily.jpg'
import caminho from './img/caminho.jpg'
import gato from './img/gato.jpg'
import amigos from './img/amigos.jpg'

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post
          nomeUsuario={'emily'}
          fotoUsuario={emily}
          fotoPost={caminho}
        />
        <Post
          nomeUsuario={'gato'}
          fotoUsuario={gato}
          fotoPost={amigos}
        />
      </div>
    );
  }
}

export default App;
