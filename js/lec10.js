//get Elements by id: 
const btnAddContact = document.getElementById('add-contact');
const nameInput = document.getElementById('name');
const phoneInput = document.getElementById('phone');
const contactsDiv = document.getElementById('contacts');

//initial load:
let contacts = [];

//string:
const strContactFromDisk = localStorage.getItem('contacts');

//אם יש מידע שמור
// contacts = [מידע שמור] 
if (strContactFromDisk != null) {
    //parse as array of objects:
    const contactFromDisk = JSON.parse(strContactFromDisk);
    contacts = contactFromDisk;
}

//show contacts to the user:
contacts.forEach(c=>{
    contactsDiv.innerHTML += `Name: ${c.name} Phone:  ${c.phone} <br>`;
})

class Contact {
    name;
    phone;

    constructor(name, phone) {
        this.name = name;
        this.phone = phone;
    }
}

// react to btnAddContact:
btnAddContact.addEventListener('click', () => {
    //get the input values:
    const name = nameInput.value;
    const phone = phoneInput.value;

    //object with the input values:
    const contact = new Contact(name, phone); //{name: 'moe', phone:'0505005'}

    contacts.push(contact); //add contact to contacts Array

    //save Array<Contact> to disk
    localStorage.setItem('contacts', JSON.stringify(contacts));


    contactsDiv.innerHTML += `Name: ${contact.name} Phone:  ${contact.phone} <br>`;
});


