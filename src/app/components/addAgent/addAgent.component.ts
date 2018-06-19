import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {Agent} from '../../model/agent';
import {AgentService} from '../../shared-service/agent.service';

@Component({
  selector: 'app-addAgent',
  templateUrl: './addAgent.component.html',
  styleUrls: ['./addAgent.component.css']
})
export class AddAgentComponent implements OnInit {

  private agents=[];
  

  constructor(private _agentService:AgentService) { }

  ngOnInit() {
      this.reloadAgents();
  }

  reloadAgents(){
    this._agentService.getAgents().subscribe((data)=>{this.agents=data.agents;});
  }
 
  approveAgent(id:any) {
    this._agentService.approveAgent(id).subscribe(
      (data:any)=>{  alert(data.message);this.reloadAgents();}
      );
  }
 

}
