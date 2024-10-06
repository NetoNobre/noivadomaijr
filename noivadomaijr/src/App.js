import React from 'react';

const CatalogoPresentes = () => {

  // Sua chave Pix
  const chavePix = '07709574556'; // Substitua pela sua chave Pix
  // Função para copiar a chave Pix para a área de transferência
  const copyToClipboard = () => {
    navigator.clipboard.writeText(chavePix)
      .then(() => {
        alert('Chave Pix copiada para a área de transferência!');
      })
      .catch(err => {
        console.error('Erro ao copiar: ', err);
      });
  };

  return (
    <div style={{ fontFamily: "'Playfair Display', serif", backgroundColor: '#f7e7e7', textAlign: 'center', padding: '20px' }}>
      <style>
        {`
          body::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url('data:image/svg+xml;charset=UTF-8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Cpath d="M10 30 C 40 5, 65 5, 95 30 S 80 70, 20 70 S 0 50, 10 30" fill="none" stroke="%23333" stroke-width="2" opacity="0.1"/%3E%3Cpath d="M30 20 C 60 10, 70 20, 40 40 S 10 40, 30 20" fill="none" stroke="%23333" stroke-width="2" opacity="0.1"/%3E%3C/svg%3E') repeat;
            z-index: 0;
          }

          h1 {
            font-size: 5.5em;
            color: #f2c22d;
            margin: 0;
          }

          .golden-details {
            font-size: 1.7em;
            color: #f2c22d;
            text-shadow: 2px 2px 5px rgb(0, 0, 0);
          }

          .gift-list {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            position: relative;
            z-index: 1;
          }

          .gift-item {
            background-color: #f2c22d;
            border: 1px solid #000000;
            border-radius: 10px;
            margin: 10px;
            padding: 15px;
            width: calc(20% - 20px); /* Responsivo em telas grandes */
            text-align: center;
            box-shadow: 0px 0px 10px rgba(78, 52, 52, 0.1);
            position: relative;
            z-index: 1;
            transition: transform 0.2s;
          }

          .gift-item:hover {
            transform: scale(1.05);
          }

          p {
            color: black;
            font-size: 1.3em;
            font-weight: bold;
          }

          .pix-copy {
            margin-top: 20px;
            text-align: center;
          }

          button {
            padding: 10px 20px;
            font-size: 1.2em;
            cursor: pointer;
            background-color: #f2c22d;
            border: none;
            border-radius: 5px;
            transition: background-color 0.3s;
          }

          button:hover {
            background-color: #e2b820; /* Cor mais escura no hover */
          }

          /* Media Queries para Responsividade */
          @media (max-width: 1200px) {
            .gift-item {
              width: calc(25% - 20px); /* Responsivo em telas médias */
            }
          }

          @media (max-width: 900px) {
            h1 {
              font-size: 4em; /* Reduzir tamanho do título em telas menores */
            }
            .gift-item {
              width: calc(33.33% - 20px); /* Responsivo em telas menores */
            }
          }

          @media (max-width: 600px) {
            h1 {
              font-size: 3em; /* Reduzir tamanho do título em telas menores */
            }
            p {
              font-size: 1.1em; /* Ajuste de texto */
            }
            .gift-item {
              width: calc(50% - 20px); /* Responsivo em smartphones */
            }
          }

          @media (max-width: 400px) {
            .gift-item {
              width: 100%; /* Responsivo em telas muito pequenas */
            }
          }
        `}
      </style>

      <h1>Junior e Maiane</h1>
      <p>Local: <span className="golden-details">Rua Vicente Celestino, Condominio Vila Imperial</span></p>
      <p>Hora: <span className="golden-details">15:00 <br /> Noivado e Chá de Casa Nova.</span></p>

      <h2>Lista de Presentes</h2>

      <h3>Eletrodomésticos</h3>
      <div className="gift-list">
        {['Air fryer', 'Aspirador de pó', 'Batedeira', 'Churrasqueira elétrica', 'Ferro de passar', 'Fogão cooktop elétrico', 'Geladeira', 'Grill', 'Micro-ondas', 'Pipoqueira', 'Processador de alimentos', 'Sanduicheira elétrica', 'Televisão', 'Ventilador'].map((item, index) => (
          <div key={index} className="gift-item">{item}</div>
        ))}
      </div>

      <h3>Itens para o Banheiro</h3>
      <div className="gift-list">
        {['Conjunto de acessórios', 'Conjunto de limpeza', 'Jogo de toalhas', 'Kit saboneteira', 'Lixeira para banheiro', 'Porta-escovas de dentes', 'Tapete para banheiro', 'Espelho'].map((item, index) => (
          <div key={index} className="gift-item">{item}</div>
        ))}
      </div>

      <h3>Acessórios de Cozinha e de Servir</h3>
      <div className="gift-list">
        {[  
          'Açucareiro', 'Afiador de facas', 'Aparelho de jantar', 'Assadeiras', 'Baldes de pipoca', 'Bandejas', 'Bowls (tigelas)', 
          'Colher de pau, Concha', 'Conjunto de copos', 'Conjunto de sousplat', 'Conjunto de talheres', 'Conjunto de taças',
          'Conjunto para sobremesas', 'Descanso para panelas', 'Escorredor de arroz ou macarrão', 'Escorredor de louça', 
          'Escumadeira, Espagueteira', 'Espremedor de alho', 'Faqueiro', 'Formas de pudim', 'Frigideiras antiaderentes', 
          'Fruteira', 'Fue', 'Garrafa térmica', 'Jogo americano', 'Jogo de panelas', 'Xícaras', 'Kit churrasco', 'Lixeira para cozinha'
        ].map((item, index) => (
          <div key={index} className="gift-item">{item}</div>
        ))}
      </div>

      <div className="pix-copy">
        <h2>Chave Pix</h2>
        <p>Caso queira cooperar com um Pix ao invés do presente, seremos gratos!</p>
        <button onClick={copyToClipboard}>Copiar Chave Pix</button>
        <p>Segunda opção de PIX: {chavePix}</p>
      </div>
    </div>
  );
};

export default CatalogoPresentes;
