import {
  AfterContentInit,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-page404',
  templateUrl: './page404.component.html',
  styleUrls: ['./page404.component.scss'],
})
export class Page404Component implements AfterViewInit {
  constructor(private readonly messageService: MessageService , private readonly changeDetectorRef: ChangeDetectorRef) {}
  ngAfterViewInit(): void {
    this.messageService.add({
      severity: 'error',
      summary: 'Page non trouvé!',
      detail:
        "La page que vous essayé d'atteindre n'a pas été trouvé ou n'existe plus, retournez à l'acceuil",
    });

    this.changeDetectorRef.detectChanges(); // on informe à angular redecter les changements après notre modification( pour eviter l'erreur NG0100)

  }
}
