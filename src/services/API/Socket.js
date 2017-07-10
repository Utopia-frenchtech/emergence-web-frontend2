/**
 * A socket helper, based on WebSocket.
 *
 * This plays a similar role as Axios for HTTP, but for sockets : it establishes
 * the connection with the chat script server.
 *
 * However, the chatscript server does not seem to respond to requests...
 * @type {*}
 */
// Papa for testing :  ec2-52-32-99-159.us-west-2.compute.amazonaws.com
// Maman for prod : ec2-52-35-6-213.us-west-2.compute.amazonaws.com 52.35.6.213
const port = 1024
export const Socket = () => new Promise((resolve, reject) => {
  const socket = new window.WebSocket(`ws://53.35.6.213:${port}`)
  // called when the socket is ready to receive messages
  socket.onopen = () => {
    resolve(socket)
  }
  // connection error
  socket.onerror = (err) => {
    reject(err)
  }
})

export default Socket
