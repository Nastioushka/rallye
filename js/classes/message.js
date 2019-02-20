'use strict'

function Message(x, y, image)
{
	this.x            = x;
	this.y            = y;
	this.image        = image;
}

Message.prototype.draw = function(context)
{
  context.drawImage(this.image, this.x, this.y);
}
