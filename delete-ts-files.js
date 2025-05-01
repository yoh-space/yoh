// Script to delete all TypeScript files that have been converted to JavaScript
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

// Delete a file
function deleteFile(filePath) {
  try {
    fs.unlinkSync(filePath);
    console.log(`Deleted: ${filePath}`);
  } catch (err) {
    console.error(`Error deleting ${filePath}: ${err.message}`);
  }
}

// Find and delete all TypeScript files that have JavaScript equivalents
function deleteConvertedFiles() {
  // Find all TypeScript files
  exec("find . -type f -name \"*.tsx\" -o -name \"*.ts\" | grep -v \"node_modules\" | grep -v \".next\"", (error, stdout, stderr) => {
    if (error) {
      console.error(`Error finding TypeScript files: ${error.message}`);
      return;
    }
    
    const tsFiles = stdout.split('\n').filter(file => file.trim() !== '');
    
    // Check each TypeScript file for a JavaScript equivalent
    tsFiles.forEach(tsFile => {
      try {
        // Skip next-env.d.ts - we'll keep this file
        if (tsFile.includes('next-env.d.ts')) {
          console.log(`Skipping: ${tsFile}`);
          return;
        }
        
        // Check if the corresponding JS/JSX file exists
        const jsFile = tsFile.replace(/\.tsx$/, '.jsx').replace(/\.ts$/, '.js');
        
        if (fs.existsSync(jsFile)) {
          // If the JavaScript version exists, delete the TypeScript version
          deleteFile(tsFile);
        } else {
          console.log(`No JavaScript equivalent found for: ${tsFile}`);
        }
      } catch (err) {
        console.error(`Error processing ${tsFile}: ${err.message}`);
      }
    });
    
    console.log('Deletion complete!');
  });
}

// Run the deletion
deleteConvertedFiles(); 