const divideAndSort = (deret) => {
    let dataString = deret.toString().split('0').sort((a, b) => a - b).join('')
    console.log(dataString)
}
divideAndSort(5956560159466056)