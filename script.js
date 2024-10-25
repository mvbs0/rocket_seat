function toggleMode(){
    const html=  document.documentElement

   // if(html.classList.contains('light')){
   // html.classList.remove('light')   
   // } else{
   //     html.classList.add('light')
   // }
    html.classList.toggle("light")
//pegar imagem
    const img = document.querySelector("#profile img")

//substituir imagem
    if(html.classList.contains("light")){
    //se tiver light, adicionar imagem
        img.setAttribute("src", "./assets/assets/avatar_naruto.png")
    } else{
    //se tiver sem light mode, mantyer imagem normal
        img.setAttribute("src", "./assets/assets/avatar_Gardenal.png ")
}   
}