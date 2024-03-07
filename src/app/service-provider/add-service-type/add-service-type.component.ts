import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ServiceTypeComponent } from '../service-type/service-type.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Time } from '@angular/common';
import {
  ListboxChangeEvent,
  ListboxSelectAllChangeEvent,
} from 'primeng/listbox';
import { ServiceTypeForm } from 'src/app/models/ServiceTypeForm';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CustomValidators } from 'src/app/validators/customValidators';
import { ProviderService } from 'src/app/services/provider/provider.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Subject, takeUntil } from 'rxjs';
import { ServiceCategoryService } from 'src/app/services/service-category/service-category.service';
import { Dropdown } from 'primeng/dropdown';

// class TimeSlot {
//   label: string;
//   time: Time;
//   isTaked: boolean;

//   constructor(time: Time, isTaked: boolean = false) {
//     this.isTaked = isTaked;
//     this.time = time;
//     this.label =
//       this.displayTwoDigit(this.time.hours) +
//       ' : ' +
//       this.displayTwoDigit(this.time.minutes);
//   }

//   displayTwoDigit(num: number): string {
//     return num < 10 ? '0' + num : '' + num;
//   }
// }

@Component({
  selector: 'app-add-service-type',
  templateUrl: './add-service-type.component.html',
  styleUrls: ['./add-service-type.component.scss'],
})
export class AddServiceTypeComponent implements OnInit, OnDestroy {
  @ViewChild('catdropdown') catdropdown!: Dropdown;
  handleDropDown() {
  this.catdropdown.show();

}

  serviceTypeForm: FormGroup;
  categories: string[] = [];
  defaultStartTime: Date = new  Date();
  defaultEndTime: Date = new  Date();
  private destroyed$ = new Subject();

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly $auth: AuthService,
    private readonly $providerService: ProviderService,
    private readonly $serviceCategory: ServiceCategoryService,
    private readonly messageService: MessageService,
    private readonly router: Router
  ) {
    this.serviceTypeForm = formBuilder.group(
      { ...ServiceTypeForm },
      {validators:CustomValidators.greaterThanValidator()}
      
    );

    this.$serviceCategory.getAll().subscribe({
      next:  (categories) => {
        console.log("les categories récup: " + categories)
        this.categories = categories;
      },
      error: (errorResponse: HttpErrorResponse) => {
        this.messageService.add({
          severity: 'error',
          summary: "Erreur lors de la récupération des catégories",
          detail: errorResponse.error.message,
        });
      },
    })
  }
  ngOnInit(): void {
    this.defaultStartTime.setHours(8);
    this.defaultStartTime.setMinutes(0);
    this.defaultEndTime.setHours(16);
    this.defaultEndTime.setMinutes(0)
  }

  ngOnDestroy(): void {
    this.destroyed$.complete();
  }

  onSubmit() {
    //verifier si login existe d'abord
    if (this.$auth.email != null) {
      this.serviceTypeForm.controls['login'].setValue(this.$auth.email);
      console.log(this.serviceTypeForm)
      if (this.serviceTypeForm.valid) {
        this.$providerService.addServiceType(this.serviceTypeForm.value)
        .pipe(
          takeUntil(this.destroyed$),
        )
        .subscribe(
          {
            next: (response: boolean) => {
              console.log('Type de service ajouté avec succès', response);
              this.serviceTypeForm.reset();
              this.messageService.add({
                severity: 'success',
                summary: 'Nouveau type de service ajouté!',
              });
              this.router.navigateByUrl('/service-provider');
            },
            error: (errorResponse: HttpErrorResponse) => {
              this.messageService.add({
                severity: 'error',
                summary: "Erreur le type de service n'a pas été ajouté",
                detail: errorResponse.error.message,
              });
            },
          }
        );
      }
    }

    console.log(this.serviceTypeForm.value);
  }

  preInsertData() {
    this.serviceTypeForm.controls['title'].setValue('NewTitle');
    this.serviceTypeForm.controls['description'].setValue('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, delectus? Saepe maiores dolorum doloribus repellat. Quaerat inventore explicabo in neque minima sapiente aliquid nisi debitis, commodi rem, numquam ad accusantium? Tempora temporibus ullam labore culpa ad debitis veniam officiis aliquam nihil totam, minima vel, saepe neque. Sed ducimus libero ea velit veniam, consectetur dolor suscipit incidunt laudantium quibusdam atque nulla.');
    this.serviceTypeForm.controls['startDate'].setValue(new Date(2024,2,20));
    this.serviceTypeForm.controls['endDate'].setValue(new Date(2024,2,25));
    this.serviceTypeForm.controls['startTime'].setValue(new Date(2024,2,20,8,0));
    this.serviceTypeForm.controls['endTime'].setValue(new Date(2024,2,20,16,0));
    this.serviceTypeForm.controls['duration'].setValue(30);
  }
}
