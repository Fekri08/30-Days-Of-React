// Question 1
newarray = Array()

// Question 2
const arr = [1, 2, 3, 4, 5, 6]

// Question 3
arrlength = arr.length

// Question 4
firstitem = arr[0]
lastitem = arr[arrlength - 1]
middleitem = arr[(arrlength / 2)-1]

// Question 5
const mixedDataTypes = ['hello', 12, {something: ['fruit', 'number']}, true,  { country: 'Finland', city: 'Helsinki' }, 250]
mixedlength = mixedDataTypes.length

// Question 6
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

// Question 7
console.log('IT Companies:', itCompanies)

// Question 8
console.log('Number of IT Companies in the list:', itCompanies.length)

// Question 9
firstit = itCompanies[0]
middleit = itCompanies[(itCompanies.length-1)/2]
lastit = itCompanies[itCompanies.length -1]

// Question 10
console.log('First company:', firstit, '\nMiddle company:', middleit, '\nLast company:', lastit)

// Question 11
stringit = itCompanies.toString()
upperIt = stringit.toUpperCase()
for (let i = 0; i < itCompanies.length; i++) {
    itCompanies[i] = upperIt.split(',')[i]
}
console.log(itCompanies)

stringit = itCompanies.toString()
upperIt = stringit.toLowerCase()
for (let i = 0; i < itCompanies.length; i++) {
    itCompanies[i] = upperIt.split(',')[i]
}

// Question 12
itCompanies[itCompanies.length-1] = "and Amazon"
console.log(itCompanies.join(", "), 'are big IT companies')
itCompanies[itCompanies.length-1] = "Amazon"

// Question 13
itindex = itCompanies.includes("Apple")
if (itindex != -1) {
    console.log("Apple\n")
    
} else {
    console.log("Apple is not found\n")
}

// Question 14
for (let i = 0; i < itCompanies.length; i++) {
        if (itCompanies[i].lastIndexOf('o')!= itCompanies[i].indexOf('o')) {
                    itCompanies.splice(i, i+1)
                    if (i == 0) {
                        i = -1
                    }
            }      
}
console.log(itCompanies)

// Question 15
itCompanies.sort()
console.log(itCompanies)

// Question 16
itCompanies.reverse()
console.log(itCompanies)

// Question 17
console.log(itCompanies.slice(0,3))

// Question 18
console.log(itCompanies.slice(itCompanies.length-3))

// Question 19
console.log(itCompanies.slice((itCompanies.length/2)-1,(itCompanies.length/2)+1))

// Question 20
firstremove = itCompanies.slice()
firstremove.shift()
console.log(firstremove)

// Question 21
MiddleRemove = itCompanies.slice()
MiddleRemove.splice((MiddleRemove.length/2)-1, (MiddleRemove.length/2)-1)
console.log(MiddleRemove)

// Question 22
LastRemove = itCompanies.slice()
LastRemove.pop()
console.log(LastRemove)

// Question 23
AllRemove = itCompanies.slice()
AllRemove.splice(0)
console.log(AllRemove)