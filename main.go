/*
	* Author: Zachary Fowler
	* Version: 1.0.0
	* Date: 2025-11-20
	* This file rounds given numbers
	*/

package main

import (
    "fmt"
    "strconv"
    "strings"
)

func main() {
    // INPUT
    var inputValue string
    fmt.Print("Enter the initial value: ")
    fmt.Scan(&inputValue)
    inputValue = strings.TrimSpace(inputValue)
    initialValue, _ := strconv.Atoi(inputValue)

    var inputRate string
    fmt.Print("Enter the interest rate (percent): ")
    fmt.Scan(&inputRate)
    inputRate = strings.TrimSpace(inputRate)
    interestRate, _ := strconv.Atoi(inputRate)

    // PROCESS
    rate := float64(interestRate) / 100

    // Yearly calculations
    interest1 := float64(initialValue) * rate
    value1 := float64(initialValue) + interest1

    interest2 := value1 * rate
    value2 := value1 + interest2

    interest3 := value2 * rate
    value3 := value2 + interest3

    interest4 := value3 * rate
    value4 := value3 + interest4

    interest5 := value4 * rate
    value5 := value4 + interest5

    interest6 := value5 * rate
    value6 := value5 + interest6

    interest7 := value6 * rate
    value7 := value6 + interest7

    interest8 := value7 * rate
    value8 := value7 + interest8

    interest9 := value8 * rate
    value9 := value8 + interest9

    interest10 := value9 * rate
    value10 := value9 + interest10

    // OUTPUT
    fmt.Printf("%-10s%20s%20s%20s\n", "Year", "Initial", "Interest", "Value")
    fmt.Printf("%-10d%20.2f%20.2f%20.2f\n", 1, float64(initialValue), interest1, value1)
    fmt.Printf("%-10d%20.2f%20.2f%20.2f\n", 2, float64(initialValue), interest2, value2)
    fmt.Printf("%-10d%20.2f%20.2f%20.2f\n", 3, float64(initialValue), interest3, value3)
    fmt.Printf("%-10d%20.2f%20.2f%20.2f\n", 4, float64(initialValue), interest4, value4)
    fmt.Printf("%-10d%20.2f%20.2f%20.2f\n", 5, float64(initialValue), interest5, value5)
    fmt.Printf("%-10d%20.2f%20.2f%20.2f\n", 6, float64(initialValue), interest6, value6)
    fmt.Printf("%-10d%20.2f%20.2f%20.2f\n", 7, float64(initialValue), interest7, value7)
    fmt.Printf("%-10d%20.2f%20.2f%20.2f\n", 8, float64(initialValue), interest8, value8)
    fmt.Printf("%-10d%20.2f%20.2f%20.2f\n", 9, float64(initialValue), interest9, value9)
    fmt.Printf("%-10d%20.2f%20.2f%20.2f\n", 10, float64(initialValue), interest10, value10)

    fmt.Println("\nDone.")
}