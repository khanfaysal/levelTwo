
// // mocking that means without api call explain promise
const makePromise = (): Promise<boolean> => {
    return new Promise<boolean>((resolve, reject) => {
        const data: boolean = true;
        if (data) {
            resolve(data);
        } else {
            reject('Failed to fetch data');
        }
    })
}

const getPromiseData = async (): Promise<void> => {
    const resultPromise = await makePromise();
    console.log('boolean data promise', resultPromise);

}
getPromiseData();
// const makePromiseResult = getPromiseData();
// console.log(makePromiseResult);


type promiseObjType = {
    name: string,
    age: number
}

const makePromiseObj = (): Promise<promiseObjType> => {
    return new Promise<promiseObjType>((resolve, reject) => {
        const data: promiseObjType = { name: 'faysal khan', age: 34 };
        if (data) {
            resolve(data);
        } else {
            reject('Failed to fetch data');
        }
    })
}

const getPromiseDataObj = async (): Promise<void> => {
    const resultPromiseObj = await makePromiseObj();
    console.log('object data practice', resultPromiseObj);

}

getPromiseDataObj();
// json placeholder api call by promise

interface ITodo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

const getTodo = async (): Promise<ITodo> => {

    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    return await response.json();

}

const getTodoDataObj = async (): Promise<void> => {
    const result = await getTodo();
    console.log(result);
}
getTodoDataObj();