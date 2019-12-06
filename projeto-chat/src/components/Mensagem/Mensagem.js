import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import moment from 'moment';
import { getUsuarioLogado } from '../../utils/usuario';

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
  const { dsText, dhEnviado, usuario, tpMensagem } = props.mensagem;

  let dynamicStyles = {};
  if (tpMensagem === 0) {
    dynamicStyles = {
      root: { justifyContent: isFromLoggedUser() ? 'flex-end' : 'flex-start' },
      container: isFromLoggedUser()
        ? { borderTopRightRadius: 0, backgroundColor: '#DCF8C6' }
        : { borderTopLeftRadius: 0, backgroundColor: '#FFF' }
    };
  } else {
    dynamicStyles = {
      root: { justifyContent: 'center' },
      container: { backgroundColor: 'rgba(0,0,0,0.8)', color: '#FFF' }
    };
  }

  const dhEnvioFormatado = moment(dhEnviado).format('DD/MM/YYYY HH:mm');

  return (
    <div className={classes.root} style={dynamicStyles.root}>
      <div className={classes.container} style={dynamicStyles.container}>
        {!isFromLoggedUser() && tpMensagem === 0 && (
          <div className={classes.nomeUsuario}>{usuario.nmUsuario}</div>
        )}

        <div>{dsText}</div>

        {tpMensagem === 0 && <div className={classes.textDataEnvio}>{dhEnvioFormatado}</div>}
      </div>
    </div>
  );

  /**
   * Valida se a mensagem é do Usuário logado
   *
   * @returns {Boolean} true - se a Mensagem for do Usuário logado; false - se não for do Usuário logado;
   */
  function isFromLoggedUser() {
    const userLogged = getUsuarioLogado();
    return usuario.idUsuario === userLogged.idUsuario;
  }
};

export default withStyles(styles)(Mensagem);
