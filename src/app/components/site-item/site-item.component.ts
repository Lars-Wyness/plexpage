import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-site-item',
  templateUrl: './site-item.component.html',
  styleUrls: ['./site-item.component.scss']
})
export class SiteItemComponent implements AfterViewInit {
  @ViewChild("infoPaneContent") infoPaneContent?: ElementRef;

  @Input() port!: string;
  @Input() imageName!: string;
  @Input() label = "";
  @Input() hasInfoPane = false;
  @Input() infoPaneHeader?: string;
  @Input() infoPaneDescription?: string;
  hideToggle = false;

  ngAfterViewInit(): void {   
    this.hideToggle = this.isInfoContentEmpty();
  }

  goToPort(port: string) {
    window.location.href = `http://192.168.1.24:${port}`;
  }

  isInfoContentEmpty() {
    return this.infoPaneContent?.nativeElement.innerHTML.length === 0;
  }
}
