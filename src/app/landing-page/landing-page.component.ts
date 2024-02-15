import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ProviderCardComponent } from '../provider-card/provider-card.component';
import { ToastService } from '../services/toast.service';
import { Message, MessageService } from 'primeng/api';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit, AfterViewInit {
  registerMessage!: Message;

  constructor
  (
    private readonly toastService : ToastService, 
    private messageService: MessageService,  
    private changeDetectorRef: ChangeDetectorRef
  )
  {
    
  }


  providerCard!: ProviderCardComponent;

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    if(this.toastService.isRegistered){
      this.messageService.add({severity:'success', summary: 'Inscription réussie'});
      this.changeDetectorRef.detectChanges();// on informe à angular redecter les changements après notre modification( pour eviter l'erreur NG0100)
    }
  }
  

}
