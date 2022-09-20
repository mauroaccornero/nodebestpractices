import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const getAllFiles = (dirPath, arrayOfFiles) => {
    const allFiles = fs.readdirSync(dirPath)

    arrayOfFiles = arrayOfFiles || []

    allFiles.forEach(function(file) {
        if (fs.statSync(dirPath + '/' + file).isDirectory()) {
            arrayOfFiles = getAllFiles(dirPath + '/' + file, arrayOfFiles)
        } else {
            const fileNameParts = file.toLowerCase().split('.');
            arrayOfFiles.push({path: path.join(__dirname, dirPath, '/', file), name: file.toLowerCase(), fileNameParts})
        }
    })

    return arrayOfFiles
}