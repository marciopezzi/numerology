import { getNumberMeaning } from "./interpreters/numberMeaning.js";
import { interpretChallenges } from "./interpreters/challengesInterpreter.js";
import { interpretCycles } from "./interpreters/cyclesInterpreter.js";

export function generateFullInterpretation(profile) {
  return {
    nameNumber: {
      number: profile.nameNumber,
      meaning: getNumberMeaning(profile.nameNumber),
    },
    dateNumber: {
      number: profile.dateNumber,
      meaning: getNumberMeaning(profile.dateNumber),
    },
    mission: {
      number: profile.mission,
      meaning: getNumberMeaning(profile.mission),
    },
    karmicLessons: profile.karmicLessons.map((num) => ({
      number: num,
      meaning: getNumberMeaning(num),
    })),
    challenges: interpretChallenges(profile.challenges),
    cycles: interpretCycles(profile.cycles),
  };
}
