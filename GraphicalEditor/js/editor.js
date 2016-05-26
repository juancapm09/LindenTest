/**
 * @author Juan Camilo Pérez
 * @date May 25, 2016
 */
var deletingNode = false;
var diagramCanvas = undefined;
var canvas = undefined;

/**
* Initializes the canvas that represents the Diagram and the palette
*/
function initDiagram(){
	diagramCanvas = new fabric.Canvas('diagram-canvas');
	diagramCanvas.on('object:selected', function(e) {
    	onObjectDiagramClic(e);
	});
	initPalette();
}

/**
 * Event called when clicking a node in the Diagram
*/
function onObjectDiagramClic(currentNode){
	if(deletingNode){
		currentNode.target.remove();
	}
}

/**
* Event called when clicking a node in the Palette
*/
function onObjectPaletteClic(currentNode){
	activeSelectAction(false);
	deletingNode = false;

	switch(currentNode){
		case 'Rect':
			addRect();
    	break;
    	case 'Circle':
    		addCircle();
    	break;
    	case 'Triangle':
    		addTriangle();
    	break;
    	case 'Delete':
    		deletingNode = true;
    		activeSelectAction(true);
    	break;
    	case 'Edit':
    		activeSelectAction(true);
    	break;
    }
}

/**
* Initializes the canvas that represents the palette and all its objects
*/
function initPalette(){
	canvas = new fabric.Canvas('palette-canvas');

	canvas.add(new fabric.IText('ADD', { 
		fontFamily: 'arial black', left: 10, top: 10, fontSize: 25, selectable: false
	}));

	//Adds the 'ADD' panel and its possible options
	canvas.add(
		new fabric.Rect({ top: 40, left: 0, width: 190, height: 3, fill: 'black', selectable: false }),
		new fabric.Rect(
		{ 
			top: 60, left: 10, width: 80, height: 80, fill: 'white', stroke: 'black',
			strokeWidth: 2, hasRotatingPoint: false,  lockMovementX: true,
			lockMovementY: true, hasControls: false, lockUniScaling: true,
			lockScalingX: true, lockScalingY: true, alt: 'Rect'
		}),
		new fabric.Circle(
		{ 
			top: 60, left: 100, radius: 40, fill: 'white', stroke: 'black',
			strokeWidth: 2, hasRotatingPoint: false,  lockMovementX: true,
			lockMovementY: true, hasControls: false, lockUniScaling: true,
			lockScalingX: true, lockScalingY: true, alt: 'Circle'
		}),
		new fabric.Triangle(
		{ 
			top: 150, left: 10, width: 80, height: 80, fill: 'white', stroke: 'black',
			strokeWidth: 2, hasRotatingPoint: false,  lockMovementX: true,
			lockMovementY: true, hasControls: false, lockUniScaling: true,
			lockScalingX: true, lockScalingY: true, alt: 'Triangle'
		}),
		new fabric.Rect(
		{ 
			top: 240, left: 0, width: 190, height: 3, fill: 'black', selectable: false 
		}));

	//Adds the 'EDIT' panel and its possible options (Delete and Edit)
	canvas.add(new fabric.IText('EDIT', { 
		fontFamily: 'arial black', left: 10, top: 250, fontSize: 25, selectable: false
		}));

	canvas.add(
		new fabric.Rect(
		{ 
			top: 280, left: 0, width: 190, height: 3, fill: 'black', selectable: false 
		}));
	fabric.Image.fromURL('img/delete.png', function(img) {
		canvas.add(img.set(
		{ 
			left: 10, top: 290, width: 80, height: 80, 
			hasRotatingPoint: false,  lockMovementX: true,  lockMovementY: true,
			hasControls: false , lockUniScaling: true, lockScalingX: true,
			lockScalingY: true, alt: 'Delete'
		}));});
	fabric.Image.fromURL('img/edit.ico', function(img) {
		canvas.add(img.set(
		{ 
			left: 100, top: 290, width: 80, height: 80,
			hasRotatingPoint: false,  lockMovementX: true,  lockMovementY: true, 
			hasControls: false, lockUniScaling: true, lockScalingX: true,
			lockScalingY: true, alt: 'Edit'
		}));});

	canvas.on('object:selected', function(e) {
       onObjectPaletteClic(e.target.alt); 
    });
}

/**
* Adds a Rectangle to the Diagram canvas
*/
function addRect(){
	diagramCanvas.add(
		new fabric.Rect(
		{ 
			top: 50, left: 50, width: 100, height: 100, fill: 'red', stroke: 'black',
			strokeWidth: 2, selectable: false, hasRotatingPoint: false, alt: 'Rect' 
		}));
}

/**
* Adds a Circle to the Diagram canvas
*/
function addCircle(){
	diagramCanvas.add(
		new fabric.Circle(
		{ 
			top: 200, left: 200, radius: 50, fill: 'green', stroke: 'black',
			strokeWidth: 2, selectable: false, hasRotatingPoint: false,
			lockUniScaling: true, alt: 'Circle' 
		}));
}

/**
* Adds a Triangle to the Diagram canvas
*/
function addTriangle(){
	diagramCanvas.add(
		new fabric.Triangle(
		{
			top: 50, left: 400, width: 100, height: 100, fill: 'blue',stroke: 'black',
			strokeWidth: 2, selectable: false, lockUniScaling: true, lockScalingX: true,
			lockScalingY: true, alt: 'Triangle'
		}));
}

/**
* De/actives the selection property for all the nodes drawn in the Diagram canvas
*/
function activeSelectAction(value) {
	diagramCanvas.deactivateAll();
    var nodes = diagramCanvas.getObjects();

    for (var i = 0; i < nodes.length; i++) {
        nodes[i]['selectable'] = value;
    }
}
