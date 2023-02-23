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
      action: 'say_hello',
    },
    {
      value: 'how are you',
      entity_type: 'question',
      intent: 'ask',
      action: 'check_feelings',
    },
    {
      value: 'goodbye',
      entity_type: 'farewell',
      intent: 'farewell',
      action: 'say_goodbye',
    },
    {
      value: 'buy',
      entity_type: 'action',
      intent: 'order',
      action: 'place_order',
    },
    {
      value: 'cancel',
      entity_type: 'action',
      intent: 'cancel',
      action: 'cancel_order',
    },
    {
      value: 'pizza',
      entity_type: 'food',
      intent: 'order',
      action: 'place_order',
    },
    {
      value: 'hamburger',
      entity_type: 'food',
      intent: 'order',
      action: 'place_order',
    },
    {
      value: 'water',
      entity_type: 'drink',
      intent: 'order',
      action: 'place_order',
    },
    {
      value: 'coke',
      entity_type: 'drink',
      intent: 'order',
      action: 'place_order',
    },
  ];

  columns = [
    {
      title: 'Value',
      key: 'value',
      sortable: true,
    },
    {
      title: 'Entity type',
      key: 'entity_type',
      sortable: true,
    },
    {
      title: 'Intent',
      key: 'intent',
      sortable: true,
    },
  ];
}
