import path from 'path'
import {DRAFT_FOLDER, EXCLUDED_FILES, NODE_MODULE_FOLDER, UTILS_FOLDER} from './constants/excludedFiles.js';

export const getTranslationsFiles = (files) => files.filter(file => path.extname(file.name) === '.md' && !EXCLUDED_FILES.includes(file.fileNameParts[0]) && file.path.toLowerCase().indexOf(DRAFT_FOLDER) === -1 && file.path.toLowerCase().indexOf(NODE_MODULE_FOLDER) === -1&& file.path.toLowerCase().indexOf(UTILS_FOLDER) === -1)