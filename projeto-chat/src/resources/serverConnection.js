import socketIOClient from 'socket.io-client';

const URL_API = 'https://desolate-fortress-09590.herokuapp.com/';

const socket = socketIOClient(URL_API);

export { URL_API, socket };
