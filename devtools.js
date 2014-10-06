// Can use
// chrome.devtools.*
// chrome.extension.*

// Create a tab in the devtools area
chrome.devtools.panels.create("PixelTool", "icon_128.png", "panel.html", function(panel) {});