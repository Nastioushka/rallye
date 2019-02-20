'use strict'

function Border(x, y, color)
{
	this.x		= x;
	this.y		= y;
	this.length	= 50;
	this.height	= 100;
	this.color	= color;
	this.speed	= 20;
}

//Dessiner les bordures
Border.prototype.draw = function(context)
{
	context.fillStyle = this.color;
	context.fillRect(this.x, this.y, this.length, this.height);
}

//Deplacer les lignes
Border.prototype.move = function(canvas)
{
	if(this.y > canvas.height)
	{
		this.y = 0;
	}
	 this.y += this.speed;
}
