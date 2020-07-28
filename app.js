"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
let app = express_1.default();
app.get('/', (req, res) => {
    console.log('get /');
    res.json({
        txt: 'holle world',
    });
});
app.listen(80, () => {
    console.log('start in 80');
});
