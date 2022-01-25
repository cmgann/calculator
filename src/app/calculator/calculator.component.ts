import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
    // current number input
    numInput: Number;

    // this shows the calculating total on app, can't use numInput due to decmal value
    screen: string;

    // determines if a decimal value was added before a number
    decimalWithNoNumber: boolean = false;

    // variable for math operator
    operator: string;

    // used to store first number after an operator was chosen
    numOne: number;

    // used to determine if All clear needs or clear needs to be available
    clearScreen: boolean = false;
    allClear: boolean = true

  constructor() { }

  ngOnInit(): void {
  }

  onNumClick( num: number) {
    // checks if clearScreen is true
    if (this.clearScreen === true) {
      // if clear screen is true then the screen will be cleared
      this.screen = undefined
    }
    else {
    }
    // checks if number input is undefined
    if (this.numInput === undefined) {
      // checks if screen is a decimal
      if (this.screen === ".") {
        // if decimal then add number to decimal to input and screen
        this.numInput = +this.screen.concat(num.toString())
        this.screen = this.numInput.toString()
      }
      else{
        // sets the input = number selected
        this.numInput = num;
        this.screen = this.numInput.toString()
      }
    }
    else {
      // checks if there is a decimal value without a number
      if (this.decimalWithNoNumber === true) {
        // adds the numbered added to the numinput and screen
        this.numInput = +this.screen.concat(num.toString())
        this.screen = this.numInput.toString()
      }
      else{
        // addds the number added to the numinput and screen
        this.numInput= +this.numInput.toString().concat(num.toString())
        this.screen = this.numInput.toString()
      }
    }
    // sets all clear to false to allow the clear button to be available
    this.allClear = false
  }

  // all clear (AC) selected, this will reset everything
  onClickAllClear() {
    this.numInput = undefined
    this.screen = undefined
    this.decimalWithNoNumber = false
    this.operator = undefined
    this.numOne = undefined
    this.allClear = true
  }

  // Clear clicked
  onClickClear() {
    // checks if a number has been stored after operator
    if (this.numOne == undefined) {
      this.numInput = undefined
      this.screen = undefined
      this.allClear = true
    }
    else {
      this.numInput = undefined
      this.screen = this.numOne.toString()
      this.allClear = true
    }
  }

  // Swaps number with a negatie or positive
  onClickSwapNeg () {
    // checks if a number is stored
    if (this.numInput === undefined) {
    }
    else {
      // check if numInput is greater than 0
      // to turn it into a negative number
      if ( this.numInput > 0) {
        this.numInput = +this.numInput - +this.numInput - +this.numInput
        this.screen = this.numInput.toString()
      }
      // else turn it to a positive
      else {
        // turn to string and slice the negative
        var tempNum: string = this.numInput.toString().slice(1,)
        // turn back to number
        this.numInput = +tempNum
        this.screen = this.numInput.toString()
      }
    }
  }

  // get percentage
  onClickPercentage() {
    // checks if there is a number to change
    if (this.numInput === undefined) {
    }
    // turn to percentage
    else {
      this.numInput = +this.numInput / 100
      this.screen = this.numInput.toString()
    }
  }

  // decimal selected
  onDecimalClick() {
    // checks if there is a number
    if (this.decimalWithNoNumber === false) {
      // changes the boolean to having a decimal
      this.decimalWithNoNumber = true
      // checks if there is a number on screen
      if (this.screen === undefined) {
        // changes screen to decimal only
        this.screen = "."
      }
      // checks if screen is Not A Number
      // from divisabe by zero message
      else if (this.screen === "Not A Number") {
        //changes screen to decimal
        this.screen = "."
      }
      // conacts the screen to add a decimal
      else {
        this.screen = this.screen.concat(".")
      }
    }
    else {
    }
  }

  // operator selected
  onClickOperator(operator: string) {
    // change operator to selected operator
    this.operator = operator
    // stores the numInput into numOne for future
    // use on calculate
    this.numOne = +this.numInput
    // clears numInput
    this.numInput = undefined
    // Activates clear screen
    this.clearScreen = true
  }

  // equals sign clicked
  onClickCaculate() {
    // checks if numInput is undefined
    // if so then do nothing
    if (this.numInput === undefined) {
    }
    // checks if operator is undefined
    // if so then do nothing
    else if (this.operator === undefined) {
    }
    // start by calculating with selected
    // operator
    else {
      if (this.operator === "/") {
        // checks if diving by zero
        // and turns screen to Not A Number
        if (this.numInput === 0) {
          this.numInput = undefined
          this.screen = "Not A Number"
          this.operator = undefined
        }
        else {
          var total = +this.numOne / +this.numInput
          this.numInput = +total
          this.screen = total.toString()
        }
      }
      else if (this.operator === "X") {
        var total = +this.numOne * +this.numInput
        this.numInput = +total
        this.screen = total.toString()
      }
      else if (this.operator === "-") {
        var total = +this.numOne - +this.numInput
        this.numInput = +total
        this.screen = total.toString()
      }
      else if (this.operator === "+") {
        var total = +this.numOne + +this.numInput
        this.numInput = +total
        this.screen = total.toString()
      }
      else {
      }
    }
  }
}
