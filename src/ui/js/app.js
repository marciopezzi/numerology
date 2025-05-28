import {
  generateNumerologyProfile,
  generateFullInterpretation,
} from "../../core/index.js";

document.getElementById("generateBtn").addEventListener("click", () => {
  const name = document.getElementById("name").value;
  const birthDate = document.getElementById("birthdate").value;

  if (!name || !birthDate) {
    alert("Preencha todos os campos!");
    return;
  }

  const profile = generateNumerologyProfile(name, birthDate);
  const interpretation = generateFullInterpretation(profile);

  renderResult(profile, interpretation);
});

function renderResult(profile, interpretation) {
  const container = document.getElementById("result");

  container.innerHTML = `
    <h2>Resultado do Mapa</h2>

    <h3>Missão de Vida (${interpretation.mission.number})</h3>
    <p>${interpretation.mission.meaning}</p>

    <h3>Número do Nome (${interpretation.nameNumber.number})</h3>
    <p>${interpretation.nameNumber.meaning}</p>

    <h3>Número da Data (${interpretation.dateNumber.number})</h3>
    <p>${interpretation.dateNumber.meaning}</p>

    <h3>Lições Kármicas</h3>
    ${
      interpretation.karmicLessons.length > 0
        ? "<ul>" +
          interpretation.karmicLessons
            .map((l) => `<li>${l.number}: ${l.meaning}</li>`)
            .join("") +
          "</ul>"
        : "<p>Nenhuma lição kármica.</p>"
    }

    <h3>Desafios</h3>
    <ul>
      <li>${interpretation.challenges.minor}</li>
      <li>${interpretation.challenges.secondary}</li>
      <li>${interpretation.challenges.major}</li>
    </ul>

    <h3>Ciclos</h3>
    <ul>
      <li>${interpretation.cycles.firstCycle}</li>
      <li>${interpretation.cycles.secondCycle}</li>
      <li>${interpretation.cycles.thirdCycle}</li>
      <li>${interpretation.cycles.personalYear}</li>
    </ul>
  `;
}
