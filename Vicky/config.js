System.config({
  "paths": {
    "*": "*.js",
    "app/*": "app/*.js",
    "github:*": "jspm_packages/github/*.js"
  }
});

System.config({
  "map": {
    "Stats": "github:mrdoob/stats.js@master/build/stats.min",
    "THREE": "github:mrdoob/three.js@master/build/three"
  }
});

