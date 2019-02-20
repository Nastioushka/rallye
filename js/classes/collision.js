'use strict'

//Fonction générale de la collision

function collision( x1,
                    y1,
                    width1,
                    height1,
                    x2,
                    y2,
                    width2,
                    height2 )
{
	var col =! (x1 > x2 + width2 	||
				x2 > x1 + width1 	||
				y1 > y2 + height2 	||
				y1 + height1 < y2 );

        
	return col;
};

/*La fonction vérifie si l'obstacle est plus à gauche ou
plus à droitte, plus bas ou plus haut par rapport à la navette
si la collision a lieu la fonction envoit true */
