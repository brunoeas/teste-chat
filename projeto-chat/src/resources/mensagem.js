import { socket, URL_API } from './serverConnection';
import events from './events';
import axios from 'axios';
import { formatDate } from '../utils/functions';

const { NEW_USER, NEW_MESSAGE_RECEIVED, USER_LOGGED_OFF } = events;

/**
 * Resolve uma Promise a cada novo Usuário que logar
 *
 * @author Bruno Eduardo
 * @returns {Promise<Usuario>} Uma Promise com o Usuário que logou
 */
async function onNewUserLogIn() {
  return await new Promise((resolve, reject) => socket.on(NEW_USER, resolve));
}

/**
 * Resolve uma Promise a cada Usuário que deslogar
 *
 * @author Bruno Eduardo
 * @returns {Promise<Usuario>} Uma Promise com o Usuário que deslogou
 */
async function onUserLogOut() {
  return await new Promise((resolve, reject) => socket.on(USER_LOGGED_OFF, resolve));
}

/**
 * Resolve uma Promise a cada nova Mensagem
 *
 * @author Bruno Eduardo
 * @returns {Promise<Mensagem>} Uma Promise com a nova Mensagem
 */
async function onNewMessageReceived() {
  return await new Promise((resolve, reject) => socket.on(NEW_MESSAGE_RECEIVED, resolve));
}

/**
 * Envia uma nova Mensagem para o servidor
 *
 * @author Bruno Eduardo
 * @param {Mensagem} mensagem - Objeto Mensagem novo
 * @returns {Promise<Mensagem>} Uma Promise com os dados da Mensagem nova
 */
async function sendNewMessage(mensagem) {
  return await axios.post(`${URL_API}/message`, mensagem);
}

/**
 * Retorna as Mensagens enviadas depois da data passada por parâmetro
 *
 * @author Bruno Eduardo
 * @param {moment.MomentInput} date - Data para filtrar
 * @returns {Promise<Mensagem[]>} Uma Promise com as Mensagens filtradas
 */
async function findMessagesAfterDate(date) {
  return await axios.get(`${URL_API}/message/after-date/${formatDate(date)}`);
}

export { onNewUserLogIn, onNewMessageReceived, sendNewMessage, findMessagesAfterDate, onUserLogOut };
