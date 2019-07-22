-命名空间 name space
    Phaser  {}
    1.申明领袖
    取名字 var MIUI = {}
    MIUI.version = '10.1';
    MIUI.openSystem = function(){ }
    游戏框架 最小化入侵我们的window
    污染
    2.var Phaser = {} 直接挂载到window作用域 scope
    window =>
    3.es5 类的构造 function（）{}
    函数名首字母大写 类 构造函数 方法 Phaser.Game.prototype.getName
    