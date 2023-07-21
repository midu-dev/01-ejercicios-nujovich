const fs = require("node:fs");
const path = require("node:path");

// Ejercicio 2
async function writeFile(filePath, content, callback) {
  const file = path.join(__dirname, filePath);
  fs.writeFile(file, content, (err) => {
    if (err) {
      fs.mkdir(path.dirname(file), { recursive: true }, (err) => {
        if (err) {
          callback(err);
          return;
        }
        console.log("Directorio creado con éxito");
        fs.writeFile(file, content, (err) => {
          if (err) {
            callback(err);
            return;
          }
          callback(null, "El contenido fue escrito con éxito");
        });
      });
      callback(err);
      return;
    }
    callback(null, "El contenido fue escrito con éxito");
  });
}

// Ejercicio 3
async function readFileAndCount(word, callback) {}

module.exports = {
  writeFile,
  readFileAndCount,
};
