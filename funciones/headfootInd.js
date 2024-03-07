let links = [
  { link: "/index.html", name: "Inicio",},
  { link: "paginas/entradas.html", name: "Entradas" },
  { link: "paginas/contacto.html", name: "Contacto" },
  { link: "paginas/juegomenu.html", name: "Actividades" },
];

let social = [
  "imagenes/png-jpg/logos/LogoYT.png",
  "imagenes/png-jpg/logos/LogoTwit.png",
  "imagenes/png-jpg/logos/LogoInsta.png",
];

function header() {
  //make head
  let title = document.title;
  let head = document.getElementById(title + "H");
  let div1 = document.createElement("div");
  div1.setAttribute("class", "topnav");
  head.appendChild(div1);
  //make img
  let div2 = document.createElement("img");
  div2.setAttribute("src", "imagenes/png-jpg/logo trans.png");
  div2.setAttribute("id", "mainlogo");
  div1.appendChild(div2);
  //make links
  for (let index = 0; index < links.length; index++) {
    let link = document.createElement("a");
    link.setAttribute("href", links[index].link);
    link.setAttribute("name", links[index].name);
    link.innerText = links[index].name;
    div1.appendChild(link);
    if (links[index].name == title) {
      link.setAttribute("class", "active");
      link.removeAttribute("href");
    }
  }
}

function footer() {
  //create foot
  let title = document.title;
  let foot = document.getElementById(title + "F");
  //make 1st hr
  let hr = document.createElement("hr");
  hr.setAttribute("id", "hfoot");
  foot.appendChild(hr);
  //make div
  let div1 = document.createElement("div");
  div1.setAttribute("class", "social");
  foot.appendChild(div1);
  //create p
  let p = document.createElement("p");
  p.innerText = "Pueden seguirnos en:";
  div1.appendChild(p);
  //create a's and imgs
  for (let j = 0; j < social.length; j++) {
    let a = document.createElement("a");
    a.setAttribute("href", "paginas/esbozo.html");
    let img = document.createElement("img");
    img.setAttribute("src", social[j]);
    img.setAttribute("class", "social");
    p.appendChild(a);
    a.appendChild(img);
  }
  //make 2nd hr
  let hr2 = document.createElement("hr");
  hr2.setAttribute("id", "hfoot");
  div1.appendChild(hr2);
  //make bottom img
  let imgb = document.createElement("img");
  imgb.setAttribute("src", "imagenes/ilustraciones/Pie.png");
  imgb.setAttribute("id", "sfoot");
  foot.appendChild(imgb);

  //page jump
  let divpj1 = document.createElement("div");
  foot.appendChild(divpj1);
  //make final hr
  let hr3 = document.createElement("hr");
  hr3.setAttribute("id", "hfoot");
  foot.appendChild(hr3);
  //page jump
  let divpj2 = document.createElement("div");
  foot.appendChild(divpj2);
  //make logos
  logo1 = document.createElement("img");
  logo1.setAttribute("src", "imagenes/logos/sanluis.png");
  logo1.setAttribute("class", "logo");
  foot.appendChild(logo1);
  logo2 = document.createElement("img");
  logo2.setAttribute("src", "imagenes/logos/cocacola.png");
  logo2.setAttribute("class", "logo");
  foot.appendChild(logo2);
}
