import fs from 'fs'
import {ROOT_FOLDER} from './constants/rootFolder.js';

import {getLanguages} from './getLanguages.js';
import {getAllFiles} from './getAllFiles.js';
import {getTranslationsFiles} from './getTranslationsFiles.js';
import {checkTranslationsDifferences} from './checkTranslationsDifferences.js';
import {createTranslationsArray} from './createTranslationsArray.js';
import {DEFAULT_LANGUAGE} from './constants/languages.js';

const languages = getLanguages();

const allFiles = getAllFiles(ROOT_FOLDER);

const translationsFiles = getTranslationsFiles(allFiles);

const translations = createTranslationsArray(translationsFiles, languages)


const translationsDifferences = checkTranslationsDifferences(translations)


const totalEnglishTranslations = translations.find(t => t.language === DEFAULT_LANGUAGE).translations.length

let translationsStatusContent = '# Translations status \n'
translationsDifferences.forEach(result => {
    const percentage = (totalEnglishTranslations / 100 * result.differences.length).toFixed(2)
    translationsStatusContent += '## Missing ' + result.differences.length + ' of ' + totalEnglishTranslations + ' translation files for ' + result.language + ' ( ' + percentage + '% )\n'
    if(result.differences.length !== 0){
        result.differences.forEach(diff => translationsStatusContent += '- ' + diff + '\n')
    }
})

fs.writeFileSync('translations-status.md', translationsStatusContent);



// check translations against english