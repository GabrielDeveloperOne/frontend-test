 $(function(){

  /* Requisição JSON*/
  let fazendeirosJSON = "../fazenda.json";
      function onPerfilFazendeiros(data){

        /*Ordenando Json*/
        let ordenarFazendeiros = data.data;     
            ordenarFazendeiros.sort(function(a, b) {
          return a.negative - b.negative;
        });
      
        for(let piao = 0; piao < data.data.length; piao++){

          if(data.data[piao].positive === null){
              $(data.data[piao]).remove();
            } else {
              let nome = data.data[piao].name;
              let description = data.data[piao].description;
              let picture = data.data[piao].picture;
                    /* Calculo porcentagem positivo e negativo*/
              let positive = ((data.data[piao].positive / 100000000) * 100).toFixed(2);
              let negative = ((data.data[piao].negative / 100000000) * 100).toFixed(2);
              console.log("O nome do fazendeiro é: " + nome);
              console.log("O nome do fazendeiro é: " + description);
              console.log("O nome do fazendeiro é: " + picture);
              console.log("O nome do fazendeiro é: " + positive + "%");
              console.log("O nome do fazendeiro é: " + negative + "%");
            }         
        }     
    }

      function erroFazenda(error){
        console.log("Erro" + error.statusText);
      }

    $.getJSON(fazendeirosJSON)
     .done(onPerfilFazendeiros)
     .fail(erroFazenda);
     
}); 
