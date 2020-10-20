# Learn-TS
꼭꼭감아라

## 변수 선언
```ts
// 변수 선언
console.log('[변수 선언]')

let name: string = 'hello'
console.log(name)
```
:(콜론) 뒤에 변수의 타입을 명시해줌 <br>

## 함수 선언
```ts
// 함수 선언
console.log('[함수 선언]')

function hello(): void {
    console.log('hello')
}
```
:(콜론) 뒤에 함수 반환값의 타입을 명시해줌 <br>

## 인터페이스
```ts
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
```

## 클래스
```ts
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
```

## 프로포티
```ts
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

export {}; // 없으면 에러. 버그같은 거 일단 넘어가기.
```

### 출처
https://code-masterjung.tistory.com/10 에서 공부한 것을 올렸습니다 :D
