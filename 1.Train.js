// function main(strArray) {

//     let wagons = strArray.shift().split(' ').map(el => Number(el)) //['32', '54', '21','12', '4', '0','23'] pull out first item in strArray
//     let wagonCapacity = strArray.shift() //pull out second item in strArray
//     wagonCapacity = Number(wagonCapacity) //convert wagonCapacity to a number
//     // console.log(strArray)//[ 'Add 10', 'Add 0', '30', '10', '75' ]
//     let arrLength = strArray.length
//     for (let i = 0; i < arrLength; i++) {
//         let commands = strArray[i]
//         if (commands.split(' ').includes("Add")) {
//             let [command, wagonToBeAdded] = commands.split(' ')
//             wagonToBeAdded = Number(wagonToBeAdded)
//             wagons.push(wagonToBeAdded)
//         } else if (!commands.split(' ').includes('Add')) {
//             let [command, wagonToBeAdded] = commands.split(' ')
//             let index = strArray.indexOf(command)
//             let OneTimeUseNum = strArray.slice(index)
//             for (let j = 0; j < wagons.length; j++) {
//                 let num = OneTimeUseNum.shift()
//                 num = Number(num)
//                 if (wagons[j] < wagonCapacity && num !== undefined && num < wagonCapacity) {
//                     if (wagons[j] + num <= wagonCapacity) {
//                         wagons[j] += num
//                     } else if (wagons[j] === 0 && num !== undefined && num === wagonCapacity) {
//                         if (wagons[j] + num <= wagonCapacity) {
//                             wagons[j] += num
//                         } else {
//                             break;
//                         }
//                     } else if (wagons[j] < wagonCapacity && num !== undefined && num > wagonCapacity) {
//                         if (wagons[j] + num <= wagonCapacity) {
//                             wagons[j] += num
//                         } else {
//                             break;
//                         }
//                     } else if (wagons[j] === wagonCapacity) {
//                         break;
//                     } else if (wagons[j] > wagonCapacity) {
//                         break;
//                     }

//                 }
//             }
//         }



//     }
//     console.log(wagons.join(' '))
// }


// function main(strArray) {

//     let wagons = strArray.shift().split(' ').map(el => Number(el)) //['32', '54', '21','12', '4', '0','23'] pull out first item in strArray
//     let wagonCapacity = strArray.shift() //pull out second item in strArray
//     wagonCapacity = Number(wagonCapacity) //convert wagonCapacity to a number
//     // console.log(strArray)//[ 'Add 10', 'Add 0', '30', '10', '75' ]

//     for (let i = 0; i < strArray.length; i++) {
//         let commands = strArray[i]
//         let [command, wagonToBeAdded] = commands.split(' ')
//         // [ 'Add', '10' ]
//         // [ 'Add', '0' ]
//         // [ '30' ]
//         // [ '10' ]
//         // [ '75' ]
//         if (command === "Add" && wagonToBeAdded !== undefined) {
//             wagonToBeAdded = Number(wagonToBeAdded)
//             wagons.push(wagonToBeAdded)
//         } else if (command !== "Add" && wagonToBeAdded === undefined) {

//             for (let j = 0; j < wagons.length; j++) {
//                 let index = strArray.indexOf(command)
//                 let oneTimeUseNum = strArray.slice(index);
//                 command = Number(command)
//                 if (wagons[j] <= wagonCapacity) {
//                     let num = oneTimeUseNum.shift() ///gives me NaN
//                     // console.log(num);

//                     num = Number(num)
//                     if (typeof (num) === 'number') {
//                         if (num < wagonCapacity) {
//                             if ((wagons[j] + num) <= wagonCapacity) {
//                                 wagons[j] = wagons[j] + num
//                             } else {
//                                 break;
//                             }
//                         } else if (num === wagonCapacity) {
//                             wagons.push(num)
//                         } else {
//                             break;
//                         }

//                     }


//                 }

//             }

//         }


//     }
//     console.log(wagons.join(' '))

// }

// function main(inputArray) {
//     let wagonArray = [];
//     let passengersArray = [];

//     let nums = inputArray.shift().split(' ').map(Number);
//         wagonArray.push(...nums);
//         // console.log(nums);
//     let maxCapacity = inputArray.shift();
//         maxCapacity = Number(maxCapacity);
//         // console.log(maxCapacity);

//     for(let i = 0; i < inputArray.length; i++) {
//         let [commands, passengers] = inputArray[i].split(' ');

//         passengers = inputArray[i].split(' ');
//         passengers = Number(passengers);

//         let letterRegEx = /^[a-zA-Z]*$/;
//         let letterCheck = letterRegEx.test(commands);

//         if (letterCheck === true) {
//             switch (commands) {
//                 case 'Add':
//                     let [commands, passengers] = inputArray[i].split(' ');
//                     passengers = Number(passengers);
//                     wagonArray.push(passengers);
//                     // console.log(`${passengers} ---> Passengers`);
//                     // console.log(`${wagonArray} ---> wagonArray`);
//                     break;
//             }
//         } else {
//             commands = Number(commands);
//             passengersArray.push(commands);
//         }
//     }
//     // console.log(passengersArray);
//     for(let i = 0; i < passengersArray.length; i++) {
//         let passengerNum = passengersArray[i];

//         for(let j = 0; j < wagonArray.length; j++) {
//             let total = wagonArray[j] + passengerNum;

//             if (total <= maxCapacity) {
//                 wagonArray[j] += passengersArray[i];
//                 break;
//             } 
//         }
//     }
//     console.log(`${wagonArray.join(' ')}`);
// }
function main(strArray) {
    let wagons = strArray.shift().split(' ').map(el => Number(el)) //['32', '54', '21','12', '4', '0','23'] pull out first item in strArray
    let wagonCapacity = strArray.shift() //pull out second item in strArray
    wagonCapacity = Number(wagonCapacity) //convert wagonCapacity to a number
    // console.log(strArray)//[ 'Add 10', 'Add 0', '30', '10', '75' ]
    // console.log(wagonCapacity);

    let arrLength = strArray.length;
    let passengerArr = [];
    // console.log(strArray.length);
    // console.log(strArray);

    for (let i = 0; i < arrLength; i++) {

        let commands = strArray[i];


        if (commands.split(' ').includes("Add")) {
            // console.log('true: \ncommands.split does inclued Add')

            let [command, wagonToBeAdded] = commands.split(' ')
            wagonToBeAdded = Number(wagonToBeAdded);
            // console.log(wagonToBeAdded);
            wagons.push(wagonToBeAdded);
            // console.log(wagons);

        } else if (!commands.split(' ').includes('Add')) {
            // console.log(commands);
            passengerArr.push(commands);
            // let index = strArray.indexOf(command);
            // let OneTimeUseNum = strArray.slice(index);


        }
    }
    // console.log('this is the passengerArr.length', passengerArr);

    for (let i = 0; i < passengerArr.length; i++) {
        let num = Number(passengerArr[i]);

        // console.log(num);

        for (let j = 0; j < wagons.length; j++) {
            let total = wagons[j] + num;

            if (total <= wagonCapacity) {
                wagons[j] += num;
                break;
            }
        }

    }
    console.log(wagons.join(' '))
}
main(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75'])