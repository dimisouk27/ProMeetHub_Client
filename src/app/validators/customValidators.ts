import { AbstractControl, FormBuilder, ValidationErrors, ValidatorFn } from "@angular/forms";

export class CustomValidators {

    static password(minLength: number = 6, maxLength?: number) {
        return (control: AbstractControl ) => {
            const value : string = control.value;
            const regex = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&=])[A-Za-z\\d@$!%*?&=]{"+minLength+","+(maxLength == undefined ? '' : maxLength )+"}$"
            if(!value) return null;
            
            if( value.match(regex) )
                return null;
            
            return {password : "Votre mot de passe est requis"}
        }
    }
    static emailValidator(){
        return (control : AbstractControl) =>
        {
            const value : string = control.value;
            const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if(!value) return null

            if(value.trim().length == 0)
                return { email : "votre email est requise"}
            
            if(value.length < 6)
                return { email : "Votre email n'est pas valide, elle ne peux pas contenir moins de 6 caractères"}
        
        
            let testMatch = value.match(regex)
        
            if(testMatch && testMatch[0] == value)
                return null
            else
                return { email : "Votre email n'est pas valide"}
        }
    }

    static telValidator(){
        return (control: AbstractControl) => {
            const value : string = control.value
            if(value){
                if(value.trim().length == 0) return {phoneNumber: "Votre numéro de téléphone est requis"}
                if(!value.match(/^[0-9]{10}$/)) return {phoneNumber : "Le numéro doit comproter au moins 10 chiffres"}
            }
           
            return null;
        }
    }


}

