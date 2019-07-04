import { BaseGenerator } from './base';

export class Pm2ConfigJsonGenerator extends BaseGenerator {
  contents = `{
  "apps": [
    {
      "name": "Convector Autogenerated Server",
      "script": "./dist/app.js",
      "node_args": "--inspect=0.0.0.0:8888",
      "error_file": "../log/error.log",
      "out_file": "../log/access.log",
      "env": {},
      "watch": [
        "src",
        "dist",
        "node_modules",
        ".env"
      ]
    }
  ]
}`;

  constructor(filename: string, path: string) {
    super(filename, path);
  }
}