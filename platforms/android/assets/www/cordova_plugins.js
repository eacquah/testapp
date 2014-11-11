cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/org.apache.cordova.dialogs/www/notification.js",
        "id": "org.apache.cordova.dialogs.notification",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.dialogs/www/android/notification.js",
        "id": "org.apache.cordova.dialogs.notification_android",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "file": "plugins/com.phonegap.plugins.twitter/www/TwitterPlugin.js",
        "id": "com.phonegap.plugins.twitter.TwitterPlugin",
        "clobbers": [
            "Twitter"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "org.apache.cordova.dialogs": "0.2.10",
    "com.phonegap.plugins.twitter": "0.3.2"
}
// BOTTOM OF METADATA
});