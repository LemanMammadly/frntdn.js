//Inheritance

var Samsung={
    marka:"Samsung",
    model:"Note 10",
    qiymet:1000
}

var Iphone={
    marka:"Apple",
    model:"11 Pro",
    qiymet:3000
}

var TelInfo={
    telName:function(){
        return this.marka + " " + this.model
    },
    telPrice:function(){
        return (this.qiymet/1.7).toFixed(2)
    },
    telMemory:function(yaddas,ram){
        return "Yaddas: "+ yaddas+" Ram: "+ ram
    }
}

console.log(TelInfo.telName.call(Samsung));
console.log(TelInfo.telPrice.call(Iphone));
console.log(TelInfo.telMemory.call(Iphone,250,8));
console.log(TelInfo.telMemory.apply(Samsung,[250,8]))



var pages={
    page1:300,
    page2:540,
    page3:347
}
function Calc(page4,page5,page6){
    return this.page1+this.page2+this.page3+page4+page5+page6
}

var sum=Calc.bind(pages)
console.log(sum(900,101,113));










//Encapsulation

class Student
{
    constructor()
    {
        var name;
        var grade;
    }
    getName(){
        return this.name;
    }
    setName(name){
        this.name=name;
    }
    getGrade(){
        return this.grade;
    }
    setGrade(grade){
        return this.grade=grade;
    }
}

var Stu=new Student();
Stu.setName("Laman");
Stu.setGrade(95);
console.log(Stu.getName()+" "+Stu.getGrade());