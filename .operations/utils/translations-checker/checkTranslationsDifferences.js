import {DEFAULT_LANGUAGE} from './constants/languages.js';

export const checkTranslationsDifferences = (translations) => {
    const englishTranslationsFileNames = translations.find(translation => translation.language === DEFAULT_LANGUAGE).translations.map(translation => translation.normalizedFileName)

    const translationsDifferences = translations.map(translationItem => {
        const translationFileNames = translationItem.translations.map(translation => translation.normalizedFileName)
        const differences = englishTranslationsFileNames.filter(englishFileName => !translationFileNames.includes(englishFileName))
        return {language: translationItem.language, differences}
    })

    return translationsDifferences
}