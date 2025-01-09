const fs = require('fs-extra');

const source = '../frontend/dist';
const destination = '../staticfiles/';

fs.copy(source, destination, (err) => {
  if (err) {
    console.error('Error copiando archivos:', err);
  } else {
    console.log('Archivos copiados exitosamente a staticfiles!');
  }
});
