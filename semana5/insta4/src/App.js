import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import emily from './img/emily.jpg'
import caminho from './img/caminho.jpg'
import gato from './img/gato.jpg'
import amigos from './img/amigos.jpg'

class App extends React.Component {
  state = {
  Post: [
        {
          nomeUsuario: "paulinha",
          fotoUsuario: "https://picsum.photos/50/50",
          fotoPost: "https://picsum.photos/200/150"
        },
        {
          nomeUsuario: "emily",
          fotoUsuario: {emily},
          fotoPost: {caminho}
        },
        {
          nomeUsuario: "gato",
          fotoUsuario: {gato},
          fotoPost: {amigos}
        }
  ],
      valorInputNomeUsuario: "",
      valorInputFotoUsuario: "",
      valorInputPostUsuario: ""
  };

  adicionaPost= () => {
    
    const novoPost = {
      
      nomeUsuario: this.state.valorInputNomeUsuario,
      
      fotoUsuario: this.state.valorInputFotoUsuario,

      fotoPost: this.state.valorInputPostUsuario
    };

    const novoPosts = [...this.state.Post, novaPost];

    this.setState({ Posts: novoPessoas });
  };

  onChangeInputNomeUsuario = event => {
    
    this.setState({ valorInputNomeUsuario: event.target.value });
  };

  onChangeInputFotoUsuario = event => {
    
    this.setState({ valorInputFotoUsuario: event.target.value });
  };

  onChangeInputPostUsuario = event => {
    this.setState({ valorInputPostUsuario: event.target.value });
  };


  render() {

    const listaDePosts = this.state.Post.map(post => {
      return (
        <p>
          {post.nomeUsuario} - {post.fotoUsuario} - {post.fotoPost}
        </p>
      );
    });

    return (
      <div className={'app-container'}>
        <input
          
            value={this.state.valorInputNomeUsuario}
            onChange={this.onChangeInputNomeUsuario}
            placeholder={"Nome"}
          />
          <input
            value={this.state.valorInputFotoUsuario}
            onChange={this.onChangeInputFotoUsuario}
            placeholder={"Foto do usuário"}
          />
          <input
            value={this.state.valorInputPostUsuario}
            onChange={this.onChangeInputPostUsuario}
            placeholder={"Post"}
          />
          <button onClick={this.adicionaPost}>Adicionar</button>
      </div>
    );
  }
}

export default App;
