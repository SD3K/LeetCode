/**
 * @param {number} initialEnergy
 * @param {number} initialExperience
 * @param {number[]} energy
 * @param {number[]} experience
 * @return {number}
 */
function minNumberOfHours(initialEnergy, initialExperience, energy, experience) {
  let hours = 0;
  
  for (let i = 0; i < energy.length; i++) {
    while (initialEnergy <= energy[i] || initialExperience <= experience[i]) {
      if (initialEnergy <= energy[i]) {
        hours++;
        initialEnergy++;
      }
      if (initialExperience <= experience[i]) {
        hours++;
        initialExperience++;
      }
    }
    initialEnergy -= energy[i];
    initialExperience += experience[i];
  }
  return hours;
};