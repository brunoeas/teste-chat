import React, { useEffect, useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import backgroundImage from '../../assets/images/background-image.png';
import Mensagem from '../../components/Mensagem/Mensagem';
import moment from 'moment';
import SendIcon from '@material-ui/icons/Send';
import IconButton from '@material-ui/core/IconButton';

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
    usuario: { nmUsuario: 'Bruno Eduardo' },
    text: 'Pão com sardinha é muito bom!',
    dhEnvio: moment().format('YYYY-MM-DDTHH:mm:ssZZ'),
    loggedUser: true
  },
  {
    usuario: { nmUsuario: 'Juliana Santos' },
    text: 'Não concordo!',
    dhEnvio: moment().format('YYYY-MM-DDTHH:mm:ssZZ'),
    loggedUser: false
  },
  {
    usuario: { nmUsuario: 'Bruno Eduardo' },
    text: 'Pão com sardinha é muito bom!',
    dhEnvio: moment().format('YYYY-MM-DDTHH:mm:ssZZ'),
    loggedUser: true
  },
  {
    usuario: { nmUsuario: 'Juliana Santos' },
    text: 'Não concordo!',
    dhEnvio: moment().format('YYYY-MM-DDTHH:mm:ssZZ'),
    loggedUser: false
  },
  {
    usuario: { nmUsuario: 'Bruno Eduardo' },
    text: 'Pão com sardinha é muito bom!',
    dhEnvio: moment().format('YYYY-MM-DDTHH:mm:ssZZ'),
    loggedUser: true
  },
  {
    usuario: { nmUsuario: 'Juliana Santos' },
    text: 'Não concordo!',
    dhEnvio: moment().format('YYYY-MM-DDTHH:mm:ssZZ'),
    loggedUser: false
  },
  {
    usuario: { nmUsuario: 'Bruno Eduardo' },
    text: 'Pão com sardinha é muito bom!',
    dhEnvio: moment().format('YYYY-MM-DDTHH:mm:ssZZ'),
    loggedUser: true
  },
  {
    usuario: { nmUsuario: 'Juliana Santos' },
    text: 'Não concordo!',
    dhEnvio: moment().format('YYYY-MM-DDTHH:mm:ssZZ'),
    loggedUser: false
  },
  {
    usuario: { nmUsuario: 'Bruno Eduardo' },
    text: 'Pão com sardinha é muito bom!',
    dhEnvio: moment().format('YYYY-MM-DDTHH:mm:ssZZ'),
    loggedUser: true
  },
  {
    usuario: { nmUsuario: 'Juliana Santos' },
    text: 'Não concordo!',
    dhEnvio: moment().format('YYYY-MM-DDTHH:mm:ssZZ'),
    loggedUser: false
  },
  {
    usuario: { nmUsuario: 'Bruno Eduardo' },
    text: 'Pão com sardinha é muito bom!',
    dhEnvio: moment().format('YYYY-MM-DDTHH:mm:ssZZ'),
    loggedUser: true
  },
  {
    usuario: { nmUsuario: 'Juliana Santos' },
    text: 'Não concordo!',
    dhEnvio: moment().format('YYYY-MM-DDTHH:mm:ssZZ'),
    loggedUser: false
  },
  {
    usuario: { nmUsuario: 'Bruno Eduardo' },
    text: 'Pão com sardinha é muito bom!',
    dhEnvio: moment().format('YYYY-MM-DDTHH:mm:ssZZ'),
    loggedUser: true
  },
  {
    usuario: { nmUsuario: 'Juliana Santos' },
    text: 'Não concordo!',
    dhEnvio: moment().format('YYYY-MM-DDTHH:mm:ssZZ'),
    loggedUser: false
  },
  {
    usuario: { nmUsuario: 'Bruno Eduardo' },
    text: 'Pão com sardinha é muito bom!',
    dhEnvio: moment().format('YYYY-MM-DDTHH:mm:ssZZ'),
    loggedUser: true
  },
  {
    usuario: { nmUsuario: 'Juliana Santos' },
    text: 'Não concordo!',
    dhEnvio: moment().format('YYYY-MM-DDTHH:mm:ssZZ'),
    loggedUser: false
  },
  {
    usuario: { nmUsuario: 'Bruno Eduardo' },
    text: 'Pão com sardinha é muito bom!',
    dhEnvio: moment().format('YYYY-MM-DDTHH:mm:ssZZ'),
    loggedUser: true
  },
  {
    usuario: { nmUsuario: 'Juliana Santos' },
    text: 'Não concordo!',
    dhEnvio: moment().format('YYYY-MM-DDTHH:mm:ssZZ'),
    loggedUser: false
  },
  {
    usuario: { nmUsuario: 'Bruno Eduardo' },
    text: 'Pão com sardinha é muito bom!',
    dhEnvio: moment().format('YYYY-MM-DDTHH:mm:ssZZ'),
    loggedUser: true
  },
  {
    usuario: { nmUsuario: 'Juliana Santos' },
    text: 'Não concordo!',
    dhEnvio: moment().format('YYYY-MM-DDTHH:mm:ssZZ'),
    loggedUser: false
  },
  {
    usuario: { nmUsuario: 'Bruno Eduardo' },
    text: 'Pão com sardinha é muito bom!',
    dhEnvio: moment().format('YYYY-MM-DDTHH:mm:ssZZ'),
    loggedUser: true
  },
  {
    usuario: { nmUsuario: 'Juliana Santos' },
    text: 'Não concordo!',
    dhEnvio: moment().format('YYYY-MM-DDTHH:mm:ssZZ'),
    loggedUser: false
  },
  {
    usuario: { nmUsuario: 'Bruno Eduardo' },
    text: 'Pão com sardinha é muito bom!',
    dhEnvio: moment().format('YYYY-MM-DDTHH:mm:ssZZ'),
    loggedUser: true
  },
  {
    usuario: { nmUsuario: 'Juliana Santos' },
    text: 'Não concordo!',
    dhEnvio: moment().format('YYYY-MM-DDTHH:mm:ssZZ'),
    loggedUser: false
  },
  {
    usuario: { nmUsuario: 'Bruno Eduardo' },
    text: 'Pão com sardinha é muito bom!',
    dhEnvio: moment().format('YYYY-MM-DDTHH:mm:ssZZ'),
    loggedUser: true
  },
  {
    usuario: { nmUsuario: 'Juliana Santos' },
    text: 'Não concordo!',
    dhEnvio: moment().format('YYYY-MM-DDTHH:mm:ssZZ'),
    loggedUser: false
  },
  {
    usuario: { nmUsuario: 'Bruno Eduardo' },
    text: 'Pão com sardinha é muito bom!',
    dhEnvio: moment().format('YYYY-MM-DDTHH:mm:ssZZ'),
    loggedUser: true
  },
  {
    usuario: { nmUsuario: 'Juliana Santos' },
    text: 'Não concordo!',
    dhEnvio: moment().format('YYYY-MM-DDTHH:mm:ssZZ'),
    loggedUser: false
  },
  {
    usuario: { nmUsuario: 'Bruno Eduardo' },
    text: 'Pão com sardinha é muito bom!',
    dhEnvio: moment().format('YYYY-MM-DDTHH:mm:ssZZ'),
    loggedUser: true
  },
  {
    usuario: { nmUsuario: 'Juliana Santos' },
    text: 'Não concordo!',
    dhEnvio: moment().format('YYYY-MM-DDTHH:mm:ssZZ'),
    loggedUser: false
  },
  {
    usuario: { nmUsuario: 'Bruno Eduardo' },
    text: 'Pão com sardinha é muito bom!',
    dhEnvio: moment().format('YYYY-MM-DDTHH:mm:ssZZ'),
    loggedUser: true
  },
  {
    usuario: { nmUsuario: 'Juliana Santos' },
    text: 'Não concordo!',
    dhEnvio: moment().format('YYYY-MM-DDTHH:mm:ssZZ'),
    loggedUser: false
  },
  {
    usuario: { nmUsuario: 'Bruno Eduardo' },
    text: 'Pão com sardinha é muito bom!',
    dhEnvio: moment().format('YYYY-MM-DDTHH:mm:ssZZ'),
    loggedUser: true
  },
  {
    usuario: { nmUsuario: 'Juliana Santos' },
    text: 'Não concordo!',
    dhEnvio: moment().format('YYYY-MM-DDTHH:mm:ssZZ'),
    loggedUser: false
  },
  {
    usuario: { nmUsuario: 'Bruno Eduardo' },
    text: 'Pão com sardinha é muito bom!',
    dhEnvio: moment().format('YYYY-MM-DDTHH:mm:ssZZ'),
    loggedUser: true
  },
  {
    usuario: { nmUsuario: 'Juliana Santos' },
    text: 'Não concordo!',
    dhEnvio: moment().format('YYYY-MM-DDTHH:mm:ssZZ'),
    loggedUser: false
  },
  {
    usuario: { nmUsuario: 'Bruno Eduardo' },
    text: 'Pão com sardinha é muito bom!',
    dhEnvio: moment().format('YYYY-MM-DDTHH:mm:ssZZ'),
    loggedUser: true
  },
  {
    usuario: { nmUsuario: 'Juliana Santos' },
    text: 'Não concordo!',
    dhEnvio: moment().format('YYYY-MM-DDTHH:mm:ssZZ'),
    loggedUser: false
  },
  {
    usuario: { nmUsuario: 'Bruno Eduardo' },
    text: 'Pão com sardinha é muito bom!',
    dhEnvio: moment().format('YYYY-MM-DDTHH:mm:ssZZ'),
    loggedUser: true
  },
  {
    usuario: { nmUsuario: 'Juliana Santos' },
    text: 'Não concordo!',
    dhEnvio: moment().format('YYYY-MM-DDTHH:mm:ssZZ'),
    loggedUser: false
  },
  {
    usuario: { nmUsuario: 'Bruno Eduardo' },
    text: 'Pão com sardinha é muito bom!',
    dhEnvio: moment().format('YYYY-MM-DDTHH:mm:ssZZ'),
    loggedUser: true
  },
  {
    usuario: { nmUsuario: 'Juliana Santos' },
    text: 'Não concordo!',
    dhEnvio: moment().format('YYYY-MM-DDTHH:mm:ssZZ'),
    loggedUser: false
  },
  {
    usuario: { nmUsuario: 'Bruno Eduardo' },
    text: 'Pão com sardinha é muito bom!',
    dhEnvio: moment().format('YYYY-MM-DDTHH:mm:ssZZ'),
    loggedUser: true
  },
  {
    usuario: { nmUsuario: 'Juliana Santos' },
    text: 'Não concordo!',
    dhEnvio: moment().format('YYYY-MM-DDTHH:mm:ssZZ'),
    loggedUser: false
  },
  {
    usuario: { nmUsuario: 'Bruno Eduardo' },
    text: 'Pão com sardinha é muito bom!',
    dhEnvio: moment().format('YYYY-MM-DDTHH:mm:ssZZ'),
    loggedUser: true
  },
  {
    usuario: { nmUsuario: 'Juliana Santos' },
    text: 'Não concordo!',
    dhEnvio: moment().format('YYYY-MM-DDTHH:mm:ssZZ'),
    loggedUser: false
  },
  {
    usuario: { nmUsuario: 'Bruno Eduardo' },
    text: 'Pão com sardinha é muito bom!',
    dhEnvio: moment().format('YYYY-MM-DDTHH:mm:ssZZ'),
    loggedUser: true
  },
  {
    usuario: { nmUsuario: 'Juliana Santos' },
    text: 'Não concordo!',
    dhEnvio: moment().format('YYYY-MM-DDTHH:mm:ssZZ'),
    loggedUser: false
  },
  {
    usuario: { nmUsuario: 'Bruno Eduardo' },
    text: 'Pão com sardinha é muito bom!',
    dhEnvio: moment().format('YYYY-MM-DDTHH:mm:ssZZ'),
    loggedUser: true
  },
  {
    usuario: { nmUsuario: 'Juliana Santos' },
    text: 'Não concordo!',
    dhEnvio: moment().format('YYYY-MM-DDTHH:mm:ssZZ'),
    loggedUser: false
  }
];

const Chat = props => {
  const { classes, onChangeView } = props;

  const [valueInput, setValueInput] = useState('');

  const inputIsValid = !!valueInput && !!valueInput.trim() && valueInput.trim().length >= 1;

  const idContainerScrollMessages = 'container-scroll-messages';
  useEffect(() => {
    const element = document.getElementById(idContainerScrollMessages);
    element && element.scrollTo(0, element.scrollHeight);
  });

  /**
   * Manipula o evento de mudança do Input
   *
   * @param {*} e - Change event
   */
  function handleChangeInput(e) {
    const value = e.target.value || '';
    setValueInput(value.trim());
  }

  /**
   * Manipula o evento ao pressionar uma tecla
   *
   * @param {*} e - Keydown event
   */
  function handleKeyDownInput(e) {
    if (e.keyCode === 13 && !e.shiftKey) {
      sendNewMessage();
      e.preventDefault();
      return false;
    }
    return true;
  }

  function sendNewMessage() {}

  return (
    <div className={classes.root}>
      <div className={classes.containerMessages}>
        <div id={idContainerScrollMessages} className={classes.containerScrollMessages}>
          {dataMessages.map((msg, i) => (
            <Mensagem key={i} msg={msg} />
          ))}
        </div>
      </div>

      <div className={classes.containerInput}>
        <form onSubmit={sendNewMessage} autoComplete='off'>
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

          <IconButton className={classes.iconSend} disabled={!inputIsValid} onClick={sendNewMessage}>
            <SendIcon color='inherit' fontSize='large' />
          </IconButton>
        </form>
      </div>
    </div>
  );
};

export default withStyles(styles)(Chat);
