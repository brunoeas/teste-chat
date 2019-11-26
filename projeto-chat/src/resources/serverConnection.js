import socketIOClient from 'socket.io-client';

const URL_API = 'http://localhost:2210';

const socket = socketIOClient(URL_API);

export { URL_API, socket };
