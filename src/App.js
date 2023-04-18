import Banner from './Componentes/Banner/Banner'; //import do Banner

// Função que chama a aplicação App usando REACT
function App() {
  return (
    // Elementos criados com o REACT trazidos das funções importadas acima
    <div className="App">
      <Banner className="banner" />
    </div>
  );
}
// Exporta o app para execução e apresentação
export default App;
