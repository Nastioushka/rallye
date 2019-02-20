'use strict'

function Car(x, y, image)
{
	this.x		= x;
	this.y		= y;
	this.image = image;
	this.width = image.width;
	this.height = image.height;
	this.speed	= Math.random()*5 + 2;
};

//Dessiner la voiture
Car.prototype.draw = function(context)
{
	context.drawImage(this.image, this.x, this.y);
};

//Recreer la voiture aprés la collision

Car.prototype.reset = function(canvas)
{
	this.y = 0 - this.height;
	this.x = Math.random()*(canvas.width-this.width);
};


//Deplacer la voiture
Car.prototype.move = function(canvas)
{
	if (this.y > canvas.height)
	{
		this.reset(canvas);
	}
	this.y += this.speed;
};

//COllision des voitures

Car.prototype.collisionWith = function (object)
{
	if (collision(	this.x,
					this.y,
					this.width,
					this.height,
					object.x,
					object.y,
					object.width,
					object.height))
	{
		return true;
	}
}
