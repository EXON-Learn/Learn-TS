const helloMaster = (name: string, age: number, lang: string) => {
    console.log(`Hello ${name}, you are ${age}, Wellcome ${lang}!`)
};

helloMaster("masterJung", 28, "typescript" );

export {}; // 없으면 에러. 버그같은 거 일단 넘어가기.