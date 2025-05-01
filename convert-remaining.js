// Simple script to convert remaining TypeScript files
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

// Helper function to read a file
function readFile(filePath) {
  return fs.readFileSync(filePath, 'utf8');
}

// Helper function to write a file
function writeFile(filePath, content) {
  fs.writeFileSync(filePath, content, 'utf8');
}

// Helper function to convert a TypeScript file to JavaScript
function convertTsToJs(filePath) {
  const content = readFile(filePath);
  
  // Get the new file path (.tsx -> .jsx or .ts -> .js)
  const newPath = filePath.replace(/\.tsx$/, '.jsx').replace(/\.ts$/, '.js');
  
  // Convert TypeScript syntax to JavaScript
  let newContent = content
    // Remove interface and type declarations
    .replace(/interface\s+\w+\s*\{[\s\S]*?\}/g, '')
    .replace(/type\s+\w+\s*=[\s\S]*?;/g, '')
    // Remove type annotations in function parameters and variables
    .replace(/:\s*([A-Za-z0-9_<>[\]|&(){}.,\s]+)(?=(,|\)|\s|=))/g, '')
    // Remove generic type parameters
    .replace(/<([^<>]+)>/g, '')
    // Remove return type annotations
    .replace(/\)\s*:\s*([A-Za-z0-9_<>[\]|&(){}.,\s]+)\s*=>/g, ') =>')
    // Clean up any double spaces created by the replacements
    .replace(/\s{2,}/g, ' ');

  // Add PropTypes if it's a component
  if (newPath.endsWith('.jsx')) {
    // Simple heuristic to detect if it's a component
    if (content.includes('React.') || content.includes('function') || content.includes('=>')) {
      // Don't add PropTypes import if it's already there
      if (!newContent.includes("import PropTypes from 'prop-types'")) {
        // Add PropTypes import after the last import statement
        const lastImportIndex = newContent.lastIndexOf('import');
        if (lastImportIndex !== -1) {
          const importEnd = newContent.indexOf(';', lastImportIndex) + 1;
          newContent = 
            newContent.slice(0, importEnd) + 
            "\nimport PropTypes from 'prop-types';" + 
            newContent.slice(importEnd);
        }
      }
    }
  }

  // Write the new file
  writeFile(newPath, newContent);
  console.log(`Converted ${filePath} to ${newPath}`);
  
  return newPath;
}

// Convert all files
function convertAllTsFiles() {
  // Find all TypeScript files (excluding node_modules and .next)
  exec("find . -type f -name \"*.tsx\" -o -name \"*.ts\" | grep -v \"node_modules\" | grep -v \".next\"", (error, stdout, stderr) => {
    if (error) {
      console.error(`Error finding TypeScript files: ${error.message}`);
      return;
    }
    
    const files = stdout.split('\n').filter(file => file.trim() !== '');
    
    // Convert each file
    files.forEach(file => {
      try {
        // Skip next-env.d.ts and files in .next directory
        if (file.includes('next-env.d.ts') || file.includes('/.next/')) {
          console.log(`Skipping ${file}`);
          return;
        }
        
        convertTsToJs(file);
      } catch (err) {
        console.error(`Error converting ${file}: ${err.message}`);
      }
    });
    
    console.log('Conversion complete!');
  });
}

// Run the conversion
convertAllTsFiles(); 