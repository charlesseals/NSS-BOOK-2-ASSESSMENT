/*
    Remember to use comments to define the algorithm(s) needed
    BEFORE you write any code

Algorythmic thinking and planning before writing any code.

        (applicationObject) will be good for our function parameters

DONE Step 1: [* Iterate Applicants *] Iterate through the mortgageApplicants array using a for/of loop

DONE Step 2: [* Calculate Yearly Expenses *] Using the first function we will calculate the yearly expenses for each person (montlyExpenses * 12) The yearly expenses should be returned for each applicant.

Step 3: [* Calculate Expenses Percentage of Salary *] Yearly Expenses / Annual Salary = number * 100 {<=is equal to expenses % of salary}

Step 4: [* Final Qualification Check *] The third function should accept two inputs (2 Parameters) Parameter 1: mortgageApplicantObject & Parameter 2: percentageOfSalaryObject

Step 5: [* if/conditional statement *] The function used in Step4 will need to have a for/of loop with an if/conditional statement within the for/of loop. (This will allow us to iterate through each of the applicants in the array and determine, based on previous calculations, weather or not they should have their "mortgage" property (maybe .push ?) with the name "qualified" and its value should be "true".
Step 6:     ^^^ add another property to the applicant mortgage object called "amount" with a value of "0".
Step 7:         ^^^ the function above should return the modified object

Step 8: DO NOT FORGET TO ASSIGN THE VALUE THAT A FUNCTION RETURNS TO A VARIABLE

Step 9: [* console.log() that new variable that is storing the returned value of a function *]

Step 10:    ^^^ when console.log() possibly use string interpolation and a for/of loop to drop in the correct information/data to complete the string for each of the mortgage applicants.

*/


// const calculateYearlyExpenses = () => { }

// const calculateExpensesPercentage = () => { }

// const isQualified = () => { }

const mortgageApplicants = [
    { id: 1, name: "James Runolfsdottir", monthlyExpenses: 343.7, salary: 49938.68, mortgage: {}, address: "866 Weissnat Forks", city: "South Dario" },

    { id: 2, name: "Fannie Swaniawski", monthlyExpenses: 783.82, salary: 119255.48, mortgage: {}, address: "3350 McDermott Bridge", city: "Amaliaborough" },

    { id: 3, name: "Patsy Jaskolski", monthlyExpenses: 803.34, salary: 103376.76, mortgage: {}, address: "585 Kassulke River", city: "New Hattieport" },

    { id: 4, name: "Rufus Moore", monthlyExpenses: 845, salary: 88269.54, mortgage: {}, address: "46332 O'Hara Mountain", city: "North Idell" },

    { id: 5, name: "Philip Abshire", monthlyExpenses: 781.34, salary: 65333.78, mortgage: {}, address: "633 Thiel Ville", city: "Uliseston" },

    { id: 6, name: "Wendy Kiehn", monthlyExpenses: 537.32, salary: 59702.6, mortgage: {}, address: "82441 Mills Turnpike", city: "Port Libbieberg" },

    { id: 7, name: "Ray Lubowitz", monthlyExpenses: 550.15, salary: 181362.87, mortgage: {}, address: "855 Isabel Forge", city: "Hesseltown" },

    { id: 8, name: "Lawrence Hirthe MD", monthlyExpenses: 940.74, salary: 100269.15, mortgage: {}, address: "68459 Jordon Crossing", city: "Boview" },

    { id: 9, name: "Mario Beahan I", monthlyExpenses: 618.11, salary: 122226.79, mortgage: {}, address: "71521 Walter Drive", city: "Rosannaton" },

    { id: 10, name: "Rosa Hauck", monthlyExpenses: 763.82, salary: 89335.68, mortgage: {}, address: "33954 Reba Motorway", city: "Port Lesly" },

    { id: 11, name: "Becky Wiegand", monthlyExpenses: 212.27, salary: 76137.45, mortgage: {}, address: "3972 Stroman Parks", city: "West Clotildeport" },
]

/*
    Iterate the array of mortgage applicants and use your
    functions to determine if they are qualified for a mortgage
*/


const calculateYearlyExpenses = () => {
    //I know that my for loop shouldnt be inside the function but still unsure where to go with it
    const yearlyExpensesArray = []
    for (const mortgageApplicant of mortgageApplicants) { //for/of loop is iterating thru the mortgageApplicants array//
        const yearlyExpenses = mortgageApplicant.monthlyExpenses * 12 //this line does the calculation of multiplying the monthly expenses for an object in the array by 12//
        mortgageApplicant.savedYearlyExpenses = yearlyExpenses //this line adds a property to a mortgageApplicant and stores the value from yearlyExpenses//
        yearlyExpensesArray.push(mortgageApplicant) //this line pushes the updated instance of the object(mortgageApplicant) including the newly added "savedYearlyExpenses" property with the value of yearlyExpenses to the empty array called yearlyExpensesArray//

    }
    return yearlyExpensesArray
}

const calculateExpensesPercentage = (applicationObject) => {
    const expensesPercentageOfSalaryArray = []
    for (const mortgageApplicant of mortgageApplicants) {
        const expensesPercentageOfSalary = (mortgageApplicant.savedYearlyExpenses / mortgageApplicant.salary) * 100
        mortgageApplicant.savedExpensesPercentageOfSalary = expensesPercentageOfSalary
        expensesPercentageOfSalaryArray.push(mortgageApplicant)
    }
    return expensesPercentageOfSalaryArray
}

const isQualified = (applicationObject, expensePercentage) => {
    const loanAmountAndQualificationArray = []
    for (const mortgageApplicant of mortgageApplicants) {
        if (mortgageApplicant.savedExpensesPercentageOfSalary < 10) {
            mortgageApplicant.mortgage.qualified = true
            mortgageApplicant.mortgage.loanAmount = mortgageApplicant.salary * 5

            loanAmountAndQualificationArray.push(mortgageApplicant)
        } else {
            if (mortgageApplicant.savedExpensesPercentageOfSalary >= 10) {
                mortgageApplicant.mortgage.qualified = false
                mortgageApplicant.mortgage.loanAmount = 0
                
                loanAmountAndQualificationArray.push(mortgageApplicant)
            }
        }
    }
    return loanAmountAndQualificationArray
}

const qualifiedStringFunction = () => {
    //let qualifiedString = ""
    let savedQualifiedString = ""
    for (const mortgageApplicant of mortgageApplicants) {
        if (mortgageApplicant.mortgage.qualified === true) {
            savedQualifiedString += `${mortgageApplicant.name} is qualified for a maximum mortgage of $${mortgageApplicant.mortgage.loanAmount}\n`
            //savedQualifiedString.push(mortgageApplicant)
        }
        
    }
    return savedQualifiedString
}



let newYearlyExpenses = calculateYearlyExpenses()
//console.log(newYearlyExpenses)

let newExpensesPercentageOfSalary = calculateExpensesPercentage()
//console.log(newExpensesPercentageOfSalary)

let newLoanAmountAndQualification = isQualified()
console.log(newLoanAmountAndQualification)

let newlyQualifiedApplicant = qualifiedStringFunction()
console.log(newlyQualifiedApplicant)




























// **********  Do not touch this code  **********
module.exports = {
    calculateYearlyExpenses, calculateExpensesPercentage, isQualified
}
// **********  Do not touch this code  **********