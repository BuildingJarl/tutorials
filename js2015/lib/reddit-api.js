import jsonp from 'jsonp'


class RedditApi {

	constructor() {
		this.redditURL = "http://www.reddit.com/r/perfectloops/top.json?sort=top&t=week"
	}

	load() {
		return new Promise((resolve, reject) => {
			jsonp(this.redditURL, {param: 'jsonp'}, (err, data) => {
				err ? reject(err) : resolve(data.data.children)
			})
		})
	}
}

//exposes a siongleton to rest of app
export default new RedditApi()