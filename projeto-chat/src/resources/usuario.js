import { socket } from './serverConnection';
import events from './events';

const { USER_LOGGED_IN, ERROR, RESPONSE } = events;

/**
 * Cria um Usuário e faz login com ele
 *
 * @param {Object} usuario - Usuário que vai ser criado
 * @returns {Promise<void>} Uma Promise
 */
async function login(usuario) {
  return new Promise((resolve, reject) => {
    socket.on(RESPONSE, newUser => {
      localStorage.setItem('user_logged', JSON.stringify(newUser));
      resolve();
    });

    socket.on(ERROR, reject);

    socket.emit(USER_LOGGED_IN, usuario);
  });
}

export { login };
