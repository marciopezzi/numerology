export function getNumberMeaning(number) {
  const meanings = {
    1: "Liderança, iniciativa, independência. Missão de abrir caminhos, ser pioneiro, assumir protagonismo.",
    2: "Cooperação, diplomacia, sensibilidade. Missão de gerar harmonia, atuar em parcerias e ajudar na conciliação.",
    3: "Expressão, criatividade, comunicação. Missão de inspirar, alegrar e comunicar ideias.",
    4: "Trabalho, estrutura, disciplina. Missão de construir, organizar e trazer estabilidade.",
    5: "Mudança, liberdade, movimento. Missão de experimentar, inovar, buscar evolução constante.",
    6: "Responsabilidade, família, cuidado. Missão de gerar equilíbrio, harmonia, atuar em prol do bem coletivo.",
    7: "Análise, introspecção, espiritualidade. Missão de buscar o autoconhecimento, a sabedoria e a verdade.",
    8: "Poder material, prosperidade, liderança. Missão de construir, comandar, gerar abundância e resultados.",
    9: "Altruísmo, compaixão, serviço humanitário. Missão de curar, transformar, ajudar coletivamente.",
    11: "Inspiração, intuição elevada, mestre espiritual. Missão de iluminar, guiar, gerar consciência.",
    22: "Mestre construtor. Missão de materializar grandes projetos, unir matéria e espírito para servir o coletivo.",
  };

  return meanings[number] || "Significado não encontrado para este número.";
}
