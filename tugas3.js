const divideAndSort = (deret) => {
    let dataString = deret.toString().split('0').map((elemen) => elemen.split('').sort().join('')).join('')
    console.log(typeof dataString)
    console.log(dataString)
}
divideAndSort(5956560159466056)