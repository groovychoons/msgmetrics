import { Metric } from './metric';

export const MOCK_DATA: Metric[] = [
{
	id: 1,
	title: 'Conversion Rate',
	previous: 3.6,
	current: 4.2,
	chartData: 'conversionChartData',
	chartLabels: 'ConversionLabels',
},
{
	id: 2,
	title: 'Bounce Rate',
	previous: 54.0,
	current: 53.9,
	chartData: 'bounceChartData',
	chartLabels: 'BounceLabels',
},
{
	id: 3,
	title: 'Visitors',
	previous: 4000,
	current: 3986,
	chartData: 'visitorChartData',
	chartLabels: 'VisitorLabels',
},
{
	id: 4,
	title: 'Revenue',
	previous: 10899,
	current: 12098,
	chartData: 'revenueChartData',
	chartLabels: 'RevenueLabels',
},
];
