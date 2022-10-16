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
// ()()()() Exercise
// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

function duplicateEncode(word){
    let inputtedWord = word.toLowerCase();
    let encodedWord = '';

    for(let i = 0; i < word.length; i++) {
        if (inputtedWord.lastIndexOf(word[i]) === inputtedWord.indexOf(word[i])) {
            encodedWord += '(';
        } else
            encodedWord += ')';
    }
    return encodedWord;

}