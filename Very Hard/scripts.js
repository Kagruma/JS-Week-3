class Person {

    constructor(name, job, age){
        this.name = name;
        this.job = job;
        this.age = age;
    }

    exercise(){
        console.log('generic exercise')
    }

    fetchJob(){
        console.log(`${this.name} is a ${this.job}`);
    }

}

var p1 = new Person("Alex", "Architect", 142)

p1.exercise();
p1.fetchJob();

class Programmer extends Person{
    constructor(name, job, age, languages){
    super(name,job,age);
    this.languages = languages;
    this.busy = true; }


        completeNewTask(){
            this.busy = false;
        }


        acceptNewTask(){
            this.busy = true;
        }

        offerNewTask(){
            if(this.busy){
                console.log(`${this.name} can't accept and new tasks at the moment.`);
            } else {
                console.log(`${this,name} would love to take on a new task!`);
            }
        }

        learnLanguages(lang){
            this.languages.push(lang)
        }

        listLanguages(){
            for(let x = 0; x<this.languages.length; x++){
                console.log(this.languages[x]);
            }
        }

}

var p1 = new Person("Eve","Programmer", 19);
var c1 = new Programmer("Eve","Junior Dev", 19, ['Java','LUA', 'HTML', 'CSS'])
c1.fetchJob();

c1.completeNewTask();
