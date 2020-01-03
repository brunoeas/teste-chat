import React, { useEffect, useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import backgroundImage from '../../assets/images/background-image.png';
import Mensagem from '../../components/Mensagem/Mensagem';
import SendIcon from '@material-ui/icons/Send';
import IconButton from '@material-ui/core/IconButton';
import { getUsuarioLogado, deleteUsuarioLogado } from '../../utils/usuario';
import ExitIcon from '@material-ui/icons/ExitToApp';
import { VIEW_LOGIN_KEY } from '../../viewKeys';
import { logoff } from '../../resources/usuario';
import { isMobile } from 'react-device-detect';
import {
  onNewUserLogIn,
  onNewMessageReceived,
  sendNewMessage,
  findMessagesAfterUserCreation,
  onUserLogOut
} from '../../resources/mensagem';

const styles = () => ({
  root: {
    width: '100vw',
    height: window.innerHeight,
    backgroundColor: '#363636'
  },
  containerInput: {
    height: 70,
    paddingLeft: 10,
    paddingRight: 10,
    boxSizing: 'border-box',
    width: '100%',
    backgroundColor: '#363636'
  },
  containerMessages: {
    height: `calc(${window.innerHeight}px - 70px)`,
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'contain',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    flexDirection: 'column',
    boxSizing: 'border-box'
  },
  containerScrollMessages: {
    maxHeight: `calc(${window.innerHeight}px - 70px)`,
    width: '100%',
    overflowY: 'auto',
    paddingBottom: 15,
    paddingTop: 10
  },
  input: {
    width: '100%',
    height: 50,
    marginTop: 10,
    marginBottom: 5,
    backgroundColor: '#FFF',
    borderRadius: 15,
    paddingLeft: 5
  },
  iconSend: {
    position: 'absolute',
    bottom: 2,
    right: 0,
    color: '#0C8484'
  },
  containerExitButton: {
    position: 'fixed',
    top: 15,
    right: 15,
    zIndex: 2,
    backgroundColor: '#ECE5DD',
    borderRadius: '50%',
    boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)'
  }
});

/**
 * Componente que representa o Chat
 *
 * @author Bruno Eduardo
 * @param {Object} props - props
 * @returns Componente React do Chat
 */
const Chat = props => {
  const { classes, onChangeView } = props;

  const [valueInput, setValueInput] = useState('');
  const [mensagens, setMensagens] = useState([]);
  const [componentMounted, setComponentMounted] = useState(false);

  const inputIsValid = !!valueInput && !!valueInput.trim() && valueInput.trim().length >= 1;

  useEffect(() => {
    if (!componentMounted) setComponentMounted(true);

    findMessagesAfterUserCreation(getUsuarioLogado().idUsuario)
      .then(res => {
        res.data.forEach(item => (item.tpMensagem = 0));
        setMensagens(res.data);

        moveScrollToBottom();
      })
      .catch(err => console.error('> Erro ao carregar mensagens\n', err));
  }, [componentMounted]);

  onNewUserLogIn()
    .then(usuario => {
      const auxMensagens = [...mensagens];
      auxMensagens.push({ tpMensagem: 1, usuario, dsText: `${usuario.nmUsuario} entrou no chat.` });
      setMensagens(auxMensagens);

      moveScrollToBottom();
    })
    .catch(err => console.error('> Erro ao carregar novo Usuário logado\n', err));

  onUserLogOut()
    .then(usuario => {
      const auxMensagens = [...mensagens];
      auxMensagens.push({ tpMensagem: 1, usuario, dsText: `${usuario.nmUsuario} saiu no chat.` });
      setMensagens(auxMensagens);

      moveScrollToBottom();
    })
    .catch(err => console.error('> Erro ao carregar Usuário deslogado\n', err));

  onNewMessageReceived()
    .then(mensagem => {
      const auxMensagens = [...mensagens];
      auxMensagens.push({ tpMensagem: 0, ...mensagem });
      setMensagens(auxMensagens);

      moveScrollToBottom();
    })
    .catch(err => console.error('> Erro ao carregar nova mensagem recebida\n', err));

  const idContainerScrollMessages = 'container-scroll-messages';

  return (
    <div className={classes.root}>
      <div className={classes.containerMessages}>
        <div className={classes.containerExitButton}>
          <IconButton onClick={logOff}>
            <ExitIcon color='inherit' fontSize='large' />
          </IconButton>
        </div>

        <div id={idContainerScrollMessages} className={classes.containerScrollMessages}>
          {mensagens.map((msg, i) => (
            <Mensagem key={i} mensagem={msg} />
          ))}
        </div>
      </div>

      <div className={classes.containerInput}>
        <form autoComplete='off'>
          <InputBase
            className={classes.input}
            placeholder='Digite sua mensagem...'
            multiline
            rowsMax='1'
            value={valueInput}
            onChange={handleChangeInput}
            onKeyDown={handleKeyDownInput}
            autoComplete='off'
            type='text'
            inputProps={{ 'aria-label': 'naked', autoComplete: 'off' }}
          />

          <IconButton className={classes.iconSend} disabled={!inputIsValid} onClick={sendMessage}>
            <SendIcon color='inherit' fontSize='large' />
          </IconButton>
        </form>
      </div>
    </div>
  );

  /**
   * Move o Scroll do chat para o final da tela
   */
  function moveScrollToBottom() {
    const element = document.getElementById(idContainerScrollMessages);
    element && element.scrollTo(0, element.scrollHeight);
  }

  /**
   * Manipula o evento de mudança do Input
   *
   * @param {*} e - Change event
   */
  function handleChangeInput(e) {
    const value = e.target.value || '';
    setValueInput(value);
  }

  /**
   * Manipula o evento ao pressionar uma tecla
   *
   * @param {*} e - Keydown event
   */
  function handleKeyDownInput(e) {
    if (e.keyCode === 13 && (!e.shiftKey || !isMobile) && inputIsValid) {
      sendMessage();
      e.preventDefault();
      return false;
    }
    return true;
  }

  /**
   * Envia uma nova Mensagem
   */
  function sendMessage() {
    sendNewMessage({ dsText: valueInput.trim(), usuario: getUsuarioLogado() });
    setValueInput('');
  }

  /**
   * Desloga o Usuário
   */
  function logOff() {
    /**
     * Remove os dados do LocalStorage e muda a tela para a de Login
     */
    function callback() {
      deleteUsuarioLogado();
      onChangeView(VIEW_LOGIN_KEY);
    }

    logoff(getUsuarioLogado().idUsuario)
      .then(callback)
      .catch(callback);
  }
};

export default withStyles(styles)(Chat);
