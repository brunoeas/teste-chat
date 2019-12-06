/**
 * Retorna o objeto do Usuário logado
 *
 * @author Bruno Eduardo
 * @returns Objeto do Usuário logado
 */
function getUsuarioLogado() {
  return localStorage.getItem('user_logged') ? JSON.parse(localStorage.getItem('user_logged')) : null;
}

/**
 * Setta o Usuário logado no LocalStorage
 *
 * @author Bruno Eduardo
 * @param {Usuario} usuario - Usuário que fez o login
 */
function setUsuarioLogado(usuario) {
  localStorage.setItem('user_logged', JSON.stringify(usuario));
}

/**
 * Remove o objeto do Usuário logado do LocalStorage
 *
 * @author Bruno Eduardo
 */
function deleteUsuarioLogado() {
  localStorage.removeItem('user_logged');
}

export { setUsuarioLogado, getUsuarioLogado, deleteUsuarioLogado };
