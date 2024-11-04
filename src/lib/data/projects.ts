import type { Project } from '../types';
import Assets from './assets';
import { getSkills } from './skills';

export const items: Array<Project> = [
	{
		slug: 'React-Portfolio',
		color: '#5e95e3',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
		shortDescription:
			'React Portfolio and resume holder created with React, TypeScript, and Tailwind CSS.',
		links: [{ to: 'https://one-portfolio-rho.vercel.app/', label: 'Demo' }],
		logo: Assets.ReactJs,
		name: 'React Portfolio',
		period: {
			from: new Date(2023, 8, 26)
		},
		skills: getSkills( 'ts', 'tailwind', 'reactjs', 'css'),
		type: 'Website Template',
		screenshots: [
			{
				label: 'Home Section',
				src: 'https://i.imgur.com/1YMociH.png'
			},
			{
				label: 'About Me Section',
				src: 'https://i.imgur.com/nSZBBVl.png'
			},
			{
				label: 'Projects Section',
				src: 'https://i.imgur.com/4kUUWS6.png'
			},
			{
				label: 'Experience Section',
				src: 'https://i.imgur.com/7SxC9SP.png'
			},
			{
				label: 'Contact Section',
				src: 'https://i.imgur.com/fFm31kt.png'
			}
		]
	},
	{
		slug: 'slick-portfolio-svelte',
		color: '#ff3e00',
		description:
			'A Vercel-like developer portfolio website template made with Typescript and SvelteKit.',
		shortDescription:
			'A Vercel-like developer portfolio website template made with Typescript and SvelteKit.',
		links: [{ to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' }],
		logo: Assets.Svelte,
		name: 'Slick Portfolio',
		period: {
			from: new Date()
		},
		skills: getSkills('svelte', 'ts', 'tailwind', 'sass'),
		type: 'Website Template',
		screenshots: [
			{
				label: 'Home Section',
				src: 'https://i.imgur.com/1YMociH.png'
			},
			{
				label: 'About Me Section',
				src: 'https://i.imgur.com/nSZBBVl.png'
			},
			{
				label: 'Projects Section',
				src: 'https://i.imgur.com/4kUUWS6.png'
			},
			{
				label: 'Experience Section',
				src: 'https://i.imgur.com/7SxC9SP.png'
			},
			{
				label: 'Contact Section',
				src: 'https://i.imgur.com/fFm31kt.png'
			}
		]
	}
];

export const title = 'Projects';
