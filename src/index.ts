// 변수 선언
console.log('[변수 선언]')

let name: string = 'hello'
console.log(name)

// 함수 선언
console.log('\n[함수 선언]')

function hello(): void {
    console.log('hello')
}

hello()

// 배열, 튜플 선언
console.log('\n[배열, 튜플 선언]')

// 배열
const p: number[] = [1, 1, 2, 3, 2, 1]
const todayClass: Array<string> = ['Korean', 'Math', "English"] // 제네릭(일반화)
// 튜플
const exam: [string, number] = ['Korean', 100]


// 인터페이스
console.log('\n[인터페이스]')

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
console.log('\n[클래스]')

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

// 프로포티
console.log('\n[프로포티]')

class Teacher {
    // pricate 은 '주로' 언더바(_) 를 붙인다
    public _name: string
    
    get name(): string {
        return this._name
    }

    set name(str: string) {
        this._name = str
    }

    // 클래스 생성자
    constructor(name: string) {
        this._name = name
    }
}

let teacher = new Teacher('Mrs.Park')
teacher.name = 'Mr.Lee'
console.log(`${teacher.name}`)


// 끝
console.log('[와! 정말 수고했어요~! 끝!]')

export {}; // 없으면 에러. 버그같은 거 일단 넘어가기.