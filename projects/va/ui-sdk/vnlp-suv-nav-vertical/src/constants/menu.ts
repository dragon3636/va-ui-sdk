import { MenuItem } from '../models/menu.model';

export class Menu {
  public static pages: MenuItem[] = [
    {
      group: 'MAIN',
      items: [
        {
          icon: 'activity-linear',
          label: 'Overview',
          route: '/overview',
        },
        {
          icon: 'emoji-normal-linear',
          label: 'Build Bots',
          route: '/build-bot',
          children: [
            { label: 'Initializations', route: '/build-bot/initializations' },
            { label: 'Enity types', route: '/build-bot/daterange' },
            { label: 'Chatbot', route: '/build-bot/samples' },
          ],
        },
        {
          icon: 'setting-4-linear',
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
          icon: 'microphone-2-linear',
          label: 'Auto call',
          route: '/auto-call',
          children: [],
        },
        {
          icon: 'flag-linear',
          label: 'Campaigns',
          route: '/campaign-management/choose-scenario',
        },
        {
          icon: 'call-linear',
          label: 'Make a call',
          route: '/ivr-outbound',
        },
      ],
    },
    {
      group: 'OTHER',
      items: [
        {
          icon: 'personalcard-linear',
          label: 'Memebers',
          route: '/build-bots',
          children: [],
        },
        {
          icon: 'presention-chart-linear',
          label: 'Statistical Report',
          route: '/build-bots',
          children: [],
        },
        {
          icon: 'info-circle-linear',
          label: 'Version',
          route: '/build-bots',
          children: [],
        },
        {
          icon: 'clock-linear',
          label: 'Histories',
          route: '/build-bots',
          children: [],
        },
        {
          icon: '3dcube-linear',
          label: 'Integrations',
          route: '/build-bots',
          children: [],
        },
      ],
    },
  ];
}
