/*  Types para os tipos de IMC, onde utilizaremos para percorrer no array de exibição */

export type Level = {
  title: string;
  color: string;
  icon: "down" | "up";
  imc: number[];
  yourImc?: number;
};
/* efinição de cada estado corporal, com seu reespectivo IMC, cor, etc. */
export const levels: Level[] = [
  { title: "Magreza", color: "#96A3AB", icon: "down", imc: [0, 18.5] },
  { title: "Normal", color: "#0ead69", icon: "up", imc: [18.5, 24.99] },
  { title: "Sobrepeso", color: "#e2b039", icon: "down", imc: [25, 29.9] },
  { title: "Obesidade", color: "#c3423f", icon: "down", imc: [30, 99] },
];

/* Lógica para calculo e exibição do IMC descrito embaxio de cada massa corporal */
export const calculateImc = (height: number, weight: number) => {
  const imc = weight / (height * height);

  for (let i in levels) {
    if (imc >= levels[i].imc[0] && imc < levels[i].imc[1]) {
      let levelCopy: Level = { ...levels[i] };

      levelCopy.yourImc = parseFloat(imc.toFixed(2));
      return levels[i];
    }
  }
  return null;
};
