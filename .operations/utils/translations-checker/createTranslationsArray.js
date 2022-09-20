import {DEFAULT_LANGUAGE} from './constants/languages.js';

export const createTranslationsArray = (translationsFiles, languages) => {
    const translations = languages.map(language => ({language, translations: []}))

    translationsFiles.forEach(file => {
        const expectedLanguage = file.fileNameParts[file.fileNameParts.length - 2]
        let language = languages.includes(expectedLanguage) ? expectedLanguage : DEFAULT_LANGUAGE
        const normalizedFileNamePartIndex = language === DEFAULT_LANGUAGE ? 1 : 2
        const normalizedFileName = file.fileNameParts.splice(0, file.fileNameParts.length - normalizedFileNamePartIndex).join('.')
        const languageIndex = languages.indexOf(language)
        translations[languageIndex].translations.push({...file, normalizedFileName})
    })

    return translations;
}