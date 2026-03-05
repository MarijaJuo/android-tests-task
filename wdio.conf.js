exports.config = {

    runner: 'local',
    port: 4723,

    specs: [
        './test/specs/**/*.js'
    ],

    exclude: [],

    maxInstances: 1,

    capabilities: [{
        platformName: 'Android',

        'appium:deviceName': 'Android Emulator',
        'appium:platformVersion': '15.0',

        'appium:automationName': 'UiAutomator2',

        // kelias iki tavo APK
        'appium:app': './android/app/build/outputs/apk/debug/app-debug.apk',

        'appium:autoGrantPermissions': true
    }],

    logLevel: 'info',

    bail: 0,

    waitforTimeout: 10000,

    connectionRetryTimeout: 120000,

    connectionRetryCount: 3,

    services: [
        ['appium', {
            command: 'appium',
            args: {
                relaxedSecurity: true
            }
        }]
    ],

    framework: 'mocha',

    reporters: ['spec'],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

    beforeTest: function (test) {
        console.log(`Pradedamas testas: ${test.title}`)
    },

    afterTest: function (test, context, { passed }) {
        if (!passed) {
            console.log(`Testas nepavyko: ${test.title}`)
        }
    }
}