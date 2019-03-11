# transformacja js
babel --presets react,es2015 js\source\ -d js\build
# pakowanie js
browserify js\build\app.js -o bundle.js
# pakowanie css

# gotowe
date; echo;
