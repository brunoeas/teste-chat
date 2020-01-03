import { URL_API } from './serverConnection';
import axios from 'axios';

/**
 * Cria um Usuário e faz login com ele
 *
 * @author Bruno Eduardo
 * @param {Usuario} usuario - Usuário que vai ser criado
 * @returns {Promise<Usuario>} Uma Promise com os dados novos do Usuário
 */
async function login(usuario) {
  return await axios.post(`${URL_API}/login`, usuario);
}

/**
 * Deleta e desloga o Usuário
 *
 * @author Bruno Eduardo
 * @param {Number} id - ID do Usuário
 * @returns {Promise<void>} - Uma Promise void
 */
async function logoff(id) {
  return await axios.delete(`${URL_API}/logoff/${id}`);
}

/**
 * Retorna um Usuário pelo ID
 *
 * @author Bruno Eduardo
 * @param {Number} id - ID do Usuário
 * @returns {Promise<Usuario>} Uma Promise com o Usuário
 */
async function findUsuarioById(id) {
  return await axios.get(`${URL_API}/usuario/${id}`);
}

export { login, findUsuarioById, logoff };
