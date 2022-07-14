
export default class AccueilServices {
  static isDev =
    !process.env.NODE_ENV || process.env.NODE_ENV === "development";

  static getAccueilText() {
    if (this.isDev) {
      return fetch("http://localhost:3001/AccueilText")
        .then((response) => response.json())
        .catch((error) => this.handleError(error));
    }
  }
  static getAccueilImg() {
    if (this.isDev) {
      return fetch("http://localhost:3001/AccueilImg")
        .then((response) => response.json())
        .catch((error) => this.handleError(error));
    }
  }
  static isEmpty(data) {
    return Object.keys(data).length === 0;
  }

  static handleError(error) {
    console.error(error);
  }
}
