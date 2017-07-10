/**
 * The API.
 *
 * For the moment, there are two types of methods:
 * - placeholders that return fake data and allow to test the frontend without a baackend
 * - methods starting with a '_' : they are the real method meant to be used when the backend is ready
 *
 * So when we are ready to connect to the backend, we simply need to rename all methods in the API folder, the
 * app will work exactly the same way.
 */
import message from './message'
import user from './user'
import emergence from './emergence'

export default {
  message,
  user,
  emergence,
}
