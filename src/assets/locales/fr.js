export default {
  models: {
    user: {
      firstName: 'Prénom',
      lastName: 'Nom de famille',
      email: 'Email',
      phone: 'Téléphone',
      address: 'Adresse',
      zipCode: 'Code postal',
      city: 'Ville',
      userName: `Nom d'utilisateur`,
      password: 'Mot de passe',
    }
  },
  components: {
    'chat': {
      label: 'Chat',
      firstMessage: `Bonjour, petit humain. Si tu souhaites discuter, envoie moi un message à l'aide du formulaire.`,
      form: {
        label: 'Parle ici:',
        button: 'Poster',
        name: 'Ton prénom',
        message: 'Ton message',
      },
    },
    'info': {
      'legalTerms': {
        label: 'Mentions légales',
      },
    },
    'level': {
      'level': 'Niveau',
    },
    user: {
      login: {
        label: 'Connexion',
        alreadyMember: 'Déja membre ?',
        button: 'Connexion',
      },
      account: {
        label: 'Mon Compte',
        button: 'Mettre à jour les données',
      },
      signup: {
        label: 'Inscription',
        notYetMember: 'Pas encore membre ?',
        button: 'Inscription',
      },
      logout: {
        label: 'Déconnexion',
        message: 'Vous êtes bien déconnecté. A bientôt !',
        button: 'Déconnexion',
        anotherAccount: 'Se connecter avec un autre compte',
      },
    },
  },
  links: {
    blogger: 'http://alphatestemergence.blogspot.fr/',
  },
  services: {
    api: {
      error: {
        title: 'Oups',
        message: `Une erreur s'est produite`,
      },
    },
  },

}
