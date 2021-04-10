// Make D3 Animated Scatter Plot

// Pre-Data Setup
// set up  width, height and margins of  graph.


// width of the containing box
var width = parseInt(d3.select("#scatter").style("width"));

// height of  graph
var height = width - width / 3.9;

// Margin
var margin = 20;

// set up label area
var labelArea = 110;

// set up padding for axes
var tPadBot = 40;
var tPadLeft = 40;

// Create canvas for graph
var svg = d3
  .select("#scatter")
  .append("svg")
  .attr("width", width)
  .attr("height", height)
  .attr("class", "chart");

// Set  radius for each dot.

var circRadius;
function getCircle() {
  if (width <= 530) {
    circRadius = 5;
  }
  else {
    circRadius = 10;
  }
}
getCircle();

// Bottom Axis
// ==============

// Create a group element for bottom axes labels.
svg.append("g").attr("class", "xText");

// Use xText to select the group.
var xText = d3.select(".xText");

// Set xText transform property, placing it at the bottom of the graph.

function xTextRefresh() {
  xText.attr(
    "transform",
    "translate(" +
      ((width - labelArea) / 2 + labelArea) +
      ", " +
      (height - margin - tPadBot) +
      ")"
  );
}
xTextRefresh();