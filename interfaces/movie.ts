import { Actor, Director, Genre, IBase, ImageUpload } from '.';

export interface Movie extends IBase {
	name: string;
	slug?: string;
	trailer: string;
	likes: string;

	description: string;
	release_date: string;
	running_time: number;
	age_rating_id: number;
	status: number;

	// Response
	posters_full: ImageUpload[];
	backdrops_full: ImageUpload[];
	actors_full?: Actor[];
	directors_full?: Director[];
	genres_full?: Genre[];
}
