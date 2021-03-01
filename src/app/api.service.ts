export abstract class ApiService {
  private _url = 'http://localhost:3030';

  get url(): string {
    return this._url;
  }
}
