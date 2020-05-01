function Sky(i, x, y,ctx) {
  this.i = i
  this.x = x
  this.y = y
  this.ctx = ctx
  this.r = 2
}
Sky.prototype.draw = function() {
  this.ctx.fillStyle = 'rgba(0,0,255,1)';
  this.ctx.beginPath()
  this.ctx.arc(this.x, this.y, this.r, 0, 2*Math.PI, false)
  this.ctx.closePath()
  this.ctx.fill()
}

Sky.prototype.drop = function() {
  this.y -= 0.1
  this.draw()
}

