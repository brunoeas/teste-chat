/**
 * Retorna o objeto do Usuário logado
 *
 * @author Bruno Eduardo
 * @returns Objeto do Usuário logado
 */
function getUserLogged() {
  return localStorage.getItem('user_logged') ? JSON.parse(localStorage.getItem('user_logged')) : null;
}

/**
 * Setta o Usuário logado no LocalStorage
 *
 * @param {Usuario} usuario - Usuário que fez o login
 */
function setUsuarioLogado(usuario) {
  localStorage.setItem('user_logged', JSON.stringify(usuario));
}

export { setUsuarioLogado, getUserLogged };
