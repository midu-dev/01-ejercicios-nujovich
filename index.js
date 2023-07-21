const { writeFile } = require("./01-ejercicio");

const filePath = process.argv[2];
const content = process.argv[3];

writeFile(filePath, content, (err, message) => {
  if (err) {
    console.error("Ärchivo no encontrado, se creará uno nuevo");
  } else {
    console.log(message);
  }
});
