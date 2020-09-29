import { GenerateUrl } from '../classes/makeLink.js';
import { RenderUrls } from '../classes/renderUrls.js';
export const storeUrls = [];

const OlElement = document.getElementById('urls'); // urls will append here
const parentDiv = document.getElementById('url_container');

export const fetchGithubProjects = () => {
	// Fetch Api
	const url = 'https://api.github.com/users/mametur/starred';

	// error handler
	function CheckError(response) {
		if (response.status >= 200 && response.status <= 299) {
			return response.json();
		} else {
			throw Error(response.statusText);
		}
	}

	// Now call the function inside fetch promise resolver
	fetch(url)
		.then(CheckError)
		.then((jsonResponse) => {
			console.log(jsonResponse);
			storeUrls.length > 0 ? (storeUrls = []) : storeUrls;
			jsonResponse.forEach((starredRepo) => {
				const newUrl = new GenerateUrl(starredRepo.owner.login, starredRepo.name);

				storeUrls.push(newUrl.makeUrl);
			});
			console.log(storeUrls);
			parentDiv.style.background = '#5693d2';
			RenderUrls.removeChildElement(OlElement); // for second click like refresh
			storeUrls.forEach((showUrl) => {
				const showUrls = new RenderUrls(OlElement, showUrl);
				showUrls.makeList();
			});
		})
		.catch((error) => {});
};
