import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { VIEW_CHAT_KEY } from '../../viewKeys';

const styles = () => ({
  root: {
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0,0,0,0.7)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paper: {
    minWidth: '50vw',
    height: '60vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    width: '100%',
    marginTop: 15,
    marginBottom: 30
  },
  text: {
    fontSize: 18,
    textAlign: 'center'
  },
  containerButton: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end'
  },
  button: {
    width: 120,
    height: 35
  }
});

/**
 * Componente para login do Usuário
 *
 * @author Bruno Eduardo
 * @param {Object} props - props
 * @returns Componente React do login
 */
const Login = props => {
  const { classes, onChangeView } = props;

  const [nmUsuario, setNmUsuario] = useState('');

  const disableButton = !nmUsuario || nmUsuario.trim().length <= 3;

  /**
   * Componente de manipulação do evento onChange do Input
   *
   * @param {*} e - Change event
   */
  function handleChangeInput(e) {
    setNmUsuario(e.target.value);
  }

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={12}>
        <Grid container>
          <Grid item xs className={classes.text}>
            Digite um nome para fazer login...
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs />

          <Grid item xs={8}>
            <TextField
              className={classes.input}
              value={nmUsuario}
              onChange={handleChangeInput}
              label='Nome do usuário...'
            />

            <div className={classes.containerButton}>
              <Button
                color='primary'
                className={classes.button}
                onClick={() => onChangeView(VIEW_CHAT_KEY)}
                disabled={disableButton}
              >
                Login
              </Button>
            </div>
          </Grid>

          <Grid item xs />
        </Grid>
      </Paper>
    </div>
  );
};

export default withStyles(styles)(Login);
