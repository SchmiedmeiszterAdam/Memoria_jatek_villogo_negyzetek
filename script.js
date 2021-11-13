$(function () {
    let id = 0
    let kattintottId
    const elemek = []
    const villantott = []
    let kattintSzamlalo = 0
    let villog
    const tabla = ("table")
    let index = 0
    for (let i = 0; i < 3; i++) {
        $(tabla).append("<tr></tr>")
        let szulo = $("tr").eq(i)
        for (let j = 0; j < 3; j++) {
            let td = $("<td class = " + index + "></td>").appendTo(szulo)
            let elem = new Elem(td, index)
            elemek.push(elem)
            index++
        }
    }
    ujatAd()
    function ujatAd(){
        id = 0
        let szam = Math.floor(Math.random()*9)
        villantott.push(szam)
        mutat()
    }
    function mutat() {
        villog = setInterval(villant, 1000)
    }
    function villant() {
        elemek[villantott[id]].szintValtas()
        setTimeout(vissza2, 950)
        if (id === villantott.length - 1) {
            clearInterval(villog)
            kattintSzamlalo = 0
            kattinthato()
        }
    }
    function vissza2() {
        elemek[villantott[id]].szintVissza()
        id++
    }
    function kattinthato() {
        for (let i = 0; i < elemek.length; i++) {
            elemek[i].setKattinthato()
        }
    }
    $(window).on("kattint", (event) => {
        if (event.detail.kattinthato) {
            kattintottId = event.detail.id
            if (villantott[kattintSzamlalo] === kattintottId) {
                kattintSzamlalo++
                if (kattintSzamlalo === villantott.length) {
                    kattinthato()
                    ujatAd()
                }
                elemek[kattintottId].szintValtas()
            }
            else {
                elemek[kattintottId].szintValtasRossz()
                kattinthato()
            }
            setTimeout(vissza, 100)
        }
    })
    function vissza() {
        elemek[kattintottId].szintVissza()
    }
})