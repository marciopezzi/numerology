export function interpretCycles({ lifeCycles, personalYear }) {
  return {
    firstCycle: `Primeiro ciclo (${lifeCycles.first}): ${getCycleDescription(
      lifeCycles.first
    )}`,
    secondCycle: `Segundo ciclo (${lifeCycles.second}): ${getCycleDescription(
      lifeCycles.second
    )}`,
    thirdCycle: `Terceiro ciclo (${lifeCycles.third}): ${getCycleDescription(
      lifeCycles.third
    )}`,
    personalYear: `Ano pessoal atual (${personalYear}): ${getCycleDescription(
      personalYear
    )}`,
  };
}

function getCycleDescription(number) {
  const descriptions = {
    1: "Fase de inícios, plantar sementes, assumir liderança.",
    2: "Fase de parcerias, paciência e construção cuidadosa.",
    3: "Fase de criatividade, expansão, expressão e comunicação.",
    4: "Fase de trabalho árduo, construir base sólida, foco e disciplina.",
    5: "Fase de mudanças, liberdade, novos caminhos, expansão.",
    6: "Fase de assumir responsabilidades, cuidar da família, buscar equilíbrio.",
    7: "Fase de introspecção, estudo, planejamento, fortalecimento interno.",
    8: "Fase de colher resultados, prosperidade, liderança material.",
    9: "Fase de encerramento de ciclos, desapego, finalizações e preparação para o novo.",
    11: "Fase de iluminação, espiritualidade, despertar. Potencial de grande impacto através da inspiração. Exige equilíbrio interno.",
    22: "Fase de construção de grandes estruturas ou ideias. Potencial para materializar visões coletivas com impacto global.",
  };

  return descriptions[number] || "Descrição não encontrada.";
}
