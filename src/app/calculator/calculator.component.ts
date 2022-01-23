import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

    numInput: Number;
    screen: string;
    decimalWithNoNumber: boolean = false;
    operator: string;
    numOne: number;
    clearScreen: boolean = false;
    allClear: boolean = true

  constructor() { }

  ngOnInit(): void {
    let num1: number;
  }

  onNumClick( num: number) {
    if (this.clearScreen === true) {
      this.screen = undefined

    }
    else {
    }
    if (this.numInput === undefined) {
      if (this.screen === ".") {
        this.numInput = +this.screen.concat(num.toString())
        this.screen = this.numInput.toString()
      }
      else{
        this.numInput = num;
        this.screen = this.numInput.toString()
      }
    }
    else {
      if (this.decimalWithNoNumber === true) {
        this.numInput = +this.screen.concat(num.toString())
        this.screen = this.numInput.toString()
      }
      else{
        this.numInput= +this.numInput.toString().concat(num.toString())
        this.screen = this.numInput.toString()
      }
    }
    this.allClear = false
  }

  onClickAllClear() {
    this.numInput = undefined
    this.screen = undefined
    this.decimalWithNoNumber = false
    this.operator = undefined
    this.numOne = undefined
    this.allClear = true
  }

  onClickClear() {
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

  onClickSwapNeg () {
    if (this.numInput === undefined) {
    }
    else {
      if ( this.numInput > 0) {
        this.numInput = +this.numInput - +this.numInput - +this.numInput
        this.screen = this.numInput.toString()
      }
      else {
        var tempNum: string = this.numInput.toString().slice(1,)
        this.numInput = +tempNum
        this.screen = this.numInput.toString()
      }
    }
  }


  onClickPercentage() {
    if (this.numInput === undefined) {
    }
    else {
      this.numInput = +this.numInput / 100
      this.screen = this.numInput.toString()
    }
  }

  onDecimalClick() {
    if (this.decimalWithNoNumber === false) {
      this.decimalWithNoNumber = true
      if (this.screen === undefined) {
        this.screen = "."
      }
      else if (this.screen === "Not A Number") {
        this.screen = "."
      }
      else {
        this.screen = this.screen.concat(".")
      }
    }
    else {
    }
  }

  onClickOperator(operator: string) {
    this.operator = operator
    this.numOne = +this.numInput
    this.numInput = undefined
    this.clearScreen = true
  }

  onClickCaculate() {
    if (this.numInput === undefined) {
    }
    else if (this.operator === undefined) {
    }
    else {
      if (this.operator === "/") {
        if (this.numInput === 0) {
          console.log("divided by zero")
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
