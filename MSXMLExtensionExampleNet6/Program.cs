using System.Xml.XPath;
using System.Xml.Xsl;

XslCompiledTransform xsltProcessor = new XslCompiledTransform();
xsltProcessor.Load("parseXmlExample1.xsl");

var xsltArguments = new XsltArgumentList();
xsltArguments.AddExtensionObject("http://example.com/mf", new XsltExtensions());

xsltProcessor.Transform("embedded-xml-sample1.xml", xsltArguments, Console.Out);

xsltProcessor = new XslCompiledTransform();
xsltProcessor.Load("parseXmlExample2.xsl");

xsltArguments = new XsltArgumentList();
xsltArguments.AddExtensionObject("http://example.com/mf", new XsltExtensions());

xsltProcessor.Transform("embedded-xml-sample1.xml", xsltArguments, Console.Out);

public class XsltExtensions
{
    public static XPathNavigator parseXml(string xml)
    {
        var doc = new XPathDocument(new StringReader(xml));
        return doc.CreateNavigator();
    }
}