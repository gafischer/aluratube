export const youtubeRegex =
	/^(?:(?:https|http):\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be).*?(?:\/|v\/|u\/|embed\/|shorts\/|watch\?v=|(?<username>user\/))(?<id>[\w-]{11})(?:\?|&|$)/;

export function youtubeTest(url) {
	return youtubeRegex.test(url);
}

export function youtubeMatch(url) {
	return url.match(youtubeRegex);
}
