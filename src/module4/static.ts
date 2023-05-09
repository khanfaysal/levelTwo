class Counter {
    static counter: number = 0;

    static increment(): number {
        return (Counter.counter = Counter.counter + 1);
    }

    static decrement(): number {
        return (Counter.counter = Counter.counter - 1);
    }
}

// const instance4 = new Counter();
// const instance5 = new Counter();
console.log(Counter.increment())
console.log(Counter.increment())