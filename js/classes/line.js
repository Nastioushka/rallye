'use strict'

function Line(x, y)
{
	this.x		= x;
	this.y		= y;
	this.length	= 50;
	this.height = 100;
	this.color	= 'white'
	this.speed	= 20;
}

//Déssiner les lignes 

Line.prototype.draw = function (context)
{
	context.fillStyle = this.color;
	context.fillRect(this.x, this.y, this.length, this.height);
}



//Deplacer les lignes

Line.prototype.move	= function(canvas)
{
	if (this.y > canvas.height)
	{
		this.y = 0;
	}

	this.y += this.speed;
};