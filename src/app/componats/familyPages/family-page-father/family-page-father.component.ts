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
  selector: 'app-family-page-father',
  templateUrl: './family-page-father.component.html',
  styleUrls: ['./family-page-father.component.css']
})
export class FamilyPageFatherComponent implements OnInit,
                                                OnChanges,
                                                DoCheck,
                                                 AfterContentInit,
                                                AfterContentChecked,
                                                AfterViewInit,
                                                AfterViewChecked,
                                                OnDestroy {
  constructor() {
    console.log('Father constructor');
  }
  ngOnInit() {
    console.log('Father ngOnInit');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Father ngOnChanges');
  }
  ngDoCheck(): void {
    console.log('Father ngOnChanges');
  }
  ngAfterContentInit(): void {
    console.log('Father ngAfterContentInit');
  }
  ngAfterContentChecked(): void {
    console.log('Father ngAfterContentChecked');
  }
  ngAfterViewInit(): void {
    console.log('Father ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
    console.log('Father ngAfterViewChecked');
  }
  ngOnDestroy(): void {
    console.log('Father ngOnDestroy');
  }


}
