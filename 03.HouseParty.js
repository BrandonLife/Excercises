function main(strArray) {


    let guestsList = []


    strArray.forEach(guest => {
        let item = guest.split(' ')


        if (item.length === 3) {
            let [name, conjuction, status] = item
            if (conjuction === "is" && status === "going!") {
                if (!guestsList.includes(name)) {
                    guestsList.push(name)
                } else {
                    console.log(`${name} is already in the list!`)
                }
            }

        } else if (item.length === 4) {
            let [name1, conjuction1, conjuction2, status1] = item
            if (conjuction1 === "is" && conjuction2 === "not" && status1 === "going!") {
                if (!guestsList.includes(name1)) {
                    console.log(`${name1} is not in the list!`)
                } else {
                    guestsList.pop()
                }
            }
        }
    });

    console.log(guestsList.join('\n'))



}
main(['Allie is going!', 'George is going!', 'John is not going!', 'George is not going!'])
main(['Tom is going!', 'Annie is going!', 'Tom is going!', 'Garry is going!', 'Jerry is going!'])