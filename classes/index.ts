class Calculator {
    constructor(public readonly name: string) {}
  
    add(a: number, b: number): number {
      return a + b;
    }
  
    subtract(a: number, b: number): number {
      return a - b;
    }
  
    multiply(a: number, b: number): number {
      return a * b;
    }
  
    divide(a: number, b: number): number {
      if (b === 0) {
        throw new Error("Cannot divide by zero.");
      }
      return a / b;
    }
}

export default Calculator