import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import moment from 'moment';

const styles = () => ({
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end'
  },
  container: {
    padding: 10,
    paddingBottom: 7,
    maxWidth: '70vw',
    minWidth: '5vw',
    backgroundColor: '#DCF8C6',
    borderRadius: 10,
    borderTopRightRadius: 0,
    marginRight: 10
  },
  textDataEnvio: {
    fontSize: 9,
    textAlign: 'right',
    color: 'rgba(0,0,0,0.5)',
    marginTop: 3
  }
});

const Mensagem = props => {
  const { classes } = props;
  const { text, dhEnvio } = props.msg;
  const dhEnvioFormatado = moment(dhEnvio).format('DD-MM-YYYY HH:mm');

  const isFromLoggedUser = true; // TODO: futuramente fazer validação

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div>{text}</div>
        <div className={classes.textDataEnvio}>{dhEnvioFormatado}</div>
      </div>
    </div>
  );
};

export default withStyles(styles)(Mensagem);
