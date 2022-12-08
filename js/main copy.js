// const jusOrange = {
//     id: 1,
//     nom: "Jus d'orange",
//     prix: 2.5,
//     img: "jusOrange.jpg"   
// };

// const cafe = {
//     id: 2,
//     nom: "Café",
//     prix: 3.1,
//     img: "cafe.jpeg"   
// };

// const eau = {
//     id: 3,
//     nom: "Eau minérale",
//     prix: 0.5,
//     img: "eau.jpg"   
// };

// const produits = [
//     jusOrange,
//     cafe,
//     eau,
//     jusOrange,
//     cafe,
//     eau,
//     jusOrange,
//     cafe,
//     eau,
//     jusOrange,
// ]

// for(let produit of produits){
//     afficherProduit(produit);
// }

// function afficherProduit(prod){
//     const sectionProduits = document.querySelector('#sectionProduits');
//     const article = document.createElement('article');
//     const h2 = document.createElement('h2');
//     h2.textContent = prod.nom;
//     article.appendChild(h2)
//     const p = document.createElement('p');
//     p.textContent = prod.prix + '€';
//     article.appendChild(p)
//     const img = document.createElement('img');
//     img.src = './image/' + prod.img;
//     article.appendChild(img);
//     const button = document.createElement('button')
//     button.textContent = "Voir détail";
//     article.appendChild(button);
//     sectionProduits.appendChild(article);
// }
