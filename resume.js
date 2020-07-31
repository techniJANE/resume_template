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
  workExperience: [
    {
      emoji: '🐛',
      jobTitle: 'Analyst, Global Business Services',
      institution: 'Restaurant Brands International',
      dates: '2020 - present', // end with "present" for your current job
      details: [
        'Maintain request-intake portal based on current business needs',
        "Manage and audit the department's Excellence Program",
        'Provide recommendations on possible improvements in buciness processes',
      ],
    },
    {
      emoji: '🐞',
      jobTitle: 'Analyst, Restaurant Tech',
      institution: 'Restaurant Brands International',
      dates: '2019 - 2020', // end with "present" for your current job
      details: [
        'Coordinated product launches on Point of Sales Systems and Digital Platforms for Tim Hortons North America',
        'Managed weekly updates to the Tim Hortons Mobile App and Web Ordering platform',
        'Led quanlity assurance efforts for weekly digital offers launches on the mobile app',
      ],
    },
    {
      emoji: '🦋',
      jobTitle: 'Program Advisor, Policy Planning',
      institution: 'Ontario Ministry of Environment',
      dates: '2018 - 2019', // end with "present" for your current job
      details: [
        "Assisted in the revamp of the Ontario's hazardous waste tracking by building a wireframe for an online reporting system",
        'Evaluated existing environmental programs to ensure appropriate KPIs are in place and assisted with creating new province-wide KPIs',
        'Coordinated with external stakeholders to support the Ontario Open for Business program',
      ],
    },
  ],
  educationalExperience: [
    {
      emoji: '🦖',
      skillsHeading: 'Western University',
      school: 'Department of Economics',
      dates: '2014 - 2019',
      details: [
        "Assisted in the revamp of the Ontario's hazardous waste tracking by building a wireframe for an online reporting system",
        'Evaluated existing environmental programs to ensure appropriate KPIs are in place and assisted with creating new province-wide KPIs',
        'Coordinated with external stakeholders to support the Ontario Open for Business program',
      ],
    },
  ],
  skills: [
    {
      emoji: '🦞',
      skillone: 'Languages',
      skilltwo: 'Frameworks',
      dates: '1996 - Present',
      details: [
        'Native English, Advanced Mandarin, Conversational French',
        'HTML, CSS, JavaScript',
      ],
    },
  ],
};

document.title = data.name;

const name = document.querySelector('#name');
name.textContent = data.name;

const emojiContainer = document.querySelector('h1 span[role="img"]');
emojiContainer.textContent = data.mainEmoji.character;
emojiContainer.setAttribute('aria-label', data.mainEmoji.arialabel);

const phoneNumberContainer = document.querySelector('#phone-number');
phoneNumberContainer.textContent = data.phoneNumber;

const emailContainer = document.querySelector('#email');
emailContainer.textContent = data.email;

const githubContainer = document.querySelector('#github');
githubContainer.textContent += `github.com/${data.github}`;

const linkedinContainer = document.querySelector('#linkedin');
linkedinContainer.textContent += `linkedin.com/in/${data.linekedin}`;

function renderWorkExperience(workExperience) {
  return `
  <div>
  <span class="date">${workExperience.dates}</span>
  <h3>
    <span role="img" aria-label="">${workExperience.emoji}</span>
    ${workExperience.jobTitle}<span class="comma">,</span>
    <span class="light">${workExperience.institution}</span>
  </h3>
  <ul>
     ${workExperience.details.map(detail => `<li>${detail}</li>`).join('')}
  </ul>
</div>`;
}
const workExperienceContainer = document.querySelector('#work-experience');
const eachWorkExperienceHTML = data.workExperience.map(renderWorkExperience);
const allWorkExperienceHTML = eachWorkExperienceHTML.join('');
workExperienceContainer.innerHTML = allWorkExperienceHTML;

const renderEducationalExperience = educationalExperience => `
<div>
  <span class="date">2006 - 2007</span>
  <h3>
    <span role="img" aria-label="dinosaur">${educationalExperience.emoji}</span>
    ${educationalExperience.university}<span class="comma">,</span>
    <span class="light">${educationalExperience.school}</span>
  </h3>
  <ul>
    ${educationalExperience.details
      .map(detail => `<li>${detail}</li>`)
      .join('')}
  </ul>
</div>`;

const educationContainer = document.querySelector('#education');
const eachEducationalExperienceHTML = data.educationalExperience.map(
  renderEducationalExperience
);
const allEducationalExperienceHTML = eachEducationalExperienceHTML.join('');
educationContainer.innerHTML = allEducationalExperienceHTML;

const renderSkills = skills => `
<div>
  <span class="date">${skills.dates}</span>
  <h3>
    <span role="img" aria-label=""> ${skills.emoji}</span>
    ${skills.skillone}<span className="comma">,</span>
    <span className="light">${skills.skilltwo}</span>
  </h3>
  <ul>
    ${skills.details.map(detail => `<li>${detail}</li>`).join('')}  
  </ul>
</div>
`;

const skillsContainer = document.querySelector('#skills');
const eachskillsHTML = data.skills.map(renderSkills);
const allSkillsHTML = eachskillsHTML.join('');
skillsContainer.innerHTML = allSkillsHTML;
