import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  demoChecked = false;
  demoCheckboxData = [
    { title: 'option 1', checked: false },
    { title: 'option 2', checked: true },
    { title: 'option 3', checked: false },
    { title: 'option 4', checked: false },
    { title: 'option 5', checked: true },
  ];
  demoSwitch = false;
  demoInputValue = '';
}
