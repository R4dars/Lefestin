import React, { useState } from 'react';
import Receita from '../components/Receita';
//import BarraPesquisa from '../components/BarraPesquisa';
import './cardapio.css';
import Barranavigate from '../components/BarraNavigate';
import SearchBar from '../components/SearchBar';
import Footer from '../components/Footer';

const receitasOriginais = [
  {
    nome: 'Arroz de Carne',
    ingredientes: ['Arroz', 'Carne', 'Cebola', 'Alho', 'Tomate', 'Pimentão'],
    instrucoes: 'Cozinhe o arroz. Refogue carne, cebola, alho e tomate. Misture com o arroz e decore com pimentão.',
  },
  {
    nome: 'Bolo de Morango',
    ingredientes: ['Farinha', 'Açúcar', 'Morangos', 'Ovos', 'Leite'],
    instrucoes: 'Misture os ingredientes: farinha, açúcar, morangos, ovos e leite. Asse a 180°C por 40 minutos.',
  },
  {
    nome: 'Cuscuz Marroquino',
    ingredientes: ['Cuscuz', 'Água', 'Passas', 'Amêndoas', 'Hortelã', 'Azeite'],
    instrucoes: 'Hidrate o cuscuz com água fervente. Misture com passas, amêndoas, hortelã e regue com azeite.',
  },
  {
    nome: 'Dobradinha',
    ingredientes: ['Tripas', 'Feijão branco', 'Tomate', 'Cebola', 'Alho', 'Coentro'],
    instrucoes: 'Cozinhe as tripas e o feijão. Refogue tomate, cebola, alho e coentro. Misture tudo e cozinhe por mais tempo.',
  },
  {
    nome: 'Empadão de Frango',
    ingredientes: ['Massa folhada', 'Frango cozido', 'Milho', 'Ervilha', 'Creme de leite'],
    instrucoes: 'Forre uma forma com a massa folhada. Coloque frango cozido desfiado, milho, ervilha e creme de leite. Cubra com mais massa e asse até dourar.',
  },
  {
    nome: 'Feijoada',
    ingredientes: ['Feijão preto', 'Carne de porco', 'Linguiça', 'Bacon', 'Arroz', 'Couve'],
    instrucoes: 'Cozinhe o feijão com carne de porco, linguiça e bacon. Sirva com arroz e couve refogada.',
  },
  {
    nome: 'Guacamole',
    ingredientes: ['Abacate', 'Tomate', 'Cebola', 'Coentro', 'Limão', 'Sal'],
    instrucoes: 'Amasse o abacate. Misture com tomate, cebola, coentro, suco de limão e sal. Sirva com nachos.',
  },
  {
    nome: 'Hambúrguer de Quinoa',
    ingredientes: ['Quinoa cozida', 'Feijão preto', 'Cebola', 'Cominho', 'Alho', 'Pão de hambúrguer'],
    instrucoes: 'Misture quinoa cozida, feijão preto, cebola, cominho e alho. Modele em hambúrgueres e grelhe. Sirva no pão de hambúrguer.',
  },
  {
    nome: 'Iogurte com Frutas',
    ingredientes: ['Iogurte', 'Morangos', 'Banana', 'Granola', 'Mel'],
    instrucoes: 'Em uma tigela, coloque iogurte e adicione morangos e banana cortados. Polvilhe com granola e regue com mel.',
  },
  {
    nome: 'Jiló Grelhado',
    ingredientes: ['Jiló', 'Azeite', 'Sal', 'Pimenta', 'Vinagre balsâmico'],
    instrucoes: 'Corte o jiló em rodelas e grelhe com azeite, sal e pimenta. Regue com vinagre balsâmico antes de servir.',
  },
  {
    nome: 'Kibe Assado',
    ingredientes: ['Trigo para kibe', 'Carne moída', 'Cebola', 'Hortelã', 'Pimenta síria'],
    instrucoes: 'Hidrate o trigo para kibe. Misture com carne moída, cebola picada, hortelã e pimenta síria. Asse em forma untada.',
  },
  {
    nome: 'Lasanha de Berinjela',
    ingredientes: ['Berinjela', 'Molho de tomate', 'Queijo muçarela', 'Queijo parmesão', 'Molho branco'],
    instrucoes: 'Fatie a berinjela e monte camadas com molho de tomate, queijo muçarela, queijo parmesão e molho branco. Asse até dourar.',
  },
  {
    nome: 'Mousse de Maracujá',
    ingredientes: ['Maracujá', 'Leite condensado', 'Creme de leite', 'Gelatina', 'Água'],
    instrucoes: 'Bata o maracujá no liquidificador com leite condensado e creme de leite. Dissolva a gelatina em água e adicione à mistura. Leve à geladeira até firmar.',
  },
  {
    nome: 'Nhoque de Batata',
    ingredientes: ['Batata', 'Farinha de trigo', 'Ovo', 'Sal', 'Molho de tomate'],
    instrucoes: 'Cozinhe e amasse as batatas. Misture com farinha de trigo, ovo e sal. Modele os nhoques e cozinhe em água fervente. Sirva com molho de tomate.',
  },
  {
    nome: 'Omelete de Espinafre',
    ingredientes: ['Ovos', 'Espinafre', 'Queijo feta', 'Cebola', 'Alho'],
    instrucoes: 'Bata os ovos e misture com espinafre, queijo feta, cebola e alho. Cozinhe em uma frigideira até dourar.',
  },
  {
    nome: 'Paella',
    ingredientes: ['Arroz', 'Frango', 'Linguiça', 'Camarão', 'Pimentão', 'Açafrão'],
    instrucoes: 'Refogue frango, linguiça, camarão e pimentão. Adicione arroz e açafrão. Cozinhe até que o arroz esteja pronto.',
  },
  {
    nome: 'Quiche de Alho-poró',
    ingredientes: ['Massa para quiche', 'Alho-poró', 'Queijo gruyère', 'Ovos', 'Creme de leite'],
    instrucoes: 'Forre uma forma com massa para quiche. Refogue alho-poró e coloque sobre a massa. Cubra com queijo gruyère. Misture ovos e creme de leite e despeje sobre a mistura. Asse até dourar.',
  },
  {
    nome: 'Ratatouille',
    ingredientes: ['Abobrinha', 'Berinjela', 'Pimentão', 'Tomate', 'Cebola', 'Alho'],
    instrucoes: 'Corte os legumes em rodelas e monte em camadas em uma assadeira. Regue com azeite, alho picado e asse até que os legumes estejam macios.',
  },
  {
    nome: 'Sorvete de Baunilha',
    ingredientes: ['Leite', 'Creme de leite', 'Açúcar', 'Baunilha'],
    instrucoes: 'Misture leite, creme de leite, açúcar e essência de baunilha. Despeje na máquina de sorvete e siga as instruções do fabricante.',
  },
  {
    nome: 'Tiramisu',
    ingredientes: ['Café forte', 'Biscoitos champanhe', 'Queijo mascarpone', 'Açúcar', 'Cacau em pó'],
    instrucoes: 'Molhe os biscoitos no café. Faça camadas com biscoitos e creme de queijo mascarpone, alternando. Polvilhe com cacau em pó antes de servir.',
  },
  {
    nome: 'Udon com Frutos do Mar',
    ingredientes: ['Macarrão udon', 'Frutos do mar', 'Alga wakame', 'Caldo de peixe', 'Cebolinha'],
    instrucoes: 'Cozinhe o macarrão udon. Refogue frutos do mar e alga wakame. Adicione caldo de peixe e cebolinha.',
  },
  {
    nome: 'Vatapá',
    ingredientes: ['Pão', 'Camarões secos', 'Amendoim', 'Leite de coco', 'Dendê', 'Azeite de dendê'],
    instrucoes: 'Misture pão, camarões secos, amendoim e bata no liquidificador. Cozinhe com leite de coco, dendê e azeite de dendê até engrossar.',
  },
  {
    nome: 'Wrap de Frango',
    ingredientes: ['Tortilhas de trigo', 'Peito de frango', 'Alface', 'Tomate', 'Molho de iogurte'],
    instrucoes: 'Grelhe o peito de frango e corte em tiras. Monte os wraps com tortilhas, frango, alface, tomate e molho de iogurte.',
  },
  {
    nome: 'Xinxim de Galinha',
    ingredientes: ['Frango', 'Amendoim', 'Leite de coco', 'Pimentão', 'Cebola', 'Alho'],
    instrucoes: 'Cozinhe o frango com amendoim, leite de coco, pimentão, cebola e alho. Sirva com arroz branco.',
  },
  {
    nome: 'Yakissoba',
    ingredientes: ['Macarrão para yakissoba', 'Frango', 'Brócolis', 'Cenoura', 'Molho de soja'],
    instrucoes: 'Cozinhe o macarrão para yakissoba. Refogue frango, brócolis, cenoura e adicione molho de soja. Misture com o macarrão.',
  },
  {
    nome: 'Zabaione',
    ingredientes: ['Gemase de ovo', 'Açúcar', 'Vinho Marsala'],
    instrucoes: 'Bata gemas de ovo e açúcar. Adicione vinho Marsala e leve ao fogo baixo, mexendo até engrossar.',
  },
  {
    nome: 'Bolo de Chocolate',
    ingredientes: ['Farinha', 'Açúcar', 'Cacau em pó', 'Ovos', 'Leite'],
    instrucoes: 'Misture os ingredientes: farinha, açúcar, cacau em pó, ovos e leite. Asse a 180°C por 30 minutos.',
  },
  {
    nome: 'Salada Caesar',
    ingredientes: ['Alface', 'Frango grelhado', 'Queijo parmesão', 'Croutons', 'Molho Caesar'],
    instrucoes: 'Misture todos os ingredientes: alface, frango grelhado, queijo parmesão, croutons. Regue com o molho Caesar.',
  },
  {
    nome: 'Macarrão à Carbonara',
    ingredientes: ['Macarrão', 'Bacon', 'Queijo parmesão', 'Ovos', 'Pimenta preta'],
    instrucoes: 'Cozinhe o macarrão conforme as instruções da embalagem. Frite o bacon até ficar crocante. Misture o macarrão cozido, bacon, queijo parmesão, ovos e tempere com pimenta preta.',
  },
  {
    nome: 'Pizza Margherita',
    ingredientes: ['Massa de pizza', 'Molho de tomate', 'Queijo mozzarella', 'Tomate', 'Manjericão'],
    instrucoes: 'Estenda a massa de pizza. Espalhe o molho de tomate sobre a massa. Adicione queijo mozzarella, fatias de tomate e folhas de manjericão. Asse até dourar.',
  },
  {
    nome: 'Sopa de Abóbora',
    ingredientes: ['Abóbora', 'Cebola', 'Alho', 'Caldo de galinha', 'Creme de leite'],
    instrucoes: 'Cozinhe a abóbora até ficar macia. Refogue cebola e alho. Adicione a abóbora cozida, caldo de galinha e misture com creme de leite.',
  },
  {
    nome: 'Risoto de Cogumelos',
    ingredientes: ['Arroz arbóreo', 'Cogumelos', 'Cebola', 'Vinho branco', 'Caldo de legumes'],
    instrucoes: 'Refogue cebola. Adicione arroz arbóreo e vinho branco. Acrescente caldo de legumes aos poucos e misture com cogumelos.',
  },
  {
    nome: 'Pudim de Leite Condensado',
    ingredientes: ['Leite condensado', 'Leite', 'Ovos', 'Açúcar'],
    instrucoes: 'Misture leite condensado, leite e ovos. Faça uma calda de açúcar e despeje a mistura na forma. Asse em banho-maria até ficar firme.',
  },
  {
    nome: 'Frango ao Curry',
    ingredientes: ['Peito de frango', 'Cebola', 'Alho', 'Tomate', 'Leite de coco', 'Curry em pó'],
    instrucoes: 'Refogue cebola e alho. Adicione peito de frango, tomate e curry. Cozinhe com leite de coco.',
  },
  {
    nome: 'Tacos de Carne',
    ingredientes: ['Carne moída', 'Tortilhas de milho', 'Alface', 'Tomate', 'Queijo', 'Salsa'],
    instrucoes: 'Cozinhe a carne moída. Monte tacos com tortilhas de milho, alface, tomate, queijo e salsa.',
  },
  {
    nome: 'Sushi de Salmão',
    ingredientes: ['Arroz para sushi', 'Salmão fresco', 'Alga nori', 'Vinagre de arroz', 'Molho de soja'],
    instrucoes: 'Prepare o arroz para sushi. Coloque uma camada de arroz na alga nori. Adicione fatias de salmão. Enrole e corte em pedaços.',
  },
  {
    nome: 'Smoothie de Frutas Tropicais',
    ingredientes: ['Banana', 'Abacaxi', 'Manga', 'Iogurte', 'Mel', 'Gelo'],
    instrucoes: 'Misture banana, abacaxi, manga, iogurte e mel em um liquidificador. Adicione gelo e bata até ficar cremoso.',
  },
  {
    nome: 'Salada Caprese',
    ingredientes: ['Tomate', 'Mozzarella', 'Manjericão', 'Azeite de oliva', 'Vinagre balsâmico'],
    instrucoes: 'Corte tomate e mozzarella em fatias. Arrume em um prato com folhas de manjericão. Regue com azeite de oliva e vinagre balsâmico.',
  },
  {
    nome: 'Omelete de Queijo e Ervas',
    ingredientes: ['Ovos', 'Queijo cheddar', 'Salsinha', 'Sal', 'Pimenta'],
    instrucoes: 'Bata os ovos. Adicione queijo cheddar e salsinha picada. Tempere com sal e pimenta. Cozinhe em uma frigideira até dourar.',
  },
];

function Cardapio() {
  const [TermoPesquisa, setTermoPesquisa] = useState('');
  const [receitasFiltradas, setReceitasFiltradas] = useState(receitasOriginais);

  const handlePesquisa = (termo) => {
    setTermoPesquisa(termo);
    const termoLowerCase = termo.toLowerCase();
    const receitasFiltradas = receitasOriginais.filter((receita) =>
      receita.nome.toLowerCase().includes(termoLowerCase)
    );
    setReceitasFiltradas(receitasFiltradas);
  };

  return (
    <div className='Ctudo'>
      <Barranavigate/>
      <div className='header'>
        <h1>Receitas</h1>
        <SearchBar onPesquisa={handlePesquisa}/>
      </div>
      <div className="d-flex justify-content-center">
        {receitasFiltradas.map((receita, index) => (
          <Receita key={index} {...receita} />
        ))}
      </div>

      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      

        <Footer/>
    </div>
  );
}
//gambiarra no br hein kkkkk
export default Cardapio;
