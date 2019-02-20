'use strict'

function Pilote(x, y, image)
{
	this.x               = x;
	this.y               = y;
	this.image           = image;
	this.width           = this.image.width;
	this.height          = this.image.height;
	this.timeStop        = 500;
}


//Dessiner la voiture de pilote
Pilote.prototype.draw = function(context)
{
		context.drawImage(this.image, this.x, this.y);
}


//Deplacer la voiture de pilote
Pilote.prototype.move = function(canvas)
{
	var length = canvas.width - this.width; // larheur de canvas moins la largeur de voiture
	var height = canvas.height - this.height; //Ideme pour la hoteur

	if(ORDERS.left == true&&this.x>0)
	{
		this.x -=5;
	}

	if(ORDERS.right == true&&this.x<length)
	{
		this.x +=5;
	}

	if(ORDERS.up == true&&this.y>0)
	{
		this.y -=5;
	}

	if(ORDERS.down == true&&this.y<height)
	{
		this.y +=5;
	}
}

//Collision avec les adversaires

Pilote.prototype.collisionWith = function (object)
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
