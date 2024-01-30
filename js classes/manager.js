const Employee = require('./employee');

class Manager extends Employee{

    constructor(name, salary, title,Manager){
        super(name,salary,title,Manager);
        this.employees = [];
    }

    addEmployee(employee){
        this.employees.push(employee);

    }

    calculateBonus(multiplier){
        return this._totalSubSalary(this) * multiplier;
    }

    _totalSubSalary(employee){
        let sum=employee.salary
        if(employee instanceof Manager){

            employee.employees.forEach(emp =>{
                sum+= this._totalSubSalary(emp,sum)
            });
        }

        return sum;
    }
}

const splinter = new Manager('Splinter', 100000, 'Sensei');
const leo = new Manager('Leonardo', 90000, 'Ninja', splinter);
const raph = new Manager('Raphael', 90000, 'Ninja', leo);
const mikey = new Employee('Michelangelo', 85000, 'Grasshopper', raph);
const donnie = new Employee('Donatello', 85000, 'Grasshopper', raph);

console.log(splinter.calculateBonus(0.05)); // => 22500
console.log(leo.calculateBonus(0.05)); // => 17500
console.log(raph.calculateBonus(0.05)); // => 13000
