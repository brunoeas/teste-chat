import React, { useEffect, useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import backgroundImage from '../../assets/images/background-image.png';
import Mensagem from '../../components/Mensagem/Mensagem';
import moment from 'moment';
import SendIcon from '@material-ui/icons/Send';
import IconButton from '@material-ui/core/IconButton';
import { onNewUserLogIn, onNewMessageReceived, sendNewMessage } from '../../resources/mensagem';
import { getUserLogged } from '../../utils/usuario';

const styles = () => ({
  root: {
    width: '100vw',
    height: '100vh'
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
    height: 'calc(100vh - 70px)',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'contain',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    flexDirection: 'column',
    boxSizing: 'border-box'
  },
  containerScrollMessages: {
    maxHeight: 'calc(100vh - 70px)',
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
  }
});

const dataMessages = [
  {
    tpMensagem: 0,
    usuario: { idUsuario: 1, nmUsuario: 'Bruno Eduardo' },
    text: 'Pão com sardinha é muito bom!',
    dhEnvio: moment().format('YYYY-MM-DDTHH:mm:ssZZ')
  },
  {
    tpMensagem: 0,
    usuario: { idUsuario: 2, nmUsuario: 'Juliana Santos' },
    text: 'Não concordo!',
    dhEnvio: moment().format('YYYY-MM-DDTHH:mm:ssZZ')
  }
];

/**
 * Componente que representa o Chat
 *
 * @param {Object} props - props
 * @returns Componente React do Chat
 */
const Chat = props => {
  const { classes, onChangeView } = props; // TODO: implementar logoff

  const [valueInput, setValueInput] = useState('');
  const [mensagens, setMensagens] = useState(dataMessages || []);

  const inputIsValid = !!valueInput && !!valueInput.trim() && valueInput.trim().length >= 1;

  const idContainerScrollMessages = 'container-scroll-messages';
  useEffect(() => {
    const element = document.getElementById(idContainerScrollMessages);
    element && element.scrollTo(0, element.scrollHeight);
  });

  onNewUserLogIn().then(usuario => {
    const auxMensagens = [...mensagens];
    auxMensagens.push({ tpMensagem: 1, usuario });
    setMensagens(auxMensagens);
  });

  onNewMessageReceived().then(mensagem => {
    const auxMensagens = [...mensagens];
    console.log('new message received ', mensagem);
    auxMensagens.push({ tpMensagem: 0, ...mensagem });
    setMensagens(auxMensagens);
  });

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
    if (e.keyCode === 13 && !e.shiftKey && inputIsValid) {
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
    sendNewMessage({ dsText: valueInput.trim(), usuario: getUserLogged() }).then(() =>
      setValueInput('')
    );
  }

  return (
    <div className={classes.root}>
      <div className={classes.containerMessages}>
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
};

export default withStyles(styles)(Chat);
