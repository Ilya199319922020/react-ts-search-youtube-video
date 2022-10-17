
export interface IVideoCard {
	etag?: string,
	snippet: {
		title: string,
		description: string,
		thumbnails?: {
			default?: {
				url?: string
			}
		},
	}
}