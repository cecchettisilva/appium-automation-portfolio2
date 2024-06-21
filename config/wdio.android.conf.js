const path = require('path')
const {config} = require('./wdio.shared.conf')


config.port = 4723

config.specs = [
    './test/specs/**/*.js'
]

config.capabilities = [{
    // capabilities for local Appium web tests on an Android Emulator
    platformName: 'Android',
    //browserName: 'Chrome',
    'appium:deviceName': 'Android GoogleAPI Emulator',
    'appium:platformVersion': '11.0',
    'appium:automationName': 'UiAutomator2',
    'appium:App': path.join(process.cwd(),  '\\app\\API Demos_4.0_apkcombo.com.apk'),
    // 'appPackage': 'com.hmh.api', 
    // 'appActivity': 'com.hmh.api.ApiDemos'
}]

exports.config = config