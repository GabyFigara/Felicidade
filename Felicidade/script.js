function mudarCor() {
    const corAleatoria = '#' + Math.floor(Math.random()*16777215).toString(16); //gera um número aleatório entre 0 e FFFFFF
    document.body.style.backgroundColor = corAleatoria;
  
    const titulo = document.getElementById('titulo');
   
  }
  