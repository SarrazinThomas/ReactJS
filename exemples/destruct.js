// À l'ancienne
const firstName = this.props.firstName
const lastName = this.props.lastName
const onClick = this.props.onClick

// Avec une déstructuration basée sur les noms
const { firstName, lastName, onClick } = this.props

//Imaginons maintenant qu’on découpe un texte « prénom nom » en deux, et qu’on veuille affecter les parties à deux identifiants. Au lieu de faire :

// À l'ancienne
const names = fullName.split(' ')
const firstName = names[0]
const lastName = names[1]

//APRES

const [firstName, lastName] = fullName.split(' ')