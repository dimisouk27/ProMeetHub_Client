import { Component } from '@angular/core';
import { IServiceTypeForm } from 'src/app/models/service_provider/ServiceTypeForm';
import { ServiceProvider } from 'src/app/models/service_provider/serviceProvider';
import { ProviderService } from 'src/app/services/provider/provider.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  imagePresent!: boolean;
  serviceTypes: IServiceTypeForm[]= [];
  serviceProvider: ServiceProvider | undefined;

  constructor(private readonly $providerService: ProviderService){

    $providerService.getMyServiceType().subscribe(
      {
        next: (data: IServiceTypeForm[]) => {
          console.log(data)
          this.serviceTypes = data
        }
        
      }
    );

    $providerService.get().subscribe(
      {
        next: (provider: ServiceProvider) => {
          console.log(provider);
          
          this.serviceProvider = provider
        }
      }
    )

  }
}
