// 함수 생성방법
// 1. 함수 선언문
function foo() {
    console.log('foo')
}

foo();

// 2. 함수 표현식
const foo = function () {
    console.log('foo')
}

foo();

// 3. 생성자 함수
const foo = new Function("console.log('foo')")
foo();

// 4. 화살표 함수
const foo = () => {
    console.log('foo')
}
foo();


// 함수 종류
//1. IIFE 즉시 실행 함수
(function foo() {
    console.log('foo')
}) ()

//2. 재귀함수 : 탈출 가능한 조건문 필요
function foo (arg) {
    if(arg === 3) return;
    console.log(arg)

    foo(arg + 1);
}
foo(1);

//3. 중첩함수, 내부함수
function foo(arg) {
    function bar() {
        console.log(arg)
    }
    bar()
}
foo(1)

// 4. 콜백함수
function foo(arg) {
    arg();
}

foo(() => {console.log(1)});


//함수 특징
// 1. 함수는 함수의 실제 매개변수가 될 수 있다.
function foo(arg) {
    arg();
}

function bar() {
    console.log('bar')
}

foo(bar)

// + 자바스크립트 함수의 매개변수 (기본)
function age(add) {
    var age = 2 + add;
    console.log(age)
}

function age(add, ...rest) {
    var age = 2 + add;
    console.log(rest)
}

age(5)

// 2. 함수는 함수의 반환값이 될 수 있다.
function foo(arg) {
    return arg;
}

function bar() {
    console.log('bar')
}

foo(bar)();

//+ add 매개변수를 이렇게 전달 할 수 있다.
function foo(arg) {
    return arg;
}

function age(add) {
    var age = 2 + add;
    console.log(age)
}

foo(age)(3);

// 3. 함수는 할당명령문의 대상이 될 수 있다.
const foo = function(arg) {
    return arg
}

foo(1)