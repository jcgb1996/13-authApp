import { Component, computed, inject } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-dashboard-layout',
  standalone: false,

  templateUrl: './dashboard-layout.component.html',
  styleUrl: './dashboard-layout.component.css'
})
export class DashboardLayoutComponent {

    private authServices = inject( AuthService );
    public user = computed(  ()=> this.authServices.currentUser() );

    get user1() {
      return this.authServices.currentUser();
    }
}
