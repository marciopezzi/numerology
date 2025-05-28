export function interpretChallenges({ minor, secondary, major }) {
  return {
    minor: `Desafio menor (${minor}): ${getChallengeDescription(minor)}`,
    secondary: `Desafio secundário (${secondary}): ${getChallengeDescription(
      secondary
    )}`,
    major: `Desafio maior (${major}): ${getChallengeDescription(major)}`,
  };
}

function getChallengeDescription(number) {
  const descriptions = {
    1: "Desafio de assumir liderança, confiar em si e desenvolver autonomia.",
    2: "Desafio de trabalhar relacionamentos, ser diplomático e evitar dependência emocional.",
    3: "Desafio de se expressar, superar inseguranças e se comunicar de forma clara.",
    4: "Desafio com disciplina, organização e consistência.",
    5: "Desafio com liberdade, instabilidade, impulsividade. Necessário aprender a se adaptar sem perder foco.",
    6: "Desafio com responsabilidades, família, equilíbrio entre ajudar e não se sobrecarregar.",
    7: "Desafio de desenvolver autoconhecimento, evitar isolamento ou superficialidade.",
    8: "Desafio com dinheiro, poder, materialização. Lidar com ambição de forma ética.",
    9: "Desafio de soltar o passado, perdoar, não se sacrificar demais pelos outros.",
  };

  return descriptions[number] || "Descrição não encontrada.";
}
