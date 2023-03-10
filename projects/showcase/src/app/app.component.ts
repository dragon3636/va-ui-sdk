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

  dataSource = [
    {
      value: 'hello',
      entity_type: 'greeting',
      intent: 'greet',
    },
    {
      value: 'how are you',
      entity_type: 'question',
      intent: 'ask',
    },
    {
      value: 'goodbye',
      entity_type: 'farewell',
      intent: 'farewell',
    },
    {
      value: 'buy',
      entity_type: 'action',
      intent: 'order',
    },
    {
      value: 'cancel',
      entity_type: 'action',
      intent: 'cancel',
    },
    {
      value: 'pizza',
      entity_type: 'food',
      intent: 'order',
    },
    {
      value: 'hamburger',
      entity_type: 'food',
      intent: 'order',
    },
    {
      value: 'water',
      entity_type: 'drink',
      intent: 'order',
    },
    {
      value: 'coke',
      entity_type: 'drink',
      intent: 'order',
    },
  ];

  columns = [
    {
      title: 'Name',
      key: 'value',
      sortable: true,
    },
    {
      title: 'Entity type',
      key: 'entity_type',
      sortable: false,
    },
    {
      title: 'Intent',
      key: 'intent',
      sortable: false,
    },
  ];

  switcherList = [
    { title: 'Section 1', icon: 'magicpen-linear', key: 'key1' },
    { title: 'Section 2', icon: 'milk-linear', key: 'key2' },
  ];

  handleBindingDataChange(data: any) {
    console.log(data);
  }

  handleBindingDataTableChange(data: any) {
    console.log(data);
  }
}
