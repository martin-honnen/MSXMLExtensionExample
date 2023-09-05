var xmlDoc = new ActiveXObject('Msxml2.DOMDocument.6.0');
xmlDoc.load('embedded-xml-sample1.xml');

var xsltDoc = new ActiveXObject('Msxml2.FreeThreadedDOMDocument.6.0');
xsltDoc.load('parseXmlExample1.xsl');

var xsltTemplate = new ActiveXObject('Msxml2.XSLTemplate.6.0');
xsltTemplate.stylesheet = xsltDoc;

var xsltProcessor = xsltTemplate.createProcessor();

xsltProcessor.addObject({ "parseXml": function(xml) { var doc = new ActiveXObject('Msxml2.DOMDocument.6.0'); doc.loadXML(xml); return doc; }}, 'http://example.com/mf');

xsltProcessor.input = xmlDoc;

xsltProcessor.transform();

WScript.Echo(xsltProcessor.output);


xsltDoc = new ActiveXObject('Msxml2.FreeThreadedDOMDocument.6.0');
xsltDoc.load('parseXmlExample2.xsl');

var xsltTemplate = new ActiveXObject('Msxml2.XSLTemplate.6.0');
xsltTemplate.stylesheet = xsltDoc;

xsltProcessor = xsltTemplate.createProcessor();

xsltProcessor.addObject({ "parseXml": function(xml) { var doc = new ActiveXObject('Msxml2.DOMDocument.6.0'); doc.loadXML(xml); return doc; }}, 'http://example.com/mf');

xsltProcessor.input = xmlDoc;

xsltProcessor.transform();

WScript.Echo(xsltProcessor.output);
