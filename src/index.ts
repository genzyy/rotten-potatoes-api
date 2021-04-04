import { app } from './app';
import { AddressInfo } from 'net';

const server = app.listen(3000, '0.0.0.0', () => {
  const { port, address } = server.address() as AddressInfo;
  console.log('Server started running: ' + 'http://' + address + ':' + port);
});
