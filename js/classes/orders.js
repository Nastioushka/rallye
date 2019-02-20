'use strict'

/*---------Commandes Clavier---------------*/

// Lier l'action au clavier
document.addEventListener('keydown', onKeyDown);
document.addEventListener('keyup', onKeyUp);

const ORDERS =
{
	left: 	false,
	right: 	false,
	down: 	false,
	up: 	false,
};

function onKeyDown(evt)
{
	if(evt.keyCode === 37)
	{
		ORDERS.left = true;
	}

	if(evt.keyCode === 39)
	{
		ORDERS.right = true;
	}

	if(evt.keyCode === 40)
	{
		ORDERS.down = true;
	}
	
	if(evt.keyCode === 38)
	{
		ORDERS.up = true;
	}
};

function onKeyUp(evt)
{
	if(evt.keyCode === 37)
	{
		ORDERS.left = false;
	}

	if(evt.keyCode === 39)
	{
		ORDERS.right = false;
	}

	if(evt.keyCode === 40)
	{
		ORDERS.down = false;
	}
	
	if(evt.keyCode === 38)
	{
		ORDERS.up = false;
	}
}


