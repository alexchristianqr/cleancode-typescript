const arrayOfTemperatures = [33.6, 12.34] // Malo
const temperatures = [33.6, 12.34] // Bueno

const ip = "120.256.114.100" // Malo
const serverIp = "120.256.114.100" // Bueno

const scoreTotalAll = 10 // Malo
const totalScore = 10 // Bueno

const peopleList = [
  { id: 1, mame: "Alex Quispe", dni: "68288494", email: "alex@gmail.com" },
  { id: 2, name: "Angela Torres", dni: "98946547", email: "angela@gmail.com" },
] // Malo
const users = [
  { id: 1, mame: "Alex Quispe", dni: "68288494", email: "alex@gmail.com" },
  { id: 2, name: "Angela Torres", dni: "98946547", email: "angela@gmail.com" },
] // Bueno

const emails = users.map((user) => user.email) // Malo
const userEmails = users.map((user) => user.email) // Bueno

const jump = false // Malo
const canJump = false // Bueno

const runner = true // Malo
const canRun = true // Bueno

const hasNotItems = true // Malo
const hasItems = false // Bueno

const loading = false // Bueno
const isLoading = true // Bueno

const start = new Date().getTime() // Malo
const startTime = new Date().getTime() // Bueno

const end = new Date().getTime() - start // Malo
const endTime = new Date().getTime() - startTime // Bueno

function bookList() {
  throw new Error("Funtion not implemented.")
} // Malo
function getBooks() {
  throw new Error("Funtion not implemented.")
} // Bueno

function book() {
  throw new Error("Funtion not implemented.")
} // Malo
function getBook() {
  throw new Error("Funtion not implemented.")
} // Bueno

function booksUrl(url: string) {
  console.log({ url })
  throw new Error("Funtion not implemented.")
} // Malo
function getBooksByUrl(url: string) {
  console.log({ url })
  throw new Error("Funtion not implemented.")
} // Bueno

function insertOneBook(side: number) {
  console.log({ side })
  throw new Error("Funtion not implemented.")
} // Malo
function createBook(side: number) {
  console.log({ side })
  throw new Error("Funtion not implemented.")
} // Bueno

function editOneBook() {
  throw new Error("Funtion not implemented.")
} // Malo
function updateBook() {
  throw new Error("Funtion not implemented.")
} // Bueno

function calculateBookPrice(quantity: any, price: any) {
  return quantity * price
} // Malo
function calculateLaptopPrice(quantity: any, price: any) {
  return quantity * price
} // Malo
function calculateItemPrice(quantity: number, price: number) {
  return quantity * price
} // Bueno

const bookQuantity = 3 // Bueno
const bookPrice = 25 // Bueno
const laptopQuantity = 2 // Bueno
const laptopPrice = 800 // Bueno

const bookTotalPrice = calculateItemPrice(bookQuantity, bookPrice) // Bueno
const laptopTotalPrice = calculateItemPrice(laptopQuantity, laptopPrice) // Bueno

class ZeroDivisionError extends Error {
  constructor() {
    super()
    this.message = `Error no se puede dividir entre zero.`
  }
} // Bueno
class ValueError extends Error {
  constructor() {
    super()
    this.message = `Error al operar.`
  }
} // Bueno
function divide(numX: number, numY: number) {
  return numX / numY
} // Bueno

let result // Bueno
const numDividendo = 10 // Bueno
const numDivisor = 2 // Bueno

try {
  result = divide(numDividendo, numDivisor)
} catch (error) {
  console.error("An error occurred")
} // Malo
type myError = ZeroDivisionError | ValueError | Error | unknown | any // Bueno
try {
  result = divide(numDividendo, numDivisor)
} catch (error: myError) {
  if (error instanceof ZeroDivisionError) {
    console.error("Division by zero error:", error.message)
  } else if (error instanceof ValueError) {
    console.error("Invalid input:", error.message)
  } else {
    console.error("An unexpected error occurred:", error.message)
  }
} // Bueno
