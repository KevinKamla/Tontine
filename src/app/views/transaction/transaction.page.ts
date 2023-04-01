import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.page.html',
  styleUrls: ['./transaction.page.scss'],
})
export class TransactionPage implements OnInit {

  value_input :number[] = []
  constructor() { }


  digit1() {
    this.value_input.push(1)
    console.log("value : ", this.value_input);
  }
  digit2() {

  }
  digit3() {

  }
  digit4() {

  }
  digit5() {

  }
  digit6() {

  }
  digit7() {

  }
  digit8() {

  }
  digit9() {

  }
  digit0() {

  }
  digit_sup() {

  }




  ngOnInit() {
  }

}
