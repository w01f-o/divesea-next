export class Route {
  private readonly _path: string;
  private readonly _name: string;
  private readonly _inNavBar: boolean = false;

  constructor(path: string, name: string, inNavBar: boolean = true) {
    this._path = path;
    this._name = name;
    this._inNavBar = inNavBar;
  }

  get path(): string {
    return this._path;
  }

  get name(): string {
    return this._name;
  }

  get inNavBar(): boolean {
    return this._inNavBar;
  }
}

export const routes = [
  new Route("/", "home", false),
  new Route("/discover", "discover"),
  new Route("/creators", "creators"),
  new Route("/sell", "sell"),
  new Route("/stats", "stats"),
];
