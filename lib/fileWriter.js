const fs = require('fs').promises; // Import fs with promises

class FileWriter {
    constructor(filename) {
      this.filename = filename;
    }
  
    async write(data) {
      try {
        await fs.writeFile(this.filename, data);
        console.log(`Generated ${this.filename}`);
      } catch (err) {
        console.error('Error writing file:', err);
      }
    }
  }
  
module.exports = FileWriter;
