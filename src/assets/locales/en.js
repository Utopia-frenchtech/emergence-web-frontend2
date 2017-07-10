export default {
  models: {
    user: {
      firstName: 'First name',
      lastName: 'Last name',
      email: 'Email',
      phone: 'Phone',
      address: 'Address',
      zipCode: 'Zip Code',
      city: 'City',
      userName: `Username`,
      password: 'Password',
    }
  },
  components: {
    'chat': {
      label: 'Chat',
      firstMessage: `Hello, little human. If you wish to discuss, use the form below.`,
      form: {
        label: 'Speak here:',
        button: 'Post',
        name: 'Your first name',
        message: 'Your message',
      },
    },
    'info': {
      'legalTerms': {
        label: 'Terms',
      },
    },
    'level': {
      'level': 'Level',
    },
    user: {
      login: {
        label: 'Login',
        alreadyMember: 'Already member ?',
        button: 'Login',
      },
      account: {
        label: 'My account',
        button: 'Update my data',
      },
      signup: {
        label: 'Signup',
        notYetMember: 'Not member yet?',
        button: 'Signup',
      },
      logout: {
        label: 'Logout',
        message: 'You are now logged out. See you soon!',
        button: 'Logout',
        anotherAccount: 'Login with another account',
      },
    },
    links: {
      blogger: 'http://emergencealpha.blogspot.fr/',
    },
    services: {
      api: {
        error: {
          title: 'Oops',
          message: `An error has occured`,
        },
      },
    },
  }

}
