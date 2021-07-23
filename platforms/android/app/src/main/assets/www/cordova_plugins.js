cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-ble.BLE",
      "file": "plugins/cordova-plugin-ble/ble.js",
      "pluginId": "cordova-plugin-ble",
      "clobbers": [
        "evothings.ble"
      ]
    },
    {
      "id": "cordova-plugin-device.device",
      "file": "plugins/cordova-plugin-device/www/device.js",
      "pluginId": "cordova-plugin-device",
      "clobbers": [
        "device"
      ]
    },
    {
      "id": "cordova-plugin-bluetoothle.BluetoothLe",
      "file": "plugins/cordova-plugin-bluetoothle/www/bluetoothle.js",
      "pluginId": "cordova-plugin-bluetoothle",
      "clobbers": [
        "window.bluetoothle"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-plugin-ble": "2.0.1",
    "cordova-plugin-device": "2.0.3",
    "cordova-plugin-bluetoothle": "6.3.1"
  };
});