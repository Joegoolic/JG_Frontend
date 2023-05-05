export function generateRandomNumbersInRange(num1: number, num2: number): [number, number] | null {
    // Swap the values of num1 and num2 if num2 is less than num1
    if (num2 < num1) {
        const temp = num1
        num1 = num2
        num2 = temp
    }

    // Calculate the minimum and maximum possible values for the two numbers
    const minNum1 = num1
    const maxNum1 = num2 - 20
    const minNum2 = num1 + 20
    const maxNum2 = num2

    // If the range between minNum1 and maxNum1 is less than 20, return null
    if (maxNum1 < minNum1) {
        return null
    }

    // Generate two random numbers within the valid ranges
    const randomNum1 = Math.floor(Math.random() * (maxNum1 - minNum1 + 1)) + minNum1
    const randomNum2 = Math.floor(Math.random() * (maxNum2 - minNum2 + 1)) + minNum2

    // Return the two random numbers in an array
    return [randomNum1, randomNum2]
}
export function generateRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min
}
