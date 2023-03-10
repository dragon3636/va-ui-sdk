import { MenuItem } from '../models/menu.model';

export class Menu {
  public static pages: MenuItem[] = [
    {
      group: 'MAIN',
      items: [
        {
          icon: 'flip-chart-filled',
          label: 'Overview',
          route: '/overview',
        },
        {
          icon: 'android-filled',
          label: 'Build Bots',
          route: '/build-bot',
          children: [
            { label: 'Initializations', route: '/build-bot/initializations' },
            { label: 'Enity types', route: '/build-bot/daterange' },
            { label: 'Chatbot', route: '/build-bot/samples' },
          ],
        },
        {
          icon: 'settings-01-line',
          label: 'Advanced settings',
          route: '/advanced-settings',
          children: [
            {
              label: 'initializations',
              route: '/advanced-settings/bot-setting',
            },
            { label: 'AI Voicebot', route: '/advanced-settings/bot-setting' },
            { label: 'Chatbot', route: '/advanced-settings/bot-setting' },
          ],
        },
        {
          icon: 'phone-line',
          label: 'Auto call',
          route: '/auto-call',
          children: [],
        },
        {
          icon: 'flag-line',
          label: 'Campaigns',
          route: '/campaign-management/choose-scenario',
        },
        {
          icon: 'mobile-line',
          label: 'Make a call',
          route: '/ivr-outbound',
        },
      ],
    },
    {
      group: 'OTHER',
      items: [
        {
          icon: 'assets/icon/lock-closed.svg',
          label: 'Memebers',
          route: '/build-bots',
          children: [],
        },
        {
          icon: 'assets/icon/lock-closed.svg',
          label: 'Statistical Report',
          route: '/build-bots',
          children: [],
        },
        {
          icon: 'assets/icon/lock-closed.svg',
          label: 'Version',
          route: '/build-bots',
          children: [],
        },
        {
          icon: 'assets/icon/lock-closed.svg',
          label: 'Histories',
          route: '/build-bots',
          children: [],
        },
        {
          icon: 'assets/icon/lock-closed.svg',
          label: 'Integrations',
          route: '/build-bots',
          children: [],
        },
      ],
    },
  ];
}
