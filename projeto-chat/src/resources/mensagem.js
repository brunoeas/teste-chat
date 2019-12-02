import { socket } from './serverConnection';
import events from './events';

const { NEW_USER, NEW_MESSAGE_RECEIVED, NEW_MESSAGE_SENDED, ERROR, RESPONSE } = events;

/**
 * Resolve uma Promise a cada novo Usuário que logar
 *
 * @returns {Promise<Usuario>} Uma Promise com o Usuário que logou
 */
async function onNewUserLogIn() {
  return new Promise((resolve, reject) => socket.on(NEW_USER, resolve));
}

/**
 * Resolve uma Promise a cada nova Mensagem
 *
 * @returns {Promise<Mensagem>} Uma Promise com a nova Mensagem
 */
async function onNewMessageReceived() {
  return new Promise((resolve, reject) => {
    socket.on(ERROR, reject);
    socket.on(NEW_MESSAGE_RECEIVED, resolve);
  });
}

/**
 * Envia uma nova Mensagem para o servidor
 *
 * @param {Mensagem} mensagem - Objeto Mensagem novo
 * @returns {Promise<void>} Uma Promise void
 */
async function sendNewMessage(mensagem) {
  return new Promise((resolve, reject) => {
    socket.on(ERROR, reject);
    socket.emit(NEW_MESSAGE_SENDED, mensagem);
    resolve();
  });
}

export { onNewUserLogIn, onNewMessageReceived, sendNewMessage };
