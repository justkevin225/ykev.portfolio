export default class AuthenticationService {
  static isAuthenticated: boolean = false;

  static login(username: string, password: string): Promise<boolean> {
    const isAuthenticated =
      username === "justkevin225" && password === "lol55555";

    return new Promise((resolve) => {
      setTimeout(() => {
        this.isAuthenticated = isAuthenticated;
        resolve(isAuthenticated);
      }, 5000);
    });
  }
}
