const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// 1. Create a file named map-filter-reduce.js in your js directory and copy the users data below into it.
// 2. Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

const newArray = users.filter((user) => user.languages.length >= 3);
// console.log(newArray);

// 3. Use .map to create an array of strings where each element is a user's email address

const userEmail = users.map(user => user.email);
// console.log(userEmail);

// 4. Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.

const getExperience = (users) => {
    const total = users.reduce((total, user) => {
        return total + user.yearsOfExperience;
    }, 0);
    return ` The average exerience is ${total / users.length} years.`;
}
// console.log(getExperience(users));

// 5. Use .reduce to get the longest email from the list of users.

// users.forEach(user => {
//     console.log(user.email, user.email.length);
// })

const longest = users.reduce((acc, current) => {
    return acc.length < current.email.length ? current.email : acc;
}, users[0].email)

// console.log(longest);

// 6. Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

const list = users.reduce((acc, current) => {
    return acc + current.name + " ";
},[])
// console.log(`Your instructors are: ${list}`);

// Bonus Use .reduce to get the unique list of languages from the list of users.


