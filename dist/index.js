"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const server = app_1.app.listen(3000, '0.0.0.0', () => {
    const { port, address } = server.address();
    console.log('Server started running: ' + 'http://' + address + ':' + port);
});
//# sourceMappingURL=index.js.map