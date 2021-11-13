class Elem {
    constructor(elem, id) {
        this.elem = elem
        this.id = id
        this.kattinthato = false
        this.elem.on("click", () => {
            this.kattintas()
        })

    }
    setKattinthato() {
        if (this.kattinthato) {
            this.kattinthato = false
        }
        else {
            this.kattinthato = true
        }
    }
    szintValtas() {
        this.elem.css("background-color", "lightblue")
    }
    szintValtasRossz() {
        this.elem.css("background-color", "red")
    }
    szintVissza() {
        this.elem.css("background-color", "darkcyan")
    }
    kattintas() {
        let esemeny = new CustomEvent("kattint", { detail: this })
        window.dispatchEvent(esemeny)
    }
}