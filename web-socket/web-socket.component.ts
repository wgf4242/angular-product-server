import { Component, OnInit } from "@angular/core";
import { WebSocketService } from "../shared/web-socket.service";

@Component({
  selector: "app-web-socket",
  templateUrl: "./web-socket.component.html"
})
export class WebSocketComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  // constructor(private wsService: WebSocketService) { }

  // ngOnInit() {
  //   this.wsService.createObservableSocket("ws://localhost:8085")
  //   .subscribe(
  //     data => console.log(data),
  //     err => console.log(err),
  //     () => console.log("流已经结束")
  //   );
  // }

  // sendMessageToServer(){
  //   this.wsService.sendMessage("Hello from client");
  // }
}
