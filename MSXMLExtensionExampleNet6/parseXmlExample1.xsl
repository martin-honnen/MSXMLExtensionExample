<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:mf="http://example.com/mf">
    
    <xsl:template match="@* | node()">
        <xsl:copy>
            <xsl:apply-templates select="@* | node()"/>
        </xsl:copy>
    </xsl:template>
    
    <xsl:template match="XML">
        <xsl:copy>
            <xsl:apply-templates select="mf:parseXml(string())"/>
        </xsl:copy>
    </xsl:template>
    
</xsl:stylesheet>