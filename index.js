const fs = require("node:fs");
const path = require("node:path");

// Ejercicio 2
async function writeFile(filePath, content, callback) {
  const dir = path.dirname(filePath);
  fs.mkdir(dir, { recursive: true }, (err) => {
    if (err) {
      callback(new Error("No se pudo crear el directorio"));
      return;
    }
    console.log("Directorio creado con éxito");
    fs.writeFile(filePath, content, (err) => {
      if (err) {
        callback(err);
        return;
      }
      callback(null, "El contenido fue escrito con éxito");
    });
  });
}

// Ejercicio 3
async function readFileAndCount(word, callback) {
  const path = process.argv[2];
  if (!path) {
    callback(new Error("No se ha especificado el path del archivo"));
    return;
  }
  if (!word) {
    callback(new Error("No se ha especificado la palabra a buscar"));
    return;
  }

  fs.readFile(path, "utf-8", (err, data) => {
    if (err) {
      callback(null, 0);
      return;
    }
    const count = data.split(word).length - 1;
    callback(null, count);
  });
}

module.exports = {
  writeFile,
  readFileAndCount,
};
