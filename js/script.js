const Ingresartexto = document.getElementById('Ingresartexto');
const encriptar = document.getElementById('encriptar');
const desencriptar = document.getElementById('desencriptar');
const copiar = document.getElementById('copiar');
const mensajefinal = document.getElementById('mensajeFinal');``
const informacionDerecha = document.getElementById('informacionDerecha');
const toy = document.getElementById('toy');
const derecha = document.getElementById('derecha');




let reemplazar = [
    ["e", "enter"],
    ["o", "ober"],
    ["i", "imes"],
    ["a", "ai"],
    ["u", "ufat"],
]
const replace =(nuevoValor) =>{
    mensajefinal.innerHTML = nuevoValor;
    toy.classList.remove("oculto");
    Ingresartexto.value="";
    toy.style.display = "none";
    informacionDerecha.style.display = "none";
    copiar.style.display = "block";
    derecha.classList.add("ajustar");
    mensajefinal.classList.add("ajustar");


}
const reset= () => {
    mensajefinal.innerHTML = "";

    informacionDerecha.style.display = "block";
    toy.classList.remove("oculto");
    
    copiar.style.display = "none";
    derecha.classList.remove("ajustar");
    mensajefinal.classList.remove("ajustar");
    Ingresartexto.focus();

}






encriptar.addEventListener("click",() =>{
    const texto= Ingresartexto.value.toLowerCase();
    if(texto != ""){
        function encriptar(nuevoTexto){
            for(let i = 0; i < reemplazar.length; i++ ){
                if(nuevoTexto.includes(reemplazar[i][0])){
                    nuevoTexto = nuevoTexto.replaceAll(reemplazar[i][0],reemplazar[i][1])
                }
            }
            return nuevoTexto;

        }
    }    else{
        alert("Ingrese texto a encriptar");
        reset();
    }
    replace(encriptar(texto));
  

})



desencriptar.addEventListener("click",() =>{
    const texto= Ingresartexto.value.toLowerCase();
    if(texto != ""){
        function desencriptar(nuevoTexto){
            for(let i = 0; i < reemplazar.length; i++){
                if(nuevoTexto.includes(reemplazar[i][1])){
                    nuevoTexto = nuevoTexto.replaceAll(reemplazar[i][1], reemplazar[i][0]);
                }
                

            }
            return nuevoTexto;
        }   
    }else{
        alert("Ingrese texto a desencriptar");
        reset();
    }    
   replace(desencriptar(texto))   
})

copiar.addEventListener("click", () =>{

    let texto = mensajefinal;
    //navigator.clipboard.writeText(texto.value);
    texto.select();
    document.execCommand('copy');
    alert("Texto copiado");

  

    reset();



})





