// 石头剪刀布
// - 接受参数怎么办？
//   input IO
//   process 进程 程序的总管

var playerAction = process.argv[2];
// console.log(playerAction);
if (playerAction != 'rock' && playerAction != 'paper' && playerAction != 'sicssor') {
  console.log('请输入rock或paper或scissor');
} else {
  var computerAction;
  var random = Math.random() * 3
  if (random < 1) {
    computerAction = 'rock'
    console.log('石头')
  } else if (random > 1 && random < 2) {
    computerAction = 'paper'
    console.log('剪刀')
  } else {
    computerAction = 'sicssor'
    console.log('布')
  }
}
if (computerAction == playerAction) {
  console.log('平局')
} else if ((computerAction == 'rock' && playerAction == 'scissor') ||
  (computerAction == 'scissor' && playerAction == 'paper') ||
  (computerAction == 'paper' && playerAction == 'rock')) {
  console.log('你输了')
} else {
  console.log('你赢了')
}
