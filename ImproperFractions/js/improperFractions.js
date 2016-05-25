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
		
	this.calculateFraction = function(){
		var numerator = document.getElementById('txt-numerator').value;
		var denominator = document.getElementById('txt-denominator').value;

		if (denominator == 0) {
			alert('Denominator must not be zero, please provide a different value');
			return;
		}

		clearCanvas();
		getMixedFraction(numerator, denominator);
	}

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

	function drawFractionAsCircle(totalCircles, totalParts, missingParts) {
		var canvas = document.getElementById('bottom-canvas');
		var ctx = canvas.getContext('2d');
		var portion = Math.PI / (totalParts / 2);
		var circlesByRow = parseInt(canvas.width / ((_this.radiousValue * 2) + 5));
		var posX = _this.radiousValue;
		var posY = _this.radiousValue;
		var hasAdditionalParts = missingParts > 0;

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
				if(hasAdditionalParts && c == totalCircles - 1 && i > missingParts - 1)
					break;
				ctx.arc(posX, posY, _this.radiousValue, i * portion, (i + 1) * portion);
				ctx.lineTo(posX, posY);
			}

			ctx.fill();
			ctx.stroke();
		}
	}

	function clearCanvas() {
		var canvas = document.getElementById('bottom-canvas');
		var ctx = canvas.getContext('2d');
		ctx.clearRect(0, 0, canvas.width, canvas.height);
	}
}})();

var improperFractionsObj = new ImproperFractions();