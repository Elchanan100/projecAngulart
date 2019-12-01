import { Component,
          OnInit ,
          OnChanges,
          DoCheck,AfterContentInit,
          AfterContentChecked,
          AfterViewInit,
          AfterViewChecked,
          OnDestroy,
          SimpleChanges
        } from '@angular/core';

@Component({
  selector: 'app-family-page-son',
  templateUrl: './family-page-son.component.html',
  styleUrls: ['./family-page-son.component.css']
})
export class FamilyPageSonComponent implements OnInit,
                                              OnChanges,
                                              DoCheck,AfterContentInit,
                                              AfterContentChecked,
                                              AfterViewInit,
                                              AfterViewChecked,
                                              OnDestroy {
constructor() {
console.log('Son constructor');
}
ngOnInit() {
console.log('Son ngOnInit');
}
ngOnChanges(changes: SimpleChanges): void {
console.log('Son ngOnChanges');
}
ngDoCheck(): void {
console.log('Son ngOnChanges');
}
ngAfterContentInit(): void {
console.log('Son ngAfterContentInit');
}
ngAfterContentChecked(): void {
console.log('Son ngAfterContentChecked');
}
ngAfterViewInit(): void {
console.log('Son ngAfterViewInit');
}
ngAfterViewChecked(): void {
console.log('Son ngAfterViewChecked');
}
ngOnDestroy(): void {
console.log('Son ngOnDestroy');
}


}
