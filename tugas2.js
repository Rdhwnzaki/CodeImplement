const pijarFood = (harga, voucher, jarak, pajak) => {
    if (voucher == 'PIJARFOOD5' && harga >= 50000) {
        diskon = (50 / 100) * harga
        if (diskon >= 50000) {
            diskon = 50000
            console.log(`Harga : ${harga}`)
            console.log(`Potongan : ${diskon}`)
            if (jarak > 2) {
                jarakAwal = 5000
                jarakTambah = (jarak - 2) * 3000
                newJarak = jarakAwal + jarakTambah
                console.log(`Biaya Antar : ${newJarak}`)
            } else {
                newJarak = 5000
                console.log(`Biaya Antar : ${newJarak}`)
            }
            if (pajak == true) {
                pajak = (5 / 100) * harga
                console.log(`Pajak : ${pajak}`)
                subTotal = harga - diskon + newJarak + pajak
                console.log(`Sub Total : ${subTotal}`)
            } else {
                pajak = 0
                console.log(`Pajak : ${pajak}`)
                subTotal = harga - diskon + newJarak
                console.log(`Sub Total : ${subTotal}`)
            }
        } else {
            console.log(`Harga : ${harga}`)
            console.log(`Potongan : ${diskon}`)
            if (jarak > 2) {
                jarakAwal = 5000
                jarakTambah = (jarak - 2) * 3000
                newJarak = jarakAwal + jarakTambah
                console.log(`Biaya Antar : ${newJarak}`)
            } else {
                newJarak = 5000
                console.log(`Biaya Antar : ${newJarak}`)
            }
            if (pajak == true) {
                pajak = (5 / 100) * harga
                console.log(`Pajak : ${pajak}`)
                subTotal = harga - diskon + newJarak + pajak
                console.log(`Sub Total : ${subTotal}`)
            } else {
                pajak = 0
                console.log(`Pajak : ${pajak}`)
                subTotal = harga - diskon + newJarak
                console.log(`Sub Total : ${subTotal}`)
            }
        }
    } else if (voucher == 'DITRAKTIRPIJAR' && harga >= 25000) {
        diskon = (60 / 100) * harga
        if (diskon >= 30000) {
            diskon = 30000
            console.log(`Harga : ${harga}`)
            console.log(`Potongan : ${diskon}`)
            if (jarak > 2) {
                jarakAwal = 5000
                jarakTambah = (jarak - 2) * 3000
                newJarak = jarakAwal + jarakTambah
                console.log(`Biaya Antar : ${newJarak}`)
            } else {
                newJarak = 5000
                console.log(`Biaya Antar : ${newJarak}`)
            }
            if (pajak == true) {
                pajak = (5 / 100) * harga
                console.log(`Pajak : ${pajak}`)
                subTotal = harga - diskon + newJarak + pajak
                console.log(`Sub Total : ${subTotal}`)
            } else {
                pajak = 0
                console.log(`Pajak : ${pajak}`)
                subTotal = harga - diskon + newJarak
                console.log(`Sub Total : ${subTotal}`)
            }
        } else {
            console.log(`Harga : ${harga}`)
            console.log(`Potongan : ${diskon}`)
            if (jarak > 2) {
                jarakAwal = 5000
                jarakTambah = (jarak - 2) * 3000
                newJarak = jarakAwal + jarakTambah
                console.log(`Biaya Antar : ${newJarak}`)
            } else {
                newJarak = 5000
                console.log(`Biaya Antar : ${newJarak}`)
            }
            if (pajak == true) {
                pajak = (5 / 100) * harga
                console.log(`Pajak : ${pajak}`)
                subTotal = harga - diskon + newJarak + pajak
                console.log(`Sub Total : ${subTotal}`)
            } else {
                pajak = 0
                console.log(`Pajak : ${pajak}`)
                subTotal = harga - diskon + newJarak
                console.log(`Sub Total : ${subTotal}`)
            }
        }
    }
}
pijarFood(75000, 'PIJARFOOD5', 5, true)
