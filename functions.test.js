const {
    returnTwo,
    greeting,
    add,
    multiply,
    divide,
    subtract
} = require('./functions')

describe('Tests for returnTwo Function', () => {
    test('Does function return 2', () => {
        expect(returnTwo()).toEqual(2)
    })
})

describe('Tests for greeting function', () => {
    test('Does function return "Hello, James."', () => {
        expect(greeting('James')).toEqual("Hello, James.")
        
    })
    test('Does function return "Hello, Jill."', () => {
        expect(greeting('Jill')).toEqual("Hello, Jill.")
    })
})

describe('Tests for add Function', () => {
    test('Does function sum to 3', () => {
        expect(add(1,2)).toEqual(3)
    })
    test('Does function sum to 14', () => {
        expect(add(5,9)).toEqual(14)
    })
})

describe('Tests for multiply function', () => {
    test('Does function multiply to 28', () => {
        expect(multiply(7,4)).toEqual(28)
    })
    test('Does function multiply to 12', () => {
        expect(multiply(3,4)).toEqual(12)
    })
})

describe('Tests for divide function', () => {
    test( 'does function divide to 8', () => {
        expect(divide(8,1)).toEqual(8)
    })
    test('does function divide to 20', () => {
        expect(divide(100,5)).toEqual(20)
    })
})


