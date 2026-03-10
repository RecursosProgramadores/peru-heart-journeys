import { cuscoTours } from "./cusco";
import { limaTours } from "./lima";
import { combinadosTours } from "./combinados";
import { Tour } from "../../types/tour";

export const allTours: Tour[] = [
    ...cuscoTours,
    ...limaTours,
    ...combinadosTours,
];

export const toursByCategory = {
    cusco: cuscoTours,
    lima: limaTours,
    combinados: combinadosTours,
};
