import fs from 'fs'
import {DEFAULT_LANGUAGE} from './constants/languages.js';
import {ROOT_FOLDER} from './constants/rootFolder.js';

export const getLanguages = () => {
    const languages = [DEFAULT_LANGUAGE];
    const allFiles = fs.readdirSync(ROOT_FOLDER)

    allFiles.forEach(file => {
        const fileNameParts = file.toLowerCase().split('.');
        if(fileNameParts.length === 3 && fileNameParts[2] === 'md'){
                languages.push(fileNameParts[1])
            }
    })

    return languages;
}