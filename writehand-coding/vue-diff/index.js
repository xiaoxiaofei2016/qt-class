{/* <ul id="list">
  <li class="item">item1</li>
  <li class="item">item2</li>
  <li class="item">item3</li>
</ul> */}



function Element(tagName, props, children) {
  this.tagName = tagName
  this.props = props
  this.children = children
}

Element.prototype.render = function () {
  let el = document.createElement(this.tagName), // 创建节点
      props = this.props // 节点属性
  for (let propName in props) {
    el.setAttribute(propName, props[propName])
  }
  this.children.forEach((child) => {
    let childEl = (typeof child === 'object') 
    ? new Element(child.tagName, child.props, child.children).render()
    : document.createTextNode(child)
  el.appendChild(childEl)
  })
  return el
}

// diff算法 对比两棵Dom树
