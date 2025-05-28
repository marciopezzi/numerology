import { calculateMission } from "./calculators/missionCalculator.js";
import { calculateKarmicLessons } from "./calculators/karmicLessonsCalculator.js";
import { calculateChallenges } from "./calculators/challengesCalculator.js";
import { calculateCycles } from "./calculators/cyclesCalculator.js";
import { NumerologyProfile } from "./models/NumerologyProfile.js";

export function generateNumerologyProfile(
  name,
  birthDate,
  currentYear = new Date().getFullYear()
) {
  const missionData = calculateMission(name, birthDate);
  const karmicLessons = calculateKarmicLessons(name);
  const challenges = calculateChallenges(birthDate);
  const cycles = calculateCycles(birthDate, currentYear);

  return new NumerologyProfile({
    name,
    birthDate,
    nameNumber: missionData.nameNumber,
    dateNumber: missionData.dateNumber,
    mission: missionData.mission,
    karmicLessons,
    challenges,
    cycles,
  });
}
