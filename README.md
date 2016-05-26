# Linden technical Test

## Overview

This test has two exercises 'Improper Fraction' and 'Graphical Editor'.

- The former represents an improper fraction, which has to be calculated from an enumerator and denominator provided by the user, the respective result could be seen in 3 different ways:

* An array of circles
* A mixed fraction
* A decimal with a float precision of 4

- The latter is an interactive designer which allows the user to draw and manipulate 4 different geometrical objects
(Circles, Triangles, Squares and rectangules). There are 4 different options while editing 'Delete', 'Rotate', 'Drag' and 'Resize' but not all of them are available for all the geometrical figures.

## Version
0.0.1

## Files

* Improper Fractions:

-index.html
-js/improperFrations.js

* Graphical Editor:

-index.html
-js/editor.js
-js/External/fabric.min.js
-img/delete.png
-img/edit.ico

## Design Decisions

* Improper Fractions:
The UI was made using HTML5 and has two inputs and 3 outputs. The UI uses javascript and canvas code that implements the logic to calculate the outputs and additionally renders them into the UI.

The problem was resolved without using external frameworks because HTML5 offers functionalities that allow to fullfil the requirements.
A variable radious was declared an its default value is 50, the number of circles drawn in each row in the canvas depends on this value 
and the width of the canvas. Feel Free to modify it! 

* Graphical Editor:
The UI was made using HTML, 2 canvas to be more specific which later were used to instante objects from the external framework fabricjs. This framework was selected for solving the problem because it easily allows us to interact with geometrical figures and images (Drag, Resize, Rotate, Delete and create). The palette also was designed with fabricjs because it offers the option of drawing static geometrical objects and interact with them.

a JS file implemented the initialize methods to render the palette and the behaviors according to the event raised, every node in the palette has set an identifier to be abe to recognized them.

## Setup and run

In order to run this both Exercises the user should open the index.html file in a browser.

*Improper Fractions

Then, to see how the fractions html works the user must provide an enumerator and denominator (which must be greater than zero) and finally clic the draw button.

* Graphical Editor:

If the user wants to draw geometrical figures the desired one must be clicked, to interact with the ones drawn in the canvas the hand icon in the edit section must be selected. This allows the user to drag any object, to resize squares and circles and to rotate triangles. Finally, the delete icon must be selected if the user wants to delete an icon in the canvas and then clic the desired one.