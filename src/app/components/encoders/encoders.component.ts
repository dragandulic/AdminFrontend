import { Component, OnInit } from '@angular/core';
import {EncodersService} from '../../shared-service/encoders.service';
import {Type} from '../../model/type';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-encoders',
  templateUrl: './encoders.component.html',
  styleUrls: ['./encoders.component.css']
})
export class EncodersComponent implements OnInit {
 private types = [];
  public form: FormGroup;
  private addTypeField:string;

  constructor(private _encodersService:EncodersService) { }

  ngOnInit() {
      this.reloadTypes();
      this.form = new FormGroup({
        newType: new FormControl('',[Validators.required]),
    })
  
  }

  reloadTypes() {
    this._encodersService.getTypes().subscribe((data)=>{this.types=data.types;});
  }

  addType() {
    this.addTypeField = this.form.value.newType;
    console.log(this.addTypeField);
    this._encodersService.addType(this.addTypeField).subscribe((data)=>{this.types=data.types;this.reloadTypes();});
  }
}
