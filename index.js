"use strict";
exports.__esModule = true;
// 변수 선언
console.log('[변수 선언]');
var name = 'hello';
console.log(name);
// 인터페이스
console.log('\n[인터페이스]');
var showInfo = function (info) { return console.log("Name : " + info.name + "\nAge : " + info.age + "\nDescription : " + info.description); };
var me = {
    name: 'exon',
    age: 14,
    description: '멍청함'
};
showInfo(me);
// 클래스
console.log('\n[클래스]');
var Student = /** @class */ (function () {
    // 클래스 생성자
    function Student(name, age, classNum) {
        this.name = name;
        this.age = age;
        this.classNum = classNum;
    }
    return Student;
}());
var student = new Student('exon', 14, 1);
console.log("Name : " + student.name + "]\nAge : " + student.age + "\nClass : " + student.classNum);
// 프로포티
console.log('\n[프로포티]');
var Teacher = /** @class */ (function () {
    // 클래스 생성자
    function Teacher(name) {
        this._name = name;
    }
    Object.defineProperty(Teacher.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (str) {
            this._name = str;
        },
        enumerable: false,
        configurable: true
    });
    return Teacher;
}());
var teacher = new Teacher('Mrs.Park');
teacher.name = 'Mr.Lee';
console.log("" + teacher.name);
