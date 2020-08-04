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

const fetchData = async () => {
  const response = await fetch('./data.json');
  const data = await response.json();

  document.title = data.name;

  const name = document.querySelector('#name');
  name.textContent = data.name;

  const emojiContainer = document.querySelector('h1 span[role="img"]');
  emojiContainer.textContent = data.mainEmoji.character;
  emojiContainer.setAttribute('aria-label', data.mainEmoji.arialabel);

  const phoneNumberContainer = document.querySelector('#phone-number');
  phoneNumberContainer.textContent = data.phoneNumber;
  const phoneNumber = document.querySelector('li:nth-child(1) a');
  phoneNumber.href += data.phoneNumber;

  const emailContainer = document.querySelector('#email');
  emailContainer.textContent = data.email;
  const email = document.querySelector('li:nth-child(2) a');
  email.href += data.email;

  const githubContainer = document.querySelector('#github');
  githubContainer.textContent += `github.com/${data.github}`;
  const github = document.querySelector('li:nth-child(3) a');
  github.href += data.github;

  const linkedinContainer = document.querySelector('#linkedin');
  linkedinContainer.textContent += `linkedin.com/in/${data.linekedin}`;
  const linkedin = document.querySelector('li:nth-child(4) a');
  linkedin.href += data.linekedin;

  const workExperienceHeading = document.querySelector(
    "h2:nth-of-type(1) span[role='img']"
  );
  workExperienceHeading.textContent =
    data.headingEmojis.workExperience.character;
  workExperienceHeading.setAttribute(
    'arial-label',
    data.headingEmojis.workExperience.arialabel
  );

  const educationExperienceHeading = document.querySelector(
    "h2:nth-of-type(2) span[role='img']"
  );
  educationExperienceHeading.textContent =
    data.headingEmojis.educationalExperience.character;
  educationExperienceHeading.setAttribute(
    'arial-label',
    data.headingEmojis.educationalExperience.arialabel
  );

  const skillsHeading = document.querySelector(
    "h2:nth-of-type(3) span[role='img']"
  );
  skillsHeading.textContent = data.headingEmojis.skills.character;
  skillsHeading.setAttribute(
    'arial-label',
    data.headingEmojis.skills.arialabel
  );

  const renderEducationalExperience = educationalExperience => `
<div>
  <span class="date">${educationalExperience.dates}</span>
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

  const workExperienceContainer = document.querySelector('#work-experience');
  const eachWorkExperienceHTML = data.workExperience.map(renderWorkExperience);
  const allWorkExperienceHTML = eachWorkExperienceHTML.join('');
  workExperienceContainer.innerHTML = allWorkExperienceHTML;
};

fetchData();
