var count = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
    nextImage();
},4000)

function nextImage(){
    count++;
    if (count>4){
        count = 1;
        
    }
    document.getElementById("radio" +count).checked = true;
}

var user =  sessionStorage.NOME_USUARIO;
console.log(user)
if(user != undefined){
    usuario.innerHTML = `Bem Vindo(a), ${user}`;
}