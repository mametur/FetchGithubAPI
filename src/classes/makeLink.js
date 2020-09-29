/* generate url for live page */

export class GenerateUrl {
	http = 'https://';
	github = '.github.io/';

	constructor(userName, repoName) {
		this.userName = userName;
		this.repoName = repoName;
	}

	get makeUrl() {
		return { url: `${this.http}${this.userName}${this.github}${this.repoName}`, repoName: this.repoName };
	}
}
