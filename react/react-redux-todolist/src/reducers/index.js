const defaultList = [
  {
    complete: false,
    content: 'eat'
  }
]
// 生成了一个默认值 reducers 纯函数
// immutable 不可变数据
function todoList(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          complete: false,
          content: action.content
        }
      ]
    default:
      return defaultList
  }
}

export default todoList;