require('dotenv').config()
const { Config, Secret, Context } = require('./lib')

async function run() {
    const context = Context.from_env()
    const secrets = Secret.from_env()
    const config = Config.from_env()

    // Pandium integrations can be run in 'init' or 'normal' mode.
    // When the integration is run on Pandium, Pandium will provide run_mode through context.
    // During local development run mode is defined in the .env as PAN_CTX_RUN_MODE
    console.error(`This run is in mode: ${context['run_mode']}`)
    console.error('------------------------CONFIG------------------------')
    console.error(config)

    console.error('------------------------SECRET------------------------')
    console.error(secrets)

    console.error('------------------------CONTEXT------------------------')
    console.error(context)

    console.error('------------------------ENV----------------------------')
    console.error(process.env)
}

run()
