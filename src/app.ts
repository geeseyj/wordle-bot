import getPage from "./getPage";
import solve from "./solve";
import run from './solve';

(async () => {
	console.log(`Firing up...`);
	const page = await getPage();

	console.log(`Launching solver...`);

	console.log(await solve(page));
	console.log(`Exiting...`);
	page.browser().close();
})();