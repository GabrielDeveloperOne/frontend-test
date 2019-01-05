 $(function(){

  /* Requisição JSON*/
  let fazendeirosJSON = "../fazenda.json";
      function onPerfilFazendeiros(data){

        /*Ordenando Json*/
        let ordenarFazendeiros = data.data;     
            ordenarFazendeiros.sort(function(a, b) {
          return a.negative - b.negative;
        });

        /* Adicionando fazendeiros */
        for(let piao = 0; piao < data.data.length; piao++){
              let nome = data.data[piao].name;
              let description = data.data[piao].description;
              let picture = data.data[piao].picture;

                    /* Calculo porcentagem positivo e negativo*/
              let positive = ((data.data[piao].positive / 100000000) * 100).toFixed(0);
              let negative = ((data.data[piao].negative / 100000000) * 100).toFixed(0);
              let numeroPosicao = piao + 1;
                  /* Removendo tooltips de Fazendeiros sem nota */
          if(data.data[piao].positive === null){
                let addFazendeiro = '<div class="fazendeiro">'
                + '<p class="nomeFazendeiro">' + nome + '</p>'
                + '<p class="contarPosicao">' + numeroPosicao + '</p>'
                + '<img class="fotoFazendeiro" src="' + picture + '">' 
                + '</div>'
                $(".box").append(addFazendeiro);
            } else {
                /* inserindo Fazendeiros no Layout */
                let addFazendeiro = '<div class="fazendeiro">'
               
                + '<p class="nomeFazendeiro">' + nome + '</p>'
                + '<p class="contarPosicao">' + numeroPosicao + '</p>'
                + '<img class="fotoFazendeiro" src="' + picture + '">'
                
                + '<div class="tooltip">'
                + '<span class="opiniao">'
                + '<div class="gosta">'
                + '<span class="estiloGosta">GOSTAM</span>'
                + '<span class="gostaPorcento">' + positive + '%</span>'
                + '</div>'
                + '<div class="naoGosta">'
                + '<span class="estiloNaoGosta">NÃO GOSTAM</span>'
                + '<span class="NaoGostaPorcento">' + negative + '%</span>'
                + '</div>'
                + '</div>'
                + '</div>'  
              $(".box").append(addFazendeiro);
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
