let messages = {
    who: ['you', 'your pet', 'a family member'],
    what: ['will have a great day', 'should bless another today', 'must stay focused'],
    inParting: ['Hope this helps!', 'Until next time', 'See ya later!'],
    generateRandomMessage() {
        

        let msg = `${this.who[Math.floor(Math.random() * 3)]} ${this.what[Math.floor(Math.random() * 3)]}. ${this.inParting[Math.floor(Math.random() * 3)]}`;
        return msg;
    }

};

module.exports = messages;