import { readContacts } from "../utils/readContacts.js";




export const countContacts = async () => {
    const contacts = await readContacts();
    console.log(`Загальна кількість контактів: ${contacts.length}`);
 };

countContacts();
