class ClassOO {

    constructor (num1, num2, num3) {
        this.num1 = num1
        this.num2 = num2
        this.num3 = num3
    }

    get Num1 () {
        return this.num1
    }

    set Num1 (value) {
        this.num1 = value
    }

    get Num2 () {
        return this.num2
    }

    set Num2 (value) {
        this.num2 = value
    }

    get Num3 () {
        return this.num3
    }

    set Num3 (value) {
        this.num3 = value
    }

    multiple () {
        console.log(
            this.num1 * 
            this.num2 * 
            this.num3
        )
    }

}

const coo = new ClassOO()
coo.Num1 = 2
coo.Num2 = 8
coo.Num3 = 5
coo.multiple()

