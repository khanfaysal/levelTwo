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
// // mocking that means without api call explain promise
const makePromise = () => {
    return new Promise((resolve, reject) => {
        const data = true;
        if (data) {
            resolve(data);
        }
        else {
            reject('Failed to fetch data');
        }
    });
};
const getPromiseData = () => __awaiter(void 0, void 0, void 0, function* () {
    const resultPromise = yield makePromise();
    console.log('boolean data promise', resultPromise);
});
getPromiseData();
const makePromiseObj = () => {
    return new Promise((resolve, reject) => {
        const data = { name: 'faysal khan', age: 34 };
        if (data) {
            resolve(data);
        }
        else {
            reject('Failed to fetch data');
        }
    });
};
const getPromiseDataObj = () => __awaiter(void 0, void 0, void 0, function* () {
    const resultPromiseObj = yield makePromiseObj();
    console.log('object data practice', resultPromiseObj);
});
getPromiseDataObj();
const getTodo = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch('https://jsonplaceholder.typicode.com/todos/1');
    return yield response.json();
});
const getTodoDataObj = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield getTodo();
    console.log(result);
});
getTodoDataObj();
