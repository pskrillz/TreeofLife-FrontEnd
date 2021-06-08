import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(
   
  ) { }

  ngOnInit(): void {
  }

  connectWallet(){
    // ignore error this works
    ethereum.request({method: 'eth_requestAccounts'})
  }


}
