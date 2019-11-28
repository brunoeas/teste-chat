import { socket } from './serverConnection';
import events from './events';

const { NEW_USER, ERROR, RESPONSE } = events;

/**
 * Resolve uma Promise a cada novo Usuário que logar
 *
 * @returns {Promise<Usuario>} Uma Promise com o Usuário que logou
 */
async function onNewUserLogIn() {
  return new Promise((resolve, reject) => {
    socket.on(NEW_USER, resolve);
  });
}

export { onNewUserLogIn };
