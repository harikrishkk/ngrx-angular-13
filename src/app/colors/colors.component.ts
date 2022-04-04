import { Component, OnInit } from '@angular/core';
import { ColorsService } from './colors.service';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.css']
})
export class ColorsComponent implements OnInit {
  colors$ = this.colorService.getAll();
  constructor(private colorService: ColorsService) { }

  ngOnInit() {
    // this.colorService.getAll().subscribe(
    //   data => console.log(data)
    // )
  }

}
