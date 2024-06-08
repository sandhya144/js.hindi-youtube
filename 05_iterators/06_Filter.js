// const coding = ["js","ruby","java","python","cpp"]

// const values = coding.forEach( (item) => {
//     // console.log(item);
//        return item
// })
// console.log(values);        //doesnot return any value

// sometimes we want to apply some operation on each value but sometimes we want to return some value or want to check conditionally


const myNums = [1,2,3,4,5,6,7,8,9,10]
// const newNums = myNums.filter( (num) => {
//    return num > 4                                 // in scopes use return keyword
// })

// const newNums = []
// myNums.forEach ( (nums) => {
//    if (nums > 4) {
//     newNums.push(nums)            //add array
//     }
// } )

// console.log (newNums);       // returns values

const books = [
    { title: 'Book one' , genre:'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book two' , genre:'Non-Fiction', publish: 2002, edition: 2011 },
    { title: 'Book three' , genre:'Fiction', publish: 1954, edition: 2017 },
    { title: 'Book four' , genre:'Non-Fiction', publish: 2007, edition: 2018 },
    { title: 'Book five' , genre:'History', publish: 1967, edition: 2019 },
    { title: 'Book six' , genre:'History', publish: 2009, edition: 2022 },
    { title: 'Book seven' , genre:'english', publish: 2000, edition: 2000 },
    { title: 'Book eight' , genre:'music', publish: 2005, edition: 2008 },
    { title: 'Book nine' , genre:'science', publish: 1989, edition: 2003 },
]

// const userBooks = books.filter( (bk) => bk.genre === 'History')
 const userBooks = books.filter( (bk) => { 
    return bk.publish >= 2000 && bk.genre === "History" })
console.log(userBooks); 





