// 相当于vue中的main.js
import React from 'react';
// 启动加载一个App组件
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// root 在public中的index.html 中
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

function Obj () {
    this.name = 'aa';

}
Obj.prototype.age = 1;
let o = new Obj();

// 实例可以访问静态属性（先有静态）
// 静态无法访问
class Obj1 {
    // 静态属性
    static staticAge = 999;
    static staticFn = function () {
        console.log('静态函数');
    };
    myAge = 123;
    myFn () {
        console.log('实例的函数', this.myAge);
    }
}
let o1 = new Obj1();
console.log(o1, o);
o1.myFn();

class Person {
    age = 100;
    constructor (props) {
        this.age = props.age;
        console.log('Person already');
    }
}

class Boy extends Person {
    name = 'Jack';
    constructor(props) {
        super(props);
        this.name = props.name;
        console.log('Boy already');
    }
}

let p = new Boy({name:'mick', age: 18});
console.log(p);