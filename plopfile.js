module.exports = function (plop) {
    // controller generator
    plop.setGenerator('rpgws', {
        description: 'application controller logic',
        prompts: [{
            type: 'list',
            name: 'name',
            choices: ['ws', 'subf'],
            message: 'choose a template'
        }],
        actions: [{
            type: 'add',
            path: 'src/rpgws/mainpgm.rpgle',
            templateFile: 'templates/rpgws/mainpgm.sqlrpgle'
        },
        {
            type: 'add',
            path: 'src/rpgws/cpypgm.rpgle',
            templateFile: 'templates/rpgws/cpypgm.rpgle'
        }]
    });
};