System.config({
  "paths": {
    "*": "*.js",
    "app/*": "app/*.js",
    "github:*": "jspm_packages/github/*.js"
  }
});

System.config({
  "map": {
    "d3": "github:mbostock/d3@3.5.3",
    "stats.js": "github:mrdoob/stats.js@master",
    "three.js": "github:mrdoob/three.js@master"
  }
});

