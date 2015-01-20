System.config({
  "paths": {
    "*": "*.js",
    "app/*": "app/*.js",
    "github:*": "jspm_packages/github/*.js"
  }
});

System.config({
  "map": {
    "stats.js": "github:mrdoob/stats.js@master",
    "three.js": "github:mrdoob/three.js@master"
  }
});

