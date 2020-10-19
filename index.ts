// 변수 선언
console.log('[변수 선언]')

let name: string = 'hello'
console.log(name)

// 인터페이스
console.log('[인터페이스]')

interface Info {
    name: string
    age: number
    description: string
}

const showInfo = (info: Info) => console.log(`Name : ${info.name}\nAge : ${info.age}\nDescription : ${info.description}`)
const me: Info = {
    name: 'exon',
    age: 14,
    description: '멍청함'
}
showInfo(me)

// 클래스
console.log('[클래스]')

class Student {
    public name: string
    public age: number
    public classNum: number
    
    // 클래스 생성자
    constructor(name: string, age: number, classNum: number) {
        this.name = name
        this.age = age
        this.classNum = classNum
    }
}

let student: Student = new Student('exon', 14, 1)
console.log(`Name : ${student.name}]\nAge : ${student.age}\nClass : ${student.classNum}`)

export {}; // 없으면 에러. 버그같은 거 일단 넘어가기.