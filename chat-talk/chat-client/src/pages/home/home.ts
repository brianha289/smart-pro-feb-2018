import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as clientIO from 'socket.io-client';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  socket: any
  chats: any[] = []
  inputMessage: string
  identifier: string

  constructor(public navCtrl: NavController) {
    this.identifier = Date.now().toString()

    this.socket = clientIO('http://localhost:8080')
  }

  ionViewDidLoad(){
   this.received()
  }

  received() {
    this.socket.on('broadcast', (data) => {
      console.log('Received: ', data)
      // do
      let info = JSON.parse(data)
      if(info.sender == this.identifier) {
        let data = {
          "msgClass": "right",
          "info": info.content
        }
        this.chats.push(data)
      } else {
        let data = {
          "msgClass": "left",
          "info": info.content
        }
        this.chats.push(data)
      }
    })
  }
 
  send() {
    if(this.inputMessage != '') {
      // let data = this.identifier + "#" + this.inputMessage
      let info = {
        "sender": this.identifier,
        "content": this.inputMessage
      }

      this.socket.emit('broadcast', JSON.stringify(info))

      this.inputMessage = ''
    }
  }


}
