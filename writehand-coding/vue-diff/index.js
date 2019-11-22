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
function diff (oldTree, newTree) {
  let index = 0 // 节点的标志
  let patches = {} // 记录每个节点差异的地方
  dfsWalk(oldTree, newTree, index, patches) // 找不同
  return patches
}
function dfsWalk(oldNode, newNode, index, patches) {
  // 对比oldTree和newTree的差异，把不同的地方记录下来
  var currentPatch = patches[walker.index]
  if (newNode !== null && oldNode.tagName == newNode,tagName && oldNode.key !== newNode.key) {
    currentPatch.push({ type: 'div', props: { id: 'container' } })
  }
  patches[index] = currentPatch

  diffChildren(oldNode.children, newNode.children, index, patches)
}

function diffChildren(oldChildren, newChildren, index, patches) {
  let leftNode = null
  let currentNodeIndex = index
  oldChildren.forEach((child, i) => {
    var newChild = newChildren[i]
    currentNodeIndex = (leftNode && leftNode.count) // 计算节点的标记
    ? currentNodeIndex + leftNode.count + 1
    : currentNodeIndex + 1
    dfsWalk(child, newChild, currentNodeIndex, patches) // 遍历子节点，找子节点中的不同
    leftNode = child
  })
}

function patch(node, patches) {
  var walker = { index: 0 } // 记录当前节点的标志
  dfsWalk(node, walker, patches)
}