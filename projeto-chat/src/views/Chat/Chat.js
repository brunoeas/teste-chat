import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import backgroundImage from '../../assets/images/background-image.png';
import Mensagem from '../../components/Mensagem/Mensagem';
import moment from 'moment';

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
    boxSizing: 'border-box',
    paddingBottom: 15
  },
  input: {
    width: '100%',
    height: 50,
    marginTop: 10,
    marginBottom: 5,
    backgroundColor: '#FFF',
    borderRadius: 10,
    paddingLeft: 5
  }
});

const dataMessages = [
  {
    usuario: { nmUsuario: 'Bruno Eduardo' },
    text: 'Pão com sardinha é muito bom!',
    dhEnvio: moment().format('YYYY-MM-DDTHH:mm:ssZZ')
  }
];

const Chat = props => {
  const { classes, onChangeView } = props;

  return (
    <div className={classes.root}>
      <div className={classes.containerMessages}>
        {dataMessages.map((msg, i) => (
          <Mensagem key={i} msg={msg} />
        ))}
      </div>

      <div className={classes.containerInput}>
        <InputBase
          className={classes.input}
          placeholder='Digite sua mensagem...'
          inputProps={{ 'aria-label': 'naked' }}
          multiline
          rowsMax='1'
        />
      </div>
    </div>
  );
};

export default withStyles(styles)(Chat);
