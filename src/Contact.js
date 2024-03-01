class Contact {
    constructor(id,  firstName, lastName, email, notes) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.notes = notes;
        this.createdAt = new Date();
    }
}

module.exports = Contact;