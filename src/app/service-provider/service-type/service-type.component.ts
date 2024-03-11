import { Time } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IServiceTypeForm } from 'src/app/models/service_provider/ServiceTypeForm';
import { FormBuilder, FormGroup } from '@angular/forms';

interface Slot {
  time: Time;
  disabled: boolean;
}

interface Day {
  date: Date;
  timeSlots: Slot[];
}

@Component({
  selector: 'app-service-type',
  templateUrl: './service-type.component.html',
  styleUrls: ['./service-type.component.scss'],
})
export class ServiceTypeComponent implements OnInit {
  @Input() servicesType!: IServiceTypeForm;

  form!: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) {
    
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      enabled : [this.servicesType.enabled,[]]
    })
  }

  submit(){
    console.log(this.form.value);
     
  }


}
