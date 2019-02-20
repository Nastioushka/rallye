'use strict'

/*---------------Objet Jue Courses de voitures-------------*/

function Play()
{
	//Parametres de Canvas
	this.canvas = document.getElementById('canvas');
	this.context = this.canvas.getContext('2d');
	this.canvas.width = 1000;
	this.canvas.height = 600;

	//Decor
	//this.borders = [];
	this.lines	= [];

	//Images
	this.message = null;
	this.carsImgs  = [];
	this.messageGameOwer = null;
	this.numbersImgs = [];

	//Compteur et score
	this.count= 3;
	this.score	= null;
	this.collision = false;

	//Objets
	this.pilote	= null;
	this.cars	= [];
	this.one = null;
	this.two = null;
	this.three = null;

}

/*---------------Initialisation de jue----------------*/

Play.prototype.start = function()
{

	//Recuperation paramtres HTML
	this.carsImgs = document.getElementsByClassName('cars');
	this.messageGameOwer = document.getElementById('gameOwer');
	this.score = document.getElementById("score");
	this.numbersImgs = document.getElementsByClassName('numbers');

	//Instanciation des objets
	this.one = new Message(350, 150, this.numbersImgs[0]);
	this.two = new Message(350, 150, this.numbersImgs[1]);
	this.three = new Message(350, 150, this.numbersImgs[2]);
		this.message = new Message(350, 150, this.messageGameOwer);
	this.pilote = new Pilote(350, 400, this.carsImgs[0]);


	//Instanciation des voitures
	for (var i = 0; i < 3; i++)
	{
		this.cars.push(new Car(
								Math.random()*(this.canvas.width - this.carsImgs[1].width) ,
								-800,
								this.carsImgs[1]));
	}

	//Instanciation des lignes
	for(var i = 0; i <= 3; i++)
	{
		this.lines.push(new Line(450, 450)); //Position des lignes
	}

	//Instanciation de décore bordure

	/*for(var i = 0; i <= 6; i++)
	{
		if(i%2 == 0)
		{
			this.borders.push(new Border(20, 0, 'yellow'));
		}
		else
		{
			this.borders.push(new Border(20, 0, 'orange'));
		}

	}

	for(var i = 0; i <= 6; i++)
	{
		if(i%2 == 0)
		{
			this.borders.push(new Border(930, 0, 'yellow'));
		}
		else
		{
			this.borders.push(new Border(930, 0, 'orange'));
		}

	}*/
}

/*---------------Activation de compteur--------------*/
Play.prototype.drawCount = function()
{

	var that = this; //Grader la valeur de l'objet
	var time = 1000; //Deffinir le temps

	that.three.draw(that.context);
	setTimeout(function() {that.context.clearRect(0, 0, 1000, 600);}, time);
	setTimeout(function() {that.two.draw(that.context);}, (time*2));
	setTimeout(function() {that.context.clearRect(0, 0, 1000, 600);}, (time*3));
	setTimeout(function() {that.one.draw(that.context);}, (time*4));
	setTimeout(function() {that.context.clearRect(0, 0, 1000, 600);}, (time*5));
	setTimeout(function() {that.draw()}, (time*5.5) );;
}

/*--------------Déssiner le jue-------------------*/
Play.prototype.draw = function()
{
	var col = false;
	//Effacer et redéssiner le canvas
	this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

	//Dessiner et deplacer les lignes
	for (var i = 0; i < this.lines.length; i++)
	{
		this.lines[i].draw(this.context);
		this.lines[i].move(this.canvas);
	}
	//Dessiner les bordures

	//Dessiner et deplacer la voiture de pilote
	this.pilote.draw(this.context);
	this.pilote.move(this.canvas);

	//Dessiner les adversaires
	for(i = 0; i < this.cars.length; i++)
	{
		this.cars[i].draw(this.context);
		this.cars[i].move(this.canvas);

		if(this.pilote.collisionWith(this.cars[i]))
		{
			col = true;
			console.log(col);
			if(this.count>0)
			{
				this.cars[i].reset(this.canvas);
				this.count--;
				this.score.innerHTML= this.count;
			}
		}
	}

//Revoir
		if(this.cars[0].collisionWith(this.cars[1])||
			this.cars[0].collisionWith(this.cars[2]))
		{
			this.cars[0].reset(this.canvas);
		}

		if(this.cars[1].collisionWith(this.cars[0])||
			this.cars[1].collisionWith(this.cars[2]))
		{
			this.cars[1].reset(this.canvas);
		}

		if(this.cars[2].collisionWith(this.cars[0])||
			this.cars[2].collisionWith(this.cars[1]))
		{
			this.cars[2].reset(this.canvas);
		}

//Redessiner le canvas pour creer l'animation

if(this.count > 0) {
	requestAnimationFrame(this.draw.bind(this));
}else{
 this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
 this.message.draw(this.context);
}




	// if(this.count > 0&&col == false)
	// {
	// 	requestAnimationFrame(this.draw.bind(this));
	// }else if(col == true&&this.count > 0) {
	// 	var req = requestAnimationFrame(this.draw.bind(this));
	// 	cancelAnimationFrame(req);
	// 	var that = this;
	// 	setTimeout(function(){requestAnimationFrame(that.draw)}, 1000);
	// }else if(col== true&&this.count <= 0)
	// {
	//  this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
	//  this.message.draw(this.context);
 // }
	// else if(this.collision == true&&this.count > 0)
	// {
	// 	var that = this;
	// 	var maRequ = requestAnimationFrame(this.draw.bind(this));
	// 	cancelAnimationFrame(maRequ);
	// 	this.collision = false;
	//
	// }

};
