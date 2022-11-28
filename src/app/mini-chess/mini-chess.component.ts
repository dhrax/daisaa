import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-mini-chess',
  templateUrl: './mini-chess.component.html',
  styleUrls: ['./mini-chess.component.css']
})
export class MiniChessComponent implements OnInit {

  buildUrl: string = ""
  productName: string = ""
  constructor(private router: Router) { }

  ngOnInit(): void {

    this.buildUrl = "assets/demos/boi/Build";
    this.productName = "BindingOfIsaac"

    
    this.loadDemo();
      
  }


  cambiarDatos(){
    
    if(this.productName == "Chess"){
      this.buildUrl = "assets/demos/boi/Build";
      this.productName = "BindingOfIsaac"
    }else{
      this.buildUrl = "assets/demos/minichess/Build";
      this.productName = "Chess"
    }
    
    this.loadDemo()
  }

  loadDemo(): void{
    var loaderUrl = this.buildUrl + "/web.loader.js";

    var config = {
      dataUrl: this.buildUrl + "/web.data",
      frameworkUrl: this.buildUrl + "/web.framework.js",
      codeUrl: this.buildUrl + "/web.wasm",
      streamingAssetsUrl: "StreamingAssets",
      companyName: "Daisa",
      productName: this.productName,
      productVersion: "1.0",
      devicePixelRatio: 0,
    };
      

    let container = document.querySelector("#unity-container") || document.createElement("div");
    var canvas : HTMLElement = document.querySelector("#unity-canvas") || document.createElement("canvas");
    var loadingBar : HTMLElement = document.querySelector("#unity-loading-bar") || document.createElement("div");
    var progressBarFull : HTMLElement = document.querySelector("#unity-progress-bar-full") || document.createElement("div");
    var fullscreenButton : HTMLElement = document.querySelector("#unity-fullscreen-button") || document.createElement("div"); 
    var mobileWarning : HTMLElement = document.querySelector("#unity-mobile-warning") || document.createElement("div");

    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
      container.className = "unity-mobile";
      config.devicePixelRatio = 1;
      mobileWarning.style.display = "block";
      setTimeout(() => {
        mobileWarning.style.display = "none";
      }, 5000);
    } else {
      canvas.style.width = "960px";
      canvas.style.height = "600px";
    }
    loadingBar.style.display = "block";

    createUnityInstance(canvas, config, (progress: any) => {
      progressBarFull.style.width = 100 * progress + "%";
    }).then((unityInstance: any) => {
      loadingBar.style.display = "none";
      fullscreenButton.onclick = () => {
        unityInstance.SetFullscreen(1);
      };
    }).catch((message: any) => {
      alert(message);
    });
  }

}
