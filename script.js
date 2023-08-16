function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  // se for verdadeiro faz essa construção de codigo*/
  //if(html.classList.contains('light')) {
  // html.classList.remove('light')
  //} /* se for falso faz essa construção de codgo */
  //else{
  //html.classList.add('light')
  //o codigo a cima pode ser subtituido html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img") 
  // subtituir a imagem
  if(html.classList.contains('light')) {
   // se estiver light mode, adicionar a imagem light
  img.setAttribute("src","./assets/avatar-light.png")
  } else {
    // se estiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
  }

}