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
 private categories = [];
 private additionalServices = [];
  public form: FormGroup;
  public form2: FormGroup;
  public form3: FormGroup;
  private addTypeField:string;
  private addCategoryField:string;
  private addAdditionalServiceField:string;

  constructor(private _encodersService:EncodersService) { }

  ngOnInit() {
      this.reloadTypes();
      this.reloadCategory();
      this.reloadAdditionalServices();

      this.form = new FormGroup({
        newType: new FormControl('',[Validators.required]),
      })
      this.form2 = new FormGroup({
        newCategory: new FormControl('',[Validators.required]),
      })
      this.form3 = new FormGroup({
        newAdditionalService: new FormControl('',[Validators.required]),
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

  deleteType(name) {
    this._encodersService.deleteType(name).subscribe((data)=>{this.reloadTypes();});
  }

  reloadCategory() {
    this._encodersService.getCategories().subscribe((data)=>{this.categories=data.categories;});
  }

  addCategory() {
    this.addCategoryField = this.form2.value.newCategory;
    console.log(this.addCategoryField);
    this._encodersService.addCategory(this.addCategoryField).subscribe((data)=>{this.categories=data.categories;this.reloadCategory();});
  }

  deleteCategory(name) {
    this._encodersService.deleteCategory(name).subscribe((data)=>{this.reloadCategory();});
  }

  reloadAdditionalServices() {
    this._encodersService.getAdditionalServices().subscribe((data)=>{this.additionalServices=data.services;});
  }

  addAdditionalService() {
    this.addAdditionalServiceField = this.form3.value.newAdditionalService;
    console.log(this.addAdditionalServiceField);
    this._encodersService.addAdditionalService(this.addAdditionalServiceField).subscribe((data)=>{this.additionalServices=data.additionalServices;this.reloadAdditionalServices();});
  }

  deleteAdditionalService(name) {
    this._encodersService.deleteAdditionalService(name).subscribe((data)=>{this.reloadAdditionalServices();});
  }





}
