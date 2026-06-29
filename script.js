fetch("data.json")
.then(res => res.json())
.then(d => {

  document.getElementById("name").innerText = d.name;

  document.getElementById("contact").innerHTML =
    `Email: ${d.contact.email} | Phone: ${d.contact.phone} | Web:
     <a href="${d.contact.linkedin}">LinkedIn</a> |
     <a href="${d.contact.github}">GitHub</a><br>
     Address: ${d.contact.address}`;

  document.getElementById("objective").innerText = d.careerObjective;

  let edu = `<tr>
    <th>Name of Institute</th>
    <th>Qualification</th>
    <th>Board Name</th>
    <th>Year of Passing</th>
    <th>Percentage / CGPA</th>
  </tr>`;
  d.education.forEach(e => {
    edu += `<tr>
      <td>${e.institute}</td>
      <td>${e.qualification}</td>
      <td>${e.board}</td>
      <td>${e.year}</td>
      <td>${e.score}</td>
    </tr>`;
  });
  document.getElementById("education").innerHTML = edu;

  document.getElementById("skills").innerHTML = `
    <ul>
      <li><b>Languages:</b> ${d.technicalSkills.languages.join(", ")}</li>
      <li><b>Web Technologies:</b> ${d.technicalSkills.web.join(", ")}</li>
    </ul>
    <ul>
      <li><b>Database:</b> ${d.technicalSkills.database.join(", ")}</li>
      <li><b>Platforms/OS:</b> ${d.technicalSkills.platforms.join(", ")}</li>
    </ul>
  `;

  document.getElementById("projects").innerHTML =
    d.projects.map(p =>
      `<p><b>${p.title}</b> (${p.tech}) | Link :
      <a href="${p.link}">GitHub Link</a><br>${p.description}</p>`
    ).join("");

  document.getElementById("softSkills").innerHTML =
    `<ul>${d.softSkills.slice(0,2).map(s=>`<li>${s}</li>`).join("")}</ul>
     <ul>${d.softSkills.slice(2).map(s=>`<li>${s}</li>`).join("")}</ul>`;

  document.getElementById("languages").innerHTML =
    d.knownLanguages.map(l => `<span>${l}</span>`).join("");

  document.getElementById("hobbies").innerHTML =
    d.hobbies.map(h => `<span>${h}</span>`).join("");

  document.getElementById("declaration").innerText = d.declaration;
  document.getElementById("datePlace").innerText = `Date and Place : ${d.datePlace}`;
});
