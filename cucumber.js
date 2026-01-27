module.exports =
    {

    default: {

        tags: process.env.npm_config_TAGS || "",
        paths: [

            "tests/features/"

        ],

        require: [

            "tests/steps/*.ts",
            "tests/hooks.ts"

        ],
    
        dryRun:false,
        parallel:4,

        formatOptions: {

            snippetInterface: "async-await"

        },

        requireModule:[
            "ts-node/register"
        ],

        format: [

            [

                "html",

                "cucumber-report.html"

            ],

            "summary",

            "progress-bar",

            "json:./cucumber-report.json"

        ]

    }

}
