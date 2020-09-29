export class RenderUrls {
	constructor(olEl, urls) {
		this.urls = urls;
		this.olEl = olEl;
	}

	makeList() {
		const liEl = document.createElement('li');
		const aEl = document.createElement('a');
		aEl.href = this.urls.url;
		aEl.target = '_blank';
		aEl.innerHTML = this.urls.repoName;
		liEl.appendChild(aEl);
		this.olEl.appendChild(liEl);
	}

	static removeChildElement(parent) {
		while (parent.firstChild) {
			parent.removeChild(parent.firstChild);
		}
	}
}
