module.exports = {
    envId: '{{envId}}',
    functionRoot: './functions',
    functions: [
        {
            name: 'app',
            config: {
                timeout: 5,
                envVariables: {
                    key: 'value'
                },
                vpc: {
                    subnetId: 'subnet-xxx',
                    vpcId: 'vpc-xxx'
                },
                runtime: 'Nodejs8.9'
            },
            triggers: [
                {
                    name: 'myTrigger',
                    type: 'timer',
                    config: '0 0 2 1 * * *'
                }
            ],
            params: {},
            handler: 'index.main'
        }
    ]
}
