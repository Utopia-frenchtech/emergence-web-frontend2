/**
 * Requests related to the chatbot
 */
import Axios from './Axios'
import Socket from './Socket'
import faker from 'faker'

// we need the nul char to construct a message readable by the chatbot
const nul = '\x00'
export const message = {
  /**
   * Post a message to the REST API
   *
   * @param  {*} sender    [description]
   * @param  {*} content   [description]
   * @param  {*} createdAt [description]
   * @return {*}           [description]
   */
  post: ({ sender, content, createdAt }) => {
    return new Promise((resolve, reject) => {
      resolve(
        {
          sender: {
            id: '-1',
            name: 'Altaï',
            isBot: true,
          },
          content: faker.lorem.sentence(),
          createAt: (new Date()).toISOString(),
        }
        )
    })
  },
  /**
   * A proof of concept with sockets.
   *
   * Chatscript server works with socket, so in theory we can discuss with
   * it directly, without needing any intermediate server.
   *
   * |client| --- socket connection  ------------> |Chatscript server|
   *
   * We can then listen for an answer and close the request.
   *
   * @param  {*} sender    [description]
   * @param  {*} content   [description]
   * @param  {*} createdAt [description]
   * @return {*}           [description]
   */
  _post: ({ sender, content, createdAt }) => {
    const message = sender.id + nul + '' + nul + content // sender id, nul, bot name or nul, nul, message
    return Socket().then((socket) => new Promise((resolve, reject) => {
      socket.onmessage = function (evt) {
        // build a structured message from the chatbot answer
        const altaiResponse = {
          sender: {
            id: '-1',
            name: 'Altaï',
            isBot: true,
          },
          content: evt.data,
          createAt: (new Date()).toISOstring(),
        }
        resolve(altaiResponse)
      }
      // Web Socket is connected, send data using send()
      socket.send(message)
    }))
  },
  /**
   * A proof of concept with an intermediate server. If the socket communication, does not work,
   * we can work this way :
   *
   * |client| --- HTTP request --->  |REST API server| --- socket ---> |Chatscript server|
   *
   * client --- api.message.post -----------> chatbot server
   * @param  {*} sender    [description]
   * @param  {*} content   [description]
   * @param  {*} createdAt [description]
   * @return {*}           [description]
   */
  _HTTPpost: ({ sender, content, createdAt }) => {
    return Axios.post('/message', message)
    .then((res) => {
      // TODO : this should already be done by the API, so we won't need this post-process block
      return {
        sender: {
          id: '-1',
          name: 'Altaï',
          isBot: true,
        },
        content: res.data,
        createdAt: (new Date()).toISOString(),
      }
    })
  },
  /**
   * Get the previous exchanges.
   *
   * Chatscript does not provide a RESTFul API, so we need to rely on an intermediate
   * server that stores messages to a DB.
   *
   * @param  {number} page    The page, STARTING FROM 1
   * @param  {number} perPage The number of item we want per page
   * @return {*}         An array of messages
   */
  // get the previous messages
  _get: ({ page, perPage }) => (
    Axios.get('/messages', {
      page,
      perPage,
    })
  )
}

export default message
