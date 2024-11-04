import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Naseem';

export const lastName = 'Haidar';

export const description =
	'Welcome to my portfolio! I’m Naseem Haidar, a Data Analyst and Safety Specialist with a passion for transforming complex data into actionable insights that drive efficiency and safety. With a background in IT, emergency medical services, and data analysis, I’m skilled at solving real-world challenges through data-driven decision-making and cross-functional collaboration. Explore my projects to see how I combine analytical expertise and innovative problem-solving to deliver impactful results across various fields.';

export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/oexwashere' },
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/in/naseemhaidar/'
	},
	{
		platform: Platform.Twitter,
		link: 'https://twitter.com/oexwashere'
	},
	{
		platform: Platform.StackOverflow,
		link: 'https://stackoverflow.com/users/28129551/oex'
	},
	{
		platform: Platform.Email,
		link: 'contact@nhaidar.dev'
	},
	{
		platform: Platform.Youtube,
		link: 'https://www.youtube.com/oexwashere'
	},
];

export const skills = getSkills('js', 'css', 'html', 'reactjs', 'sass', 'svelte', 'ts');
