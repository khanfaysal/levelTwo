// 1. Convert the following JavaScript array into a TypeScript tuple

type userInfoType = [number, string, string, boolean, undefined, string];

const userInfo: userInfoType = [101, "Ema", "John", true, , "2023"];
// console.log("user tuple", userInfo);

// 2. Write a TypeScript function that takes in two arrays of numbers as parameters. The function should compare the elements in both arrays and return a new array that contains only the elements that are present in both arrays.

const firstArray: number[] = [1, 2, 3, 4, 5];
const secondArray: number[] = [2, 4, 6, 8];

const filterNumberArray = (firstArray: number[], secondArray: number[]) => {
	const newArray: number[] = [];
	for (const element of firstArray) {
		if (secondArray.includes(element)) {
			newArray.push(element);
		}
	}
	return newArray;
};

const filterNumberArrResult = filterNumberArray(firstArray, secondArray);
// console.log(filterNumberArrResult);

// alternative solution of problem no 3

let arr1: number[] = [3,6,88,6,4];
let arr2: number[] = [4,5,6,9,7];

function commonNumers(arr1: number[], arr2: number[]): void {

	let arr1Set = new Set(arr1);
	const commonNumbersResult = arr2.filter(num => arr1Set.has(num));
	// console.log(commonNumbersResult);
}
commonNumers(arr1, arr2)

// 3.You have an interface for Product, containing the product's id, name, price, and category. You want to filter an array of Products based on a specific criterion and value.


interface Product {
	productId: number;
	productName: string;
	productPrice: number;
	productCategory: string;
}

const productArray: Product[] = [
	{
		productId: 233,
		productName: "samsung",
		productPrice: 230000,
		productCategory: "laptop",
	},
	{
		productId: 111,
		productName: "Xaomi",
		productPrice: 232,
		productCategory: "mobile",
	},
	{
		productId: 23,
		productName: "HTC",
		productPrice: 200000,
		productCategory: "mobile",
	},
];
 
function FilterCriteraProducts<T extends keyof Product>(
	productArray: Product[],
	criteria: T,
	value: Product[T]
) {
	return productArray.filter(
		(productSingle) => productSingle[criteria] === value
	);
}

const filteredProducts = FilterCriteraProducts(
	productArray,
	"productCategory",
	"mobile"
);
// console.log(filteredProducts);

// 6. Create an interface called Person that includes properties for name (string), age (number), and email (string). Then create an array of Person objects and write a function that takes the array and a string email as parameters, and returns the Person object that matches the email or null if no match is found.

interface IPerson1 {
	name: string;
	age: number;
	email:string;
}

const personsData: IPerson1[] = [
	{
		name: 'fay',
		age:4,
		email: 'fay@gmial.com'
	},
	{
		name: 'jay',
		age:42,
		email: 'jay@gmial.com'
	},
	{
		name: 'ray',
		age:14,
		email: 'ray@gmail.com'
	}
]

function personInfo(email: string): IPerson1 | null{
	return personsData.find(emailData => emailData.email === email) ?? null
}

const personEmailMatch = personInfo('ray@gmail.com');
console.log('person email',personEmailMatch);



// 7.Create a TypeScript program that declares an array of numbers. Use the spread  operator to pass the elements of the array as arguments to a function that finds the minimum and maximum values of the array. Use destructuring to assign the minimum and maximum values to separate variables, and log them to the console.

let max: number = 0;
let min: number = 0;
const arrNumbers: number[] = [2,4,56,6,9,0,3434,-1];

const minMaxArrValue = (...x: number[] ): void => {
	min = Math.min(...x);
	max = Math.max(...x);
}
minMaxArrValue(...arrNumbers)

// console.log({min, max});


// 8. Create a TypeScript program that declares a function that takes a string parameter with a literal type of "red", "green", or "blue", and an optional boolean parameter. If the boolean parameter is true, log the string parameter in uppercase. If the boolean parameter is false or not provided, log the string parameter in lowercase.


type Color = 'red' | 'green' | 'blue' ;

function caseLetter( color: Color, condition?: boolean): void {

    const letter: string = condition ? color.toUpperCase() : color.toLowerCase();
    // console.log(letter);
}

caseLetter('red', true);










