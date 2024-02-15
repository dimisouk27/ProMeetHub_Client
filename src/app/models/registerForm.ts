//import { Min, NotBlank, Email, Tel, Valid, NotNull, Password } from 'validation-library';

import { Validators } from "@angular/forms";
import { CustomValidators } from "../validators/customValidators";

export interface IRegisterForm {//au cas ou on veux spécifier le champ où il y a eu l'erreur 
    role:  'ADMIN' |'SERVICE_PROVIDER' | 'CLIENT';
    lastName: string;
    firstName: string;
    email: string;
    password: string;
    phoneNumber: string;    
    streetNumber: number;
    street: string;
    zipCode: number;
    city: string;
    country: string;
}


export const RegisterForm = {
    lastName : ['', [Validators.minLength(2), Validators.maxLength(50), Validators.required]],
    firstName: ['',[Validators.minLength(2),Validators.maxLength(50)]],
    email: ['',[CustomValidators.emailValidator()]],
    password: ['',[CustomValidators.password(8,255)]],
    phoneNumber: ['',[CustomValidators.telValidator()]],
    streetNumber: ['',[Validators.required, Validators.min(1), Validators.max(9999999999999999)]],
    street: ['',[Validators.required, Validators.minLength(2), Validators.maxLength(500)]],
    zipCode: ['',[Validators.required, Validators.min(1), Validators.max(9999999999999999)]],
    city: ['',[Validators.required, Validators.minLength(2), Validators.maxLength(500)]],
    country: ['',[Validators.required, Validators.minLength(2), Validators.maxLength(500)]],
    role: ['SERVICE_PROVIDER',[Validators.required]]
}