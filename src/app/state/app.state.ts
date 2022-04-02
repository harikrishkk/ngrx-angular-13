import { User } from "../models/users.model";

export interface AppState {
  users: ReadonlyArray<User>;
  network: ReadonlyArray<string>;
}
