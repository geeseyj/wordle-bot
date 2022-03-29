import puppeteer, { Page } from 'puppeteer';

export default async function getPage(): Promise<Page> {
	console.log(`getting browser`);
	const browser = await puppeteer.launch({headless: true});

	console.log(`getting page`);
	const page = await browser.newPage();
	
	console.log(`going to Wordle site`);
	await page.goto(`https://www.nytimes.com/games/wordle/index.html`);

	return page;
}