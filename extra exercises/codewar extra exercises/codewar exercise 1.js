// Population Problem
// In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?
//
//     At the end of the first year there will be:
//     1000 + 1000 * 0.02 + 50 => 1070 inhabitants
//
// At the end of the 2nd year there will be:
//     1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)
//
// At the end of the 3rd year there will be:
//     1141 + 1141 * 0.02 + 50 => 1213
//
// It will need 3 entire years.

function nbYear(p0, percent, aug, p) {
    let years = 0;
    for (years; p0 < p; years++) {
        p0 += p0 * (percent / 100) + aug;
    }
    return years;
};
//-------------------------------------------------------------------------------------------------------------
// Tiangle Problem
// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.
//
// (In this case, all triangles must have surface greater than 0 to be accepted).

