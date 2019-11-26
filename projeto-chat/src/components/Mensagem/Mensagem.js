import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import moment from 'moment';

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

const Mensagem = props => {
  const { classes } = props;
  const { text, dhEnvio, usuario, loggedUser } = props.msg;
  const dhEnvioFormatado = moment(dhEnvio).format('DD/MM/YYYY HH:mm');

  const isFromLoggedUser = loggedUser; // TODO: futuramente fazer validação

  const dynamicStyles = {
    root: {
      justifyContent: isFromLoggedUser ? 'flex-end' : 'flex-start'
    },
    container: isFromLoggedUser
      ? { borderTopRightRadius: 0, backgroundColor: '#DCF8C6' }
      : { borderTopLeftRadius: 0, backgroundColor: '#FFF' }
  };

  return (
    <div className={classes.root} style={dynamicStyles.root}>
      <div className={classes.container} style={dynamicStyles.container}>
        {!isFromLoggedUser && <div className={classes.nomeUsuario}>{usuario.nmUsuario}</div>}

        <div>{text}</div>

        <div className={classes.textDataEnvio}>{dhEnvioFormatado}</div>
      </div>
    </div>
  );
};

export default withStyles(styles)(Mensagem);
