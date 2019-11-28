import React, { useState } from 'react';
import Login from '../Login/Login';
import Chat from '../Chat/Chat';
import { VIEW_LOGIN_KEY, VIEW_CHAT_KEY } from '../../viewKeys';

/**
 * Componente principal do projeto que controla as views
 *
 * @author Bruno Eduardo
 * @param {Object} props - props
 * @returns Componente React "pai" do projeto
 */
const App = props => {
  const [view, setView] = useState(VIEW_LOGIN_KEY);

  let viewSelected;
  switch (view) {
    case VIEW_LOGIN_KEY:
      viewSelected = <Login onChangeView={setView} />;
      break;

    case VIEW_CHAT_KEY:
      viewSelected = <Chat onChangeView={setView} />;
      break;

    default:
      viewSelected = null;
  }

  return <>{viewSelected}</>;
};

export default App;
