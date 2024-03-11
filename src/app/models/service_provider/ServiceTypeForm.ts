import { Time } from '@angular/common';
import { Validators } from '@angular/forms';
import { CustomValidators } from '../../validators/customValidators';

export interface IServiceTypeForm {
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  startTime: string;
  endTime: string;
  duration: number;
  categoryName: string;
  login: string;
  url?: string;
  enabled: boolean;
}

export const ServiceTypeForm = {
  title: [
    '',
    [Validators.required, Validators.minLength(5), Validators.maxLength(50)],
  ],
  description: [
    '',
    [Validators.required, Validators.minLength(5), Validators.maxLength(500)],
  ],
  startDate: ['', [Validators.required]],
  endDate: ['', [Validators.required]],
  startTime: ['', [Validators.required]],
  endTime: ['', [Validators.required]],
  duration: ['', [Validators.required, Validators.min(1)]],
  categoryName: [
    '',
    [Validators.required, Validators.minLength(2), Validators.maxLength(50)],
  ],
  login: ['', [Validators.required]],
};
