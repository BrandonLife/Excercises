function main(array) {




    array.sort((a, b) => a.length - b.length || a.localeCompare(b));


    console.log(array.join('\n'))


}
main(["alpha", "beta", "gamma"])
main(["Isacc", "Theodor", "Jack", "Harrison", "George"])