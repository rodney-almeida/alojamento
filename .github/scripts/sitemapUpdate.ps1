param (
    [string]$XmlFilePath
)

# Load XML from a file
[xml]$my_xml = Get-Content $XmlFilePath
$now = (Get-Date).ToString("yyyy-MM-ddTHH:mm:ss")+"+00:00"

# Modify a child element's value
foreach ($element in $my_xml.urlset.url) {
    $element.lastmod = $now
}

# Save the modified XML back to the file
$my_xml.Save($XmlFilePath)