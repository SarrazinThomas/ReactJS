const listeEleve = [{'moyenne' : 10, firstName : 'Matthieu'}, {'moyenne' : 20, firstName : 'Maxime'}]

const afficheMoy = (tabPersonne) => {
    var moyenneClasse = 0 
    tabPersonne.forEach((eleve) => {
        moyenneClasse += eleve.moyenne
    });
    let moy = moyenneClasse/tabPersonne.length
    return moy
};

console.log(afficheMoy(listeEleve))