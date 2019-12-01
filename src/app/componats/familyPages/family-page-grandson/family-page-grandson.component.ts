import {
        Component,
        OnInit,
        OnChanges,
        DoCheck, AfterContentInit,
        AfterContentChecked,
        AfterViewInit,
        AfterViewChecked,
        OnDestroy,
        SimpleChanges
      } from '@angular/core';

@Component({
  selector: 'app-family-page-grandson',
  templateUrl: './family-page-grandson.component.html',
  styleUrls: ['./family-page-grandson.component.css']
})
export class FamilyPageGrandsonComponent implements OnInit,
                                                  OnChanges,
                                                  DoCheck, AfterContentInit,
                                                  AfterContentChecked,
                                                  AfterViewInit,
                                                  AfterViewChecked,
                                                  OnDestroy {
  constructor() {
    console.log('Grandson constructor');
  }
  ngOnInit() {
    console.log('Grandson ngOnInit');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Grandson ngOnChanges');
  }
  ngDoCheck(): void {
    console.log('Grandson ngOnChanges');
  }
  ngAfterContentInit(): void {
    console.log('Grandson ngAfterContentInit');
  }
  ngAfterContentChecked(): void {
    console.log('Grandson ngAfterContentChecked');
  }
  ngAfterViewInit(): void {
    console.log('Grandson ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
    console.log('Grandson ngAfterViewChecked');
  }
  ngOnDestroy(): void {
    console.log('Grandson ngOnDestroy');
  }


}
