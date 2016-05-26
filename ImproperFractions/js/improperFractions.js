/**
 * @author Juan Camilo Perez
 * @date May 25, 2016
 */

(function() {

  /**
   * Represents the constructor function of ImproperFractions.
   * @constructor
   */
  this.ImproperFractions = function() {

    var _this = this;

	this.radiousValue = 50;
	
	/**
	* Obtains the parameters from the UI and validates the denominator
	* @constructor
	*/	
	this.calculateFraction = function(){
		var numerator = document.getElementById('txt-numerator').value;
		var denominator = document.getElementById('txt-denominator').value;

		if (denominator == 0) {
			alert('Denominator must not be zero, please provide a different value');
			return;
		}
		
		//Cleans the objects that have previously been drawn
		clearCanvas();
		getMixedFraction(numerator, denominator);
	}
	
	/**
	 * Calculates the mixed and the improper fractions from the parameters
	 * @param {Number} numerator
	 * @param {Number} denomitor
	 */
	function getMixedFraction(numerator, denominator)
	{
		var divisionResult = parseFloat(numerator/denominator).toFixed(4);
		document.getElementById('decimal-result').innerHTML = divisionResult;

		var integerPart = parseInt(divisionResult);
		var numeratorMixed = numerator - (integerPart * denominator);
		var mixedValue = integerPart + '<sup>' + numeratorMixed + '</sup>&frasl;<sub>' + denominator + '</sub>';;
		document.getElementById('mixed-fraction-result').innerHTML = mixedValue;
		
		drawFractionAsCircle(integerPart, denominator, numeratorMixed);
	}

	/**
	 * Draws all the circles that have to be drawn from the result od the division
	 * @param {Number} totalCircles: Completed Circles to be drawn
	 * @param {Number} totalParts: Number of parts contained inside each circletotalParts
	 * @param {Number} missingParts: Number of portion that can be drawn from the residuum
	 */
	function drawFractionAsCircle(totalCircles, totalParts, missingParts) {
		var canvas = document.getElementById('bottom-canvas');
		var ctx = canvas.getContext('2d');
		
		//Constant that helps to calculate the initial and final angle according to nmber of parts
		var portion = Math.PI / (totalParts / 2);
		
		//Number of circles that can be drawn by row according to the width of the canvas
		var circlesByRow = parseInt(canvas.width / ((_this.radiousValue * 2) + 5));
		var posX = _this.radiousValue;
		var posY = _this.radiousValue;
		var hasAdditionalParts = missingParts > 0;

		//If there a residuum I need to draw an additional Circle
		if(hasAdditionalParts)
			totalCircles++;
		
		for(var c = 0; c < totalCircles; c++)
		{
			posX = (c % circlesByRow) == 0 ? _this.radiousValue : ((_this.radiousValue * 2) + 5) + posX;
			posY = (c % circlesByRow) == 0 && c > 0 ? ((_this.radiousValue * 2) + 5) + posY : posY;
			ctx.fillStyle = 'gray'
			ctx.beginPath();
			ctx.moveTo(posX, posY);

			for (var i = 0; i < totalParts; i++) {
				//If there is a residuum and this is the last cirle I need to check how 
				//many portions should be drawn
				if(hasAdditionalParts && c == totalCircles - 1 && i > missingParts - 1)
					break;
				ctx.arc(posX, posY, _this.radiousValue, i * portion, (i + 1) * portion);
				ctx.lineTo(posX, posY);
			}

			ctx.fill();
			ctx.stroke();
		}
	}

	/**
	 * Clear all the elements drawn in the canvas
	 */
	function clearCanvas() {
		var canvas = document.getElementById('bottom-canvas');
		var ctx = canvas.getContext('2d');
		ctx.clearRect(0, 0, canvas.width, canvas.height);
	}
}})();

var improperFractionsObj = new ImproperFractions();