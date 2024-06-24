// task 1 and task 2 and task 3 and task 4
class car {
    constructor(Make, Model) {
        this.make = Make
        this.model = Model

    }
    start() {
        console.log(`the car has started`)
    }

}
let mycar = new car("toyota", "camry")
mycar.start()
console.log(mycar.make)
console.log(mycar.model)


class ElectricCar extends car {
    constructor(Battery_size) {
        super()

        this.Battery_size = Battery_size;
    }

}
let ele = new ElectricCar(60)
ele.start()
console.log(ele.Battery_size)

// task 5 and task6
class Account {
    #balance;
    constructor(Balance) {
        this.#balance = Balance;
    }
    deposit(amount) {
        this.#balance += amount;
    }
    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Funds are insufficient");
        } else {
            this.#balance -= amount;
        }
    }
    setbalnce(Balance){
        this.#balance=Balance;

    }
    getbalance(){
        return this.#balance;


    }

}
let myaccount = new Account(3000);
console.log(myaccount.getbalance());
myaccount.withdraw(2000);
console.log(myaccount.getbalance());
myaccount.deposit(5000)
console.log(myaccount.getbalance());
