import { Component, OnInit, Input } from '@angular/core';

type Status = 'offline' | 'online';

@Component({
  selector: 'vnlp-avatar',
  templateUrl: './vnlp-avatar.component.html',
  styleUrls: ['./vnlp-avatar.component.scss'],
})
export class VnlpAvatarComponent implements OnInit {
  @Input() imgUrl: string =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNL_ZnOTpXSvhf1UaK7beHey2BX42U6solRA&usqp=CAU';
  @Input() status: Status = 'offline';

  constructor() {}

  ngOnInit(): void {}
}
