import React, { useState, useEffect } from 'react';
import Login from '../Login/Login';
import Chat from '../Chat/Chat';
import { VIEW_LOGIN_KEY, VIEW_CHAT_KEY } from '../../viewKeys';
import { getUsuarioLogado, setUsuarioLogado, deleteUsuarioLogado } from '../../utils/usuario';
import { findUsuarioById } from '../../resources/usuario';
import { withStyles } from '@material-ui/core/styles';
import loadingGIF from '../../assets/images/loading.gif';

const styles = () => ({
  containerLoading: {
    display: 'flex',
    height: '100vh',
    flexGrow: 1,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

/**
 * Componente principal do projeto que controla as views
 *
 * @author Bruno Eduardo
 * @param {Object} props - props
 * @returns Componente React "pai" do projeto
 */
const App = props => {
  const { classes } = props;

  const [view, setView] = useState(null);
  const [componentMounted, setComponentMounted] = useState(false);

  useEffect(() => {
    if (!componentMounted) setComponentMounted(true);

    const userLogged = getUsuarioLogado();
    if (userLogged) {
      findUsuarioById(userLogged.idUsuario)
        .then(res => {
          setUsuarioLogado(res.data);
          setView(VIEW_CHAT_KEY);
        })
        .catch(err => {
          deleteUsuarioLogado();
          setView(VIEW_LOGIN_KEY);
        });
    } else {
      setView(VIEW_LOGIN_KEY);
    }
  }, [componentMounted]);

  switch (view) {
    case VIEW_LOGIN_KEY:
      return <Login onChangeView={setView} />;

    case VIEW_CHAT_KEY:
      return <Chat onChangeView={setView} />;

    default:
      return (
        <div className={classes.containerLoading}>
          <img src={loadingGIF} alt='Loading...' />
        </div>
      );
  }
};

export default withStyles(styles)(App);
