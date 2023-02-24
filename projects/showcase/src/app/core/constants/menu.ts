import { MenuItem } from '../models/menu.model';

export class Menu {
  public static pages: MenuItem[] = [
    {
      group: 'MAIN',
      items: [
        {
          icon: 'assets/icons/outline/lock-closed.svg',
          label: 'Overview',
          route: '/overview',
        },
        {
          icon: 'assets/icons/outline/lock-closed.svg',
          label: 'Build Bots',
          route: '/dashboard',
          children: [
            { label: 'Initializations', route: '/dashboard1' },
            { label: 'Enity types', route: '/dashboard/overview' },
            { label: 'Chatbot', route: '/build-bot/samples' },
          ],
        },
        {
          icon: 'assets/icons/outline/lock-closed.svg',
          label: 'Advanced settings',
          route: '/advanced-settings',
          children: [
            { label: 'initializations', route: '/advanced-settings/bot-setting' },
            { label: 'AI Voicebot', route: '/advanced-settings/bot-setting' },
            { label: 'Chatbot', route: '/advanced-settings/bot-setting' },
          ],
        },
        {
          icon: 'assets/icons/outline/lock-closed.svg',
          label: 'Auto call',
          route: '/auto-call',
          children: [
          ],
        },
        {
          icon: 'assets/icons/outline/lock-closed.svg',
          label: 'Campaigns',
          route: '/campaign-management/choose-scenario',
        },
        {
          icon: 'assets/icons/outline/lock-closed.svg',
          label: 'Make a call',
          route: '/ivr-outbound',
        },
      ],
    },
    {
      group: 'OTHER',
      items: [
        {
          icon: 'assets/icons/outline/lock-closed.svg',
          label: 'Memebers',
          route: '/build-bot',
          children: [
          ],
        },
        {
          icon: 'assets/icons/outline/lock-closed.svg',
          label: 'Statistical Report',
          route: '/build-bot',
          children: [
          ],
        },
        {
          icon: 'assets/icons/outline/lock-closed.svg',
          label: 'Version',
          route: '/build-bot',
          children: [
          ],
        },
        {
          icon: 'assets/icons/outline/lock-closed.svg',
          label: 'Histories',
          route: '/build-bot',
          children: [
          ],
        },
        {
          icon: 'assets/icons/outline/lock-closed.svg',
          label: 'Integrations',
          route: '/build-bot',
          children: [
          ],
        },
      ],
    },
  ];
}
