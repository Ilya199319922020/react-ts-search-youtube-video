

export interface IVideoCard {
  
	etag?: string;
	snippet: {
		title: string;
		description: string | undefined;
		thumbnails?: {
			default?: {
				url?: string;
			}
		},
	}
}