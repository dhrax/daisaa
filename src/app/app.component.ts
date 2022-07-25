import { AppSettingsComponent } from './app-settings/app-settings.component';
import { Component, HostListener, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = "David\'s site (WIP)";
  URLClassicPong: string = AppSettingsComponent.URL_CLASSICPONG;
  URLBOI: string = AppSettingsComponent.URL_BOI;

  frame: HTMLImageElement | undefined;
  
  ngOnInit(): void {

    this.frame = document.getElementById('demoFrame') as HTMLImageElement;
    this.frame!.width = 0;
    this.frame!.height = 0;
  }

  updateDemoFrame(value: string) {
    if(this.frame!.style.visibility != "visible")
      this.frame!.style.visibility = "visible"
    this.frame!.src = value;
    this.updateFrameSize()
    
  }

  updateFrameSize(){
    this.frame!.width = window.innerWidth / 2;
    this.frame!.height = window.innerHeight / 2;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.updateFrameSize()
  }
}
