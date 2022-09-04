"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json()); //middleware that turns req.body into json
const PORT = 3000;
app.get('/healthcheck', (_, res) => {
    console.log('Healthcheck hit');
    res.send('Alive');
});
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
