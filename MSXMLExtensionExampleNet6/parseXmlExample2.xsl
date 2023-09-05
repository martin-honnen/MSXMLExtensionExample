<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:mf="http://example.com/mf"
                xmlns:iso="urn:iso:std:iso:20022:tech:xsd:taco.097.001.90"
                exclude-result-prefixes="mf iso">
    
    <xsl:template match="@* | node()">
        <xsl:copy>
            <xsl:apply-templates select="@* | node()"/>
        </xsl:copy>
    </xsl:template>
    
    <xsl:template match="XML">
        <element1>
            <xsl:variable name="embeddedDoc" select="mf:parseXml(string())"/>
            <xsl:value-of select="$embeddedDoc/iso:Document/iso:GrpHdr/iso:MsgId"/>
        </element1>
    </xsl:template>
    
</xsl:stylesheet>