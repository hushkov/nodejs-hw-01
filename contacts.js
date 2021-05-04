const fs = require('fs').promises;
const path = require('path');
require('colors');

const contactsPath = path.join(__dirname, 'db', 'contacts.json');

function listContacts() {
  fs.readFile(contactsPath)
    .then((data) => console.table(JSON.parse(data)))
    .catch(console.log);
}

async function getContactById(contactId) {
  try {
    const data = await fs.readFile(contactsPath);
    const parsed = JSON.parse(data);
    const result = parsed.find(({ id }) => id === Number(contactId));
    if (!result) {
      console.log('Not Found. Try another ID.'.magenta);
      return;
    }
    console.table(result);
    return result;
  } catch (err) {
    console.log(err);
  }
}

async function removeContact(contactId) {
  try {
    const data = await fs.readFile(contactsPath);
    const parsed = JSON.parse(data);
    const afterDelete = parsed.filter(({ id }) => id !== Number(contactId));
    const sorted = afterDelete.map((item, idx) => {
      return { ...item, id: (item.id = idx + 1) };
    });

    await fs.writeFile(contactsPath, JSON.stringify(sorted));
    console.table(sorted);
    return sorted;
  } catch (err) {
    console.log(err);
  }
}

async function addContact(name, email, phone) {
  try {
    const data = await fs.readFile(contactsPath);
    const parsed = JSON.parse(data);

    parsed.push({
      name,
      email,
      phone,
      id: parsed.length + 1,
    });
    await fs.writeFile(contactsPath, JSON.stringify(parsed));
    console.table(parsed);
  } catch (err) {
    console.log(err);
  }
}

module.exports = { listContacts, getContactById, removeContact, addContact };
