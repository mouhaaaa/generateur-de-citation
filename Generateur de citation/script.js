let dernier = 0;
let nombreAleatoire;



let citations = [
  ["La vie est un mystère qu'il faut vivre, et non un problème à résoudre.", "Gandhi"],
  ["Le plus grand risque est de ne prendre aucun risque.", "Mark Zuckerberg"],
  ["Méritez votre statut de leader chaque jour.", "Mickael Jordan"],
  ["Soyez le changement que vous voulez voir dans le monde.", "Gandhi"],
  ["L'imagination est plus important que le savoir.", "Albert Einsein"],
  ["Un gagnant est un reveur qui n'abandonne jamais.", "Nelson Mandela"],
  ["Le succès c’est tomber sept fois, se relever huit.", "Proverbe japonais"],
  ["j'parle pas au cons sa les instruit .", "Michel Audiard"],
  ["Fait ta vie un reve, et d'un reve, une réalité.", "Antoine"],
  ["Vis s'implement pour que d'autres puissent simplement vivre.", "Gandhi"],
  ["c'est l'enfer des pauvres qui fait le paradis des riches.", "Victor Hugo"],
  ["L’action est la clé fondamentale de tout succès.", "Pablo Picasso"],
  ["Le succès, c’est se promener d’échecs en échecs tout en restant motivé.", "Winston Churchill"],
  ["Votre avenir est créé par ce que vous faîtes aujourd’hui, pas demain.", "Robert T. Kiyosaki"],
  ["A vaincre sans péril, on triomphe sans gloire .", "Pierre commeille"],
  ["Le souvenir est le parfum de l'ame.", "George Sand"],
  ["Les gagnants trouvent des moyens, les perdants des excuses…", "F. D. Roosevelt"],
  ["Un probléme sans solution est un probléme mal posé.", "Albert Einstein"],
  ["La beauté est dans les yeux de celui qui reguarde.", "Oscar Wide"]
];


let citation = document.getElementById('citation');

let auteur = document.getElementById('auteur');

function genererNombreEntier(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

nouveau.addEventListener('click', () => {
  do{
    nombreAleatoire = genererNombreEntier(citations.length);
  }while(nombreAleatoire == dernier);
  
  dernier = nombreAleatoire;
  
  citation.textContent = citations[nombreAleatoire][0];
  auteur.textContent = citations[nombreAleatoire][1];
});