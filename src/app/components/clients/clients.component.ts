import { Component, inject } from '@angular/core';
import { ConfigItem } from '../../services/config-item';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css'
})
export class ClientsComponent {
  clients!: ConfigItem | undefined;
  configService: ConfigService = inject(ConfigService);

  constructor()  {
    this.clients = this.configService.getPageByName("clients");
  }
}
