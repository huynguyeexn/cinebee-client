import { IBase, Movie, Room } from '.';

export interface Showtime extends IBase {
	movie_id: number;
	room_id: number;
	end: string;
	start: string;
	movie: Movie;
	room: Room;
}

export interface ShowTimeGroupDate {
	[key: string]: Showtime[];
}
