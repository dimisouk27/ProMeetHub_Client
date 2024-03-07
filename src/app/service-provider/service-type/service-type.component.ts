import { Time } from '@angular/common';
import { Component } from '@angular/core';
import { IServiceTypeForm } from 'src/app/models/ServiceTypeForm';

interface Slot {
  time: Time,
  disabled: boolean
}

interface Day{
  date: Date,
  timeSlots: Slot[]
}

@Component({
  selector: 'app-service-type',
  templateUrl: './service-type.component.html',
  styleUrls: ['./service-type.component.scss']
})

export class ServiceTypeComponent {
  
  servicesType!: IServiceTypeForm;
}


