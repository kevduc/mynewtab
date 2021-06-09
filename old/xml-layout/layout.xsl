<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:output method="html" indent="yes" encoding="UTF-8"/>

<xsl:template match="/layout">
	<xsl:apply-templates/>
</xsl:template>


<xsl:template match="column">
	<div class="column" style="width:{@width};">

		<xsl:apply-templates select="title"/>

		<div class="column-content">
			<xsl:apply-templates select="*[not(self::title)]"/>
		</div>
	</div>
</xsl:template>


<xsl:template match="title">
	<div class="column-title">
		<h1><xsl:value-of select="."/></h1>
		<hr/>
	</div>
</xsl:template>


<xsl:template match="separator">
	<hr class="sub-content"/>
</xsl:template>


<xsl:template match="list">
	<ul class="column-list">
		<xsl:apply-templates/>
	</ul>
</xsl:template>


<xsl:template match="item">
	<li><a href="{@href}" class="item">
		<xsl:apply-templates/>
	</a></li>
</xsl:template>


<xsl:template match="icon">
	<img class="item-icon" src="{@src}"/>
</xsl:template>


<xsl:template match="label">
	<span class="item-text"><xsl:value-of select="."/></span>
</xsl:template>


<!-- Special case item for doc drop-down selection -->
<xsl:template match="item-select">
	<li><div class="item item-nohover" id="other_releases">
		<xsl:apply-templates/>
		<select id="doc_release">
			<option selected="selected" disabled="disabled" hidden="hidden">R...</option>
			<option value="R2014b">R2014b</option>
			<option value="R2014a">R2014a</option>
			<option value="R2013b">R2013b</option>
			<option value="R2013a">R2013a</option>
			<option value="R2012b">R2012b</option>
			<option value="R2012a">R2012a</option>
			<option value="R2011b">R2011b</option>
			<option value="R2011a">R2011a</option>
			<option value="R2010b">R2010b</option>
			<option value="R2010a">R2010a</option>
			<option value="R2009b">R2009b</option>
			<option value="R2009a">R2009a</option>
			<option value="other">More...</option>
		</select>
	</div></li>
</xsl:template>

</xsl:stylesheet>