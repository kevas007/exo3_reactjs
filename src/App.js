
function App() {
  let dateCourante = new Date();
  // let tempsJavaScript = dateCourante.getTime();

  return (
    <div className="App">
    <p>
      on est le : {dateCourante.toString()} 
    </p>
    </div>
  );
}

export default App;
