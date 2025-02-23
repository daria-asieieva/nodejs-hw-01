import { promises as fs } from 'fs';
import { PATH_DB } from '../constants/contacts.js';

export const writeContacts = async (contacts) => {
    try {
        await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
        console.log('Контакти успішно оновлені!');
    } catch (error) {
        console.error(error.message);
    }
};

