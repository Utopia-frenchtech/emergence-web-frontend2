// @see http://marak.github.io/faker.js/
import faker from 'faker'
export default {
  message: (options) => ({
    content: faker.lorem.paragraph(),
    createdAt: (options && options.createdAt) || faker.date.past(),
    sender: {
      id: (options && options.id) || faker.random.uuid(),
      name: faker.name.firstName() + ' ' + faker.name.lastName()
    }
  })
}
