"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
class Tester extends index_1.default {
    test() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = {
                url: "Hello World",
                injectName: "Inject-1",
            };
            console.log(data);
            yield this.onInjectable(data);
            console.log(data);
            // {url: "2", injectName: "Inject-1"}
        });
    }
}
const tester = new Tester();
const handleInject = (injectable) => __awaiter(void 0, void 0, void 0, function* () {
    if (injectable.injectName === "Inject-1") {
        injectable.url = "2";
    }
});
function test() {
    return __awaiter(this, void 0, void 0, function* () {
        tester.addInjectListener(handleInject);
        yield tester.test();
        // {url: "Hello World", injectName: "Inject-1"}
        // {url: "2", injectName: "Inject-1"}
        tester.removeInjectListener(handleInject);
        yield tester.test();
        // {url: "Hello World", injectName: "Inject-1"}
        // {url: "Hello World", injectName: "Inject-1"}
    });
}
test();
