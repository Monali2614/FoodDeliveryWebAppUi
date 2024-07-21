import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent {
  activeComponent: string = 'add-restaurant'; // Default value

  setActiveComponent(component: string) {
    this.activeComponent = component;
  }
}
