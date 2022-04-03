import { Movie } from "../models/movies.model";
import { User } from "../models/users.model";

export interface AppState {
  users: ReadonlyArray<User>;
  network: ReadonlyArray<string>;
  movies: ReadonlyArray<Movie>;
}
