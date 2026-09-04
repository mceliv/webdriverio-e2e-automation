export const config = {
    //
    // ====================
    // Runner Configuration
    // ====================
    runner: 'local',

    //
    // ==================
    // Specify Test Files
    // ==================
    specs: [
        './test/specs/**/*.js'
    ],

    exclude: [],

    //
    // ============
    // Capabilities
    // ============
    maxInstances: 1,

    capabilities: [{
        browserName: 'chrome',

        // Força o uso do WebDriver Classic em vez de WebDriver BiDi
        'wdio:enforceWebDriverClassic': true,

        'goog:chromeOptions': {
            args: [
                '--headless=new',
                '--no-sandbox',
                '--disable-dev-shm-usage',
                '--disable-gpu',
                '--disable-notifications',
                '--disable-infobars',
                '--disable-extensions',
                '--disable-background-networking',
                '--disable-component-update',
                '--disable-default-apps',
                '--no-first-run',
                '--no-default-browser-check'
            ],

            prefs: {
                'profile.default_content_setting_values.notifications': 2,
                'profile.default_content_setting_values.popups': 0
            }
        }
    }],

    //
    // ===================
    // Test Configurations
    // ===================

    // Nível de log
    logLevel: 'info',

    // Quantidade de testes que podem falhar antes de interromper a execução
    bail: 0,

    // Timeout padrão dos comandos waitFor*
    waitforTimeout: 10000,

    // Timeout para comunicação com o WebDriver
    connectionRetryTimeout: 120000,

    // Quantidade de tentativas de conexão
    connectionRetryCount: 3,

    //
    // ==========
    // Framework
    // ==========
    framework: 'mocha',

    //
    // ===========
    // Reporters
    // ===========
    reporters: [
        'spec',
        [
            'allure',
            {
                outputDir: 'allure-results',
                disableWebdriverStepsReporting: false,
                disableWebdriverScreenshotsReporting: false
            }
        ]
    ],

    //
    // =============
    // Mocha Options
    // =============
    mochaOpts: {
        ui: 'bdd',
        timeout: 120000
    },

    //
    // =================
    // WebdriverIO Hooks
    // =================

    /**
     * Executado antes do início dos testes.
     *
     * Bloqueia requisições de redes de anúncios utilizadas pelo
     * AutomationExercise, evitando que o Google Vignette interfira
     * no fluxo de automação.
     */
    before: async function () {
        await browser.cdp('Network', 'enable')

        await browser.cdp('Network', 'setBlockedURLs', {
            urls: [
                '*://*.doubleclick.net/*',
                '*://*.googlesyndication.com/*',
                '*://*.googleadservices.com/*',
                '*://*.googletagservices.com/*',
                '*://*.adservice.google.com/*',
                '*://*.adtrafficquality.google/*',
                '*://*.googleusercontent.com/*'
            ]
        })

        console.log('Google Ads bloqueados via CDP')
    },

    //
    // =================
    // Screenshot on Fail
    // =================

    /**
     * Captura screenshot automaticamente quando um teste falhar.
     */
    afterTest: async function (test, context, { error }) {
        if (error) {
            await browser.takeScreenshot()
        }
    }
}