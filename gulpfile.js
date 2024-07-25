{
  "name": "cat-energy-1",
  "private": true,
  "description": "Личный проект «Кэт энерджи» от HTML Academy",
  "devDependencies": {
    "@htmlacademy/editorconfig-cli": "1.0.0",
    "autoprefixer": "10.4.0",
    "browser-sync": "2.27.7",
    "del": "6.0.0",
    "gulp": "4.0.2",
    "gulp-htmlmin": "^5.0.1",
    "gulp-less": "5.0.0",
    "gulp-libsquoosh": "^1.0.12",
    "gulp-plumber": "1.2.1",
    "gulp-postcss": "9.0.1",
    "gulp-rename": "2.0.0",
    "gulp-svgmin": "^4.1.0",
    "gulp-svgstore": "8.0.0",
    "gulp-terser": "2.1.0",
    "postcss": "8.3.11",
    "postcss-csso": "5.0.1",
    "stylelint": "13.13.1",
    "stylelint-config-htmlacademy": "0.1.11"
  },
  "scripts": {
    "editorconfig": "editorconfig-cli",
    "stylelint": "stylelint \"source/less/**/*.less\" --syntax less",
    "lint": "npm run editorconfig && npm run stylelint",
    "build": "gulp styles",
    "start": "gulp"
  },
  "browserslist": [
    "last 2 versions",
    "not dead",
    "not ie <= 11",
    "not op_mini all",
    "not < 0.25%"
  ],
  "editorconfig-cli": [
    "*.json",
    "*.js",
    "source/*.html",
    "source/js/**/*.js",
    "source/img/**/*.svg",
    "source/less/**/*.less"
  ],
  "engines": {
    "node": "^16"
  },
  "type": "module"
}
