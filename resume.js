const data = {
  name: 'Jane Meng',
  mainEmoji: {
    character: '🐝',
    arialabel: 'bee',
  },
  phoneNumber: '905.808.1286',
  email: 'jmeng@rbi.com',
  github: 'techniJANE',
  linekedin: 'jane-lingcong-meng-2a9913b1',
};

document.title = data.name;

const name = document.querySelector('#name');
name.textContent = data.name;

const emojiContainer = document.querySelector('h1 span[role="img"]');
emojiContainer.textContent = data.mainEmoji.character;

emojiContainer.textContent = data.mainEmoji.character;
emojiContainer.setAttribute('aria-label', data.mainEmoji.arialabel);

const phoneNumberContainer = document.querySelector('#phone-number');
phoneNumberContainer.textContent = data.phoneNumber;

const emailContainer = document.querySelector('#email');
emailContainer.textContent = data.email;

const githubContainer = document.querySelector('#github');
githubContainer.textContent = `github.com/${data.github}`;

const linkedinContainer = document.querySelector('#linkedin');
linkedinContainer.textContent = `linkedin.com/in/${data.linekedin}`;
