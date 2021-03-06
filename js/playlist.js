
let proxy = "https://cors-anywhere.herokuapp.com/";
let url = proxy + 'https://api.deezer.com/genre';
            

let recuperoStorage = localStorage.getItem('playlist');
let playlist = JSON.parse(recuperoStorage);

let playlistwrapper = document.querySelector('.listadereproduccion')
let body = document.querySelector('.playlist-container')

if(recuperoStorage == null || recuperoStorage == '[]'){

    playlist =[]
    playlistwrapper.innerHTML += '<h3 class="no-playlist"> Actualmente no hay canciones en tu playlist </h3>'
    }
    
    else{    
    playlist.forEach(function(trackId){
        buscarYMostrar(trackId)
        }) 
    }

    function buscarYMostrar(trackId){

        var proxy = 'https://cors-anywhere.herokuapp.com/'
        var url = proxy + 'https://api.deezer.com/track/' + trackId;
    
        fetch(url)
         .then( function(response){
             return response.json();
        })
        .then(function(track){
            playlistwrapper.innerHTML += '<div class ="player-playlist"><iframe scrolling="no" frameborder="0" allowTransparency="true" src="https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=80%&height=63&color=25DFCF&layout=&size=medium&type=tracks&id=' + track.id + '&app_id=1" width="80%" height="63"></iframe></div>';
        })
           
    
        .catch(function(error){
            console.log(error);
        })
    }
    
var boton = document.querySelector('.boton')

boton.onclick = function(){
    let confirmar = confirm('¿Estas Seguro? Todas las canciones seran eliminadas de tu playlist')
    if(confirmar == true){
        localStorage.removeItem('playlist');
        document.location.reload(true);
    }
}
