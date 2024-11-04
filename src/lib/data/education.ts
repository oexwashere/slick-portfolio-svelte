import type { Education } from '../types';
import Assets from './assets';

export const items: Array<Education> = [
	{
		degree: 'Bachelor degree of Networking and Security (CCNA Pathway)',
		description: '',
		location: 'Utah, USA',
		logo: Assets.Unknown,
		name: '',
		organization: 'WGU',
		period: { from: new Date(2023, 1, 1), to: new Date(2026, 12, 26) },
		shortDescription: '',
		slug: 'dummy-education-item',
		subjects: ['C', 'Algorithm', 'Algebra', 'Python', 'C++', 'Java', 'English', 'Networking', 'Security']
	},
	{
		degree: 'High School Diploma',
		description: '',
		location: 'Bessemer, USA',
		logo: Assets.Unknown,
		name: '',
		organization: 'Oak Grove High School',
		period: { from: new Date(2014, 1, 1), to: new Date(2018, 5, 20) },
		shortDescription: '',
		slug: 'dummy-education-item-2',
		subjects: [ 'Math', 'Algebra', 'English', 'Adobe', 'Microsoft Office']
	}
];

export const title = 'Education';
