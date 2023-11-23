export interface UserRepository {
  login(username: string, password: string): any;
}
