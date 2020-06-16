import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import minhaFoto from './imagens/marana-foto.jpg';
import logoUfpel from './imagens/ufpel-logo.png';
import logoLabenu from './imagens/labenu-logo.png';
import mailImg from './imagens/mail-img.png';
import enderecoImg from './imagens/endereco-img.png';
import CardPequeno from './components/CardPequeno/CardPequeno'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={minhaFoto} 
          nome="Marana Caon" 
          descricao="Oi, eu sou a Marana Caon. Sou formada em Cinema de Animação e atualmente estudo programação para web na Labenu. Adoro gatinhos e plantinhas!"
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={logoLabenu} 
          nome="Labenu" 
          descricao="Estudando programação para web." 
        />
        
        <CardGrande 
          imagem={logoUfpel} 
          nome="UFPEL" 
          descricao="Estudei cinema de animação." 
        />
      </div>

      <div className="page-section-container"> 
      <CardPequeno
        imagem={mailImg} 
        nome= "Email"
        descricao= "maranacaon@gmail.com"
      />

      <CardPequeno
        imagem={enderecoImg} 
        nome= "Endereço"
        descricao= "Rua Regina Viana, 789"
      />
    </div>
    
      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    
    </div>
  );
}

export default App;
