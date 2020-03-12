import { Component, OnInit } from '@angular/core';
import { ServiceAPIService } from '../services/service-api.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

data: any = {};
objectData: any;
checkBoxes: any[] = ['Subscribed Users', 'Active Users', 'Engaged Users', 'Inactive Users', 'UNIVERSIDAD'];
  constructor(private notificationsService: ServiceAPIService) {}

  ngOnInit(): void {
  }
  onSubmit(data: any) {
    if (Object.keys(data).length > 2) {
      this.notificationsService.sendNotification(data).subscribe((response) => {
        console.log(response);
      });
    } else {
      alert('No selecciono un segmento');
    }
  }
}
