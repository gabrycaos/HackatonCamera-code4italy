cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/org.apache.cordova.inappbrowser/www/inappbrowser.js",
        "id": "org.apache.cordova.inappbrowser.inappbrowser",
        "clobbers": [
            "window.open"
        ]
    },
    {
        "file": "plugins/com.anz.pdfviewer/www/pdf-viewer.js",
        "id": "com.anz.pdfviewer.PdfViewer",
        "clobbers": [
            "pdfviewer"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "org.apache.cordova.inappbrowser": "0.4.1-dev",
    "com.anz.pdfviewer": "0.2.3",
    "org.apache.cordova.console": "0.2.9-dev"
}
// BOTTOM OF METADATA
});