
const img = document.getElementById('img');
const resTexto = document.querySelector('.res-text');
img.style.display = 'none';
resTexto.style.display='none';

function pesquisaMusica(){
    event.preventDefault();
    
    const formPesquisa = document.getElementById('pesquisa');
    const resultadoPesquisa = document.getElementById('resultado');
    const listaResultado = resultadoPesquisa.querySelector('.lista-resultado');
    const URL_TO_FETCH = 'RetornaMusicas';
    var formData = new FormData(formPesquisa);


    fetch(URL_TO_FETCH, { method: 'post',body: formData 

    }).then( (response) => {
         return response.text();
    }).then((retorno) => {
          if (retorno.startsWith('Erro'))
               resultadoPesquisa.innerHTML = 'Erro ao pesquisar 🥶';
          else
               if(retorno.length<=0)
               {
                    resTexto.style.display='block';
                    resTexto.innerHTML = 'Nenhuma música encontrada 😶';
                    img.style.display = 'block';
                    img.src = 'not-found.svg';
                    listaResultado.innerHTML = '';
               }
          else
          {
               img.style.display = 'none';
               console.log(retorno);
               resTexto.innerHTML = `${(retorno.match(/item-musica/g) || []).length} Musicas encontradas 😁:`;
               resTexto.style.display='block';
               listaResultado.innerHTML = retorno;
          }
    }).catch((error) => {
         console.error(error);
    });       
    
}