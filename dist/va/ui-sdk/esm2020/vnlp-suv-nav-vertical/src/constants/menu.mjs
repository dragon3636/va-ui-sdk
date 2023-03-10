export class Menu {
}
Menu.pages = [
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3ZhL3VpLXNkay92bmxwLXN1di1uYXYtdmVydGljYWwvc3JjL2NvbnN0YW50cy9tZW51LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE1BQU0sT0FBTyxJQUFJOztBQUNELFVBQUssR0FBZTtJQUNoQztRQUNFLEtBQUssRUFBRSxNQUFNO1FBQ2IsS0FBSyxFQUFFO1lBQ0w7Z0JBQ0UsSUFBSSxFQUFFLGlCQUFpQjtnQkFDdkIsS0FBSyxFQUFFLFVBQVU7Z0JBQ2pCLEtBQUssRUFBRSxXQUFXO2FBQ25CO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLHFCQUFxQjtnQkFDM0IsS0FBSyxFQUFFLFlBQVk7Z0JBQ25CLEtBQUssRUFBRSxZQUFZO2dCQUNuQixRQUFRLEVBQUU7b0JBQ1IsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLDRCQUE0QixFQUFFO29CQUNqRSxFQUFFLEtBQUssRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLHNCQUFzQixFQUFFO29CQUN2RCxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLG9CQUFvQixFQUFFO2lCQUNsRDthQUNGO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLGtCQUFrQjtnQkFDeEIsS0FBSyxFQUFFLG1CQUFtQjtnQkFDMUIsS0FBSyxFQUFFLG9CQUFvQjtnQkFDM0IsUUFBUSxFQUFFO29CQUNSO3dCQUNFLEtBQUssRUFBRSxpQkFBaUI7d0JBQ3hCLEtBQUssRUFBRSxnQ0FBZ0M7cUJBQ3hDO29CQUNELEVBQUUsS0FBSyxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsZ0NBQWdDLEVBQUU7b0JBQ2pFLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsZ0NBQWdDLEVBQUU7aUJBQzlEO2FBQ0Y7WUFDRDtnQkFDRSxJQUFJLEVBQUUscUJBQXFCO2dCQUMzQixLQUFLLEVBQUUsV0FBVztnQkFDbEIsS0FBSyxFQUFFLFlBQVk7Z0JBQ25CLFFBQVEsRUFBRSxFQUFFO2FBQ2I7WUFDRDtnQkFDRSxJQUFJLEVBQUUsYUFBYTtnQkFDbkIsS0FBSyxFQUFFLFdBQVc7Z0JBQ2xCLEtBQUssRUFBRSxzQ0FBc0M7YUFDOUM7WUFDRDtnQkFDRSxJQUFJLEVBQUUsYUFBYTtnQkFDbkIsS0FBSyxFQUFFLGFBQWE7Z0JBQ3BCLEtBQUssRUFBRSxlQUFlO2FBQ3ZCO1NBQ0Y7S0FDRjtJQUNEO1FBQ0UsS0FBSyxFQUFFLE9BQU87UUFDZCxLQUFLLEVBQUU7WUFDTDtnQkFDRSxJQUFJLEVBQUUscUJBQXFCO2dCQUMzQixLQUFLLEVBQUUsVUFBVTtnQkFDakIsS0FBSyxFQUFFLGFBQWE7Z0JBQ3BCLFFBQVEsRUFBRSxFQUFFO2FBQ2I7WUFDRDtnQkFDRSxJQUFJLEVBQUUseUJBQXlCO2dCQUMvQixLQUFLLEVBQUUsb0JBQW9CO2dCQUMzQixLQUFLLEVBQUUsYUFBYTtnQkFDcEIsUUFBUSxFQUFFLEVBQUU7YUFDYjtZQUNEO2dCQUNFLElBQUksRUFBRSxvQkFBb0I7Z0JBQzFCLEtBQUssRUFBRSxTQUFTO2dCQUNoQixLQUFLLEVBQUUsYUFBYTtnQkFDcEIsUUFBUSxFQUFFLEVBQUU7YUFDYjtZQUNEO2dCQUNFLElBQUksRUFBRSxjQUFjO2dCQUNwQixLQUFLLEVBQUUsV0FBVztnQkFDbEIsS0FBSyxFQUFFLGFBQWE7Z0JBQ3BCLFFBQVEsRUFBRSxFQUFFO2FBQ2I7WUFDRDtnQkFDRSxJQUFJLEVBQUUsZUFBZTtnQkFDckIsS0FBSyxFQUFFLGNBQWM7Z0JBQ3JCLEtBQUssRUFBRSxhQUFhO2dCQUNwQixRQUFRLEVBQUUsRUFBRTthQUNiO1NBQ0Y7S0FDRjtDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNZW51SXRlbSB9IGZyb20gJy4uL21vZGVscy9tZW51Lm1vZGVsJztcclxuXHJcbmV4cG9ydCBjbGFzcyBNZW51IHtcclxuICBwdWJsaWMgc3RhdGljIHBhZ2VzOiBNZW51SXRlbVtdID0gW1xyXG4gICAge1xyXG4gICAgICBncm91cDogJ01BSU4nLFxyXG4gICAgICBpdGVtczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGljb246ICdhY3Rpdml0eS1saW5lYXInLFxyXG4gICAgICAgICAgbGFiZWw6ICdPdmVydmlldycsXHJcbiAgICAgICAgICByb3V0ZTogJy9vdmVydmlldycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpY29uOiAnZW1vamktbm9ybWFsLWxpbmVhcicsXHJcbiAgICAgICAgICBsYWJlbDogJ0J1aWxkIEJvdHMnLFxyXG4gICAgICAgICAgcm91dGU6ICcvYnVpbGQtYm90JyxcclxuICAgICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgIHsgbGFiZWw6ICdJbml0aWFsaXphdGlvbnMnLCByb3V0ZTogJy9idWlsZC1ib3QvaW5pdGlhbGl6YXRpb25zJyB9LFxyXG4gICAgICAgICAgICB7IGxhYmVsOiAnRW5pdHkgdHlwZXMnLCByb3V0ZTogJy9idWlsZC1ib3QvZGF0ZXJhbmdlJyB9LFxyXG4gICAgICAgICAgICB7IGxhYmVsOiAnQ2hhdGJvdCcsIHJvdXRlOiAnL2J1aWxkLWJvdC9zYW1wbGVzJyB9LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGljb246ICdzZXR0aW5nLTQtbGluZWFyJyxcclxuICAgICAgICAgIGxhYmVsOiAnQWR2YW5jZWQgc2V0dGluZ3MnLFxyXG4gICAgICAgICAgcm91dGU6ICcvYWR2YW5jZWQtc2V0dGluZ3MnLFxyXG4gICAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGxhYmVsOiAnaW5pdGlhbGl6YXRpb25zJyxcclxuICAgICAgICAgICAgICByb3V0ZTogJy9hZHZhbmNlZC1zZXR0aW5ncy9ib3Qtc2V0dGluZycsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHsgbGFiZWw6ICdBSSBWb2ljZWJvdCcsIHJvdXRlOiAnL2FkdmFuY2VkLXNldHRpbmdzL2JvdC1zZXR0aW5nJyB9LFxyXG4gICAgICAgICAgICB7IGxhYmVsOiAnQ2hhdGJvdCcsIHJvdXRlOiAnL2FkdmFuY2VkLXNldHRpbmdzL2JvdC1zZXR0aW5nJyB9LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGljb246ICdtaWNyb3Bob25lLTItbGluZWFyJyxcclxuICAgICAgICAgIGxhYmVsOiAnQXV0byBjYWxsJyxcclxuICAgICAgICAgIHJvdXRlOiAnL2F1dG8tY2FsbCcsXHJcbiAgICAgICAgICBjaGlsZHJlbjogW10sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpY29uOiAnZmxhZy1saW5lYXInLFxyXG4gICAgICAgICAgbGFiZWw6ICdDYW1wYWlnbnMnLFxyXG4gICAgICAgICAgcm91dGU6ICcvY2FtcGFpZ24tbWFuYWdlbWVudC9jaG9vc2Utc2NlbmFyaW8nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWNvbjogJ2NhbGwtbGluZWFyJyxcclxuICAgICAgICAgIGxhYmVsOiAnTWFrZSBhIGNhbGwnLFxyXG4gICAgICAgICAgcm91dGU6ICcvaXZyLW91dGJvdW5kJyxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgZ3JvdXA6ICdPVEhFUicsXHJcbiAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWNvbjogJ3BlcnNvbmFsY2FyZC1saW5lYXInLFxyXG4gICAgICAgICAgbGFiZWw6ICdNZW1lYmVycycsXHJcbiAgICAgICAgICByb3V0ZTogJy9idWlsZC1ib3RzJyxcclxuICAgICAgICAgIGNoaWxkcmVuOiBbXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGljb246ICdwcmVzZW50aW9uLWNoYXJ0LWxpbmVhcicsXHJcbiAgICAgICAgICBsYWJlbDogJ1N0YXRpc3RpY2FsIFJlcG9ydCcsXHJcbiAgICAgICAgICByb3V0ZTogJy9idWlsZC1ib3RzJyxcclxuICAgICAgICAgIGNoaWxkcmVuOiBbXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGljb246ICdpbmZvLWNpcmNsZS1saW5lYXInLFxyXG4gICAgICAgICAgbGFiZWw6ICdWZXJzaW9uJyxcclxuICAgICAgICAgIHJvdXRlOiAnL2J1aWxkLWJvdHMnLFxyXG4gICAgICAgICAgY2hpbGRyZW46IFtdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWNvbjogJ2Nsb2NrLWxpbmVhcicsXHJcbiAgICAgICAgICBsYWJlbDogJ0hpc3RvcmllcycsXHJcbiAgICAgICAgICByb3V0ZTogJy9idWlsZC1ib3RzJyxcclxuICAgICAgICAgIGNoaWxkcmVuOiBbXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGljb246ICczZGN1YmUtbGluZWFyJyxcclxuICAgICAgICAgIGxhYmVsOiAnSW50ZWdyYXRpb25zJyxcclxuICAgICAgICAgIHJvdXRlOiAnL2J1aWxkLWJvdHMnLFxyXG4gICAgICAgICAgY2hpbGRyZW46IFtdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gIF07XHJcbn1cclxuIl19