import afficherProduits from "../modules/function.js";

const requestURL = './data/datas.json';
const request = new Request(requestURL);

const response = await fetch(request);
const  produits = await response.json();

console.log(produits);

afficherProduits(produits);