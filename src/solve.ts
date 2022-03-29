import { Page } from "puppeteer";
import getGuess from "./getGuess";

export default async function solve(page: Page): Promise<void> {
	const game = await page.$eval(`game-app`, game => game) as any;

	if (game.gameStatus !== `IN_PROGRESS`) {
		return game;
	}

	await page.keyboard.type(getGuess(game));
	await page.keyboard.press(`Enter`,{delay:6000});

	return await solve(page);
}