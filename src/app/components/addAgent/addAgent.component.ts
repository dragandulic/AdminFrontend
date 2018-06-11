import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {Agent} from '../../model/agent';

@Component({
  selector: 'app-addAgent',
  templateUrl: './addAgent.component.html',
  styleUrls: ['./addAgent.component.css']
})
export class AddAgentComponent implements OnInit {

  private agent:Agent;
  public form: FormGroup;

  constructor() { }

  ngOnInit() {
      console.log("addAgent");
      this.form = new FormGroup({
        firstName: new FormControl('',[Validators.required]),
        lastName: new FormControl('', [Validators.required]),
        email: new FormControl('',[Validators.required]),
        pib: new FormControl('',[Validators.required])
    })
  }

  addAgentForm(){
    console.log("Forma");
    let agentFields = this.form.value;
    this.agent = agentFields;
    console.log(this.agent);
  }

}
