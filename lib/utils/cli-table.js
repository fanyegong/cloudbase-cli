"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cli_table3_1 = __importDefault(require("cli-table3"));
function printCliTable(head, data = [], options) {
    const table = new cli_table3_1.default(Object.assign({ head, style: { head: ['yellow'] }, colAligns: new Array(head.length).fill('center') }, options));
    data.forEach((item) => {
        table.push(item);
    });
    console.log(table.toString());
}
exports.printCliTable = printCliTable;