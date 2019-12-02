import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import moment from 'moment';
import { getUserLogged } from '../../utils/usuario';

const styles = () => ({
  root: {
    width: '100%',
    display: 'flex'
  },
  container: {
    padding: 10,
    paddingTop: 7,
    paddingBottom: 7,
    maxWidth: '65vw',
    minWidth: '5vw',
    backgroundColor: '#DCF8C6',
    borderRadius: 10,
    marginRight: 10,
    marginLeft: 10,
    marginTop: 5
  },
  textDataEnvio: {
    fontSize: '0.64rem',
    textAlign: 'right',
    color: 'rgba(0,0,0,0.5)',
    marginTop: 3
  },
  nomeUsuario: {
    fontSize: '0.71rem',
    color: '#075E54',
    textAlign: 'left',
    marginBottom: 5
  }
});

/**
 * Componente que representa a Mensagem
 * tpMensagem: 0 - mensagem de um Usuário; 1 - mensagem de login de um Usuário;
 *
 * @author Bruno Eduardo
 * @param {Object} props - props
 * @returns Componente React de Mensagem
 */
const Mensagem = props => {
  const { classes } = props;
  const { dsText, dhEnvio, usuario, tpMensagem } = props.mensagem;
  const dhEnvioFormatado = moment(dhEnvio).format('DD/MM/YYYY HH:mm');

  const isFromLoggedUser = usuario.idUsuario === getUserLogged().idUsuario;

  let justify;
  if (tpMensagem === 0) {
    justify = isFromLoggedUser ? 'flex-end' : 'flex-start';
  } else {
    justify = 'center';
  }

  let containerStyle;
  if (tpMensagem === 0) {
    containerStyle = isFromLoggedUser
      ? { borderTopRightRadius: 0, backgroundColor: '#DCF8C6' }
      : { borderTopLeftRadius: 0, backgroundColor: '#FFF' };
  } else {
    containerStyle = { backgroundColor: 'rgba(0,0,0,0.8)', color: '#FFF' };
  }

  const dynamicStyles = {
    root: {
      justifyContent: justify
    },
    container: containerStyle
  };

  return (
    <div className={classes.root} style={dynamicStyles.root}>
      <div className={classes.container} style={dynamicStyles.container}>
        {!isFromLoggedUser && tpMensagem === 0 && (
          <div className={classes.nomeUsuario}>{usuario.nmUsuario}</div>
        )}

        {tpMensagem === 0 ? <div>{dsText}</div> : `${usuario.nmUsuario} entrou no chat.`}

        {tpMensagem === 0 && <div className={classes.textDataEnvio}>{dhEnvioFormatado}</div>}
      </div>
    </div>
  );
};

export default withStyles(styles)(Mensagem);
