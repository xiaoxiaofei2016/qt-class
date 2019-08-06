/**
 * @func 就地编辑
 * @author 杜发军
 * 网站的基础类 不要重复造轮子
 * 不是具体业务，抽象的公共的业务
 */

function EditInPlace(id,parent,initVal) {
    //constructor
    this.id = id;
    // console.log(this);
    this.parentElement = parent;
    this.value = initVal || "default value";
    this.createElement();//动态DOM
    this.attachEvents();
}
EditInPlace.prototype.attachEvents = function() {
    //挂载到页面上
    let self = this;//对象
    this.staticElement.addEventListener('click',() => {
        console.log(this);//this 被覆盖
        // 应用到对象怎么办？
        this.convertToEdit();
        // self.convertToEdit();
    },false);
    this.fieldElement.addEventListener('keydown',(event) => {
        if(event.keyCode == 13) {
            this.staticElement.innerHTML = this.fieldElement.value;
            this.convertToText();
        }
    })
}

EditInPlace.prototype.createElement = function() {
    this.containerElement = document.createElement('div');
    // console.log(this);
    this.containerElement.id = this.id;
    this.staticElement = document.createElement('span');
    this.staticElement.innerText = this.value;

    this.fieldElement = document.createElement('input');
    this.fieldElement.type = 'text';
    this.fieldElement.value = this.value;
    this.containerElement.appendChild(this.fieldElement);

    this.containerElement.appendChild(this.staticElement);
    this.parentElement.appendChild(this.containerElement);
    // 两个转态
    this.convertToText();
}

EditInPlace.prototype.convertToText = function() {
    this.fieldElement.style.display = 'none';
    this.staticElement.style.display = 'inline';

}

EditInPlace.prototype.convertToEdit = function() {
    this.fieldElement.style.display = 'inline';
    this.staticElement.style.display = 'none';
}