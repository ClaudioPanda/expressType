"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const diaries_1 = __importDefault(require("./routes/diaries"));
const app = (0, express_1.default)();
app.use(express_1.default.json()); // Middleware que trasnforma la req.body a un json
const PORT = 5500;
app.get('/ping', (_req, res) => {
    console.log('Alguien tiro un ping :' + new Date().toLocaleDateString());
    res.send('pong');
});
app.use('/api/diaries', diaries_1.default);
app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`);
});
