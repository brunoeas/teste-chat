import { socket } from './serverConnection';
import events from './events';

const { USER_LOGGED_IN, ERROR } = events;

/**
 * Cria um Usuário e faz login com ele
 *
 * @param {Object} usuario - Usuário que vai ser criado
 */
async function login(usuario, callback) {
  socket.on(USER_LOGGED_IN, newUser => {
    localStorage.setItem('user_logged', JSON.stringify(newUser));
    callback && callback();
  });

  socket.on(ERROR, console.error);

  socket.emit(USER_LOGGED_IN, usuario);
}

export { login };
