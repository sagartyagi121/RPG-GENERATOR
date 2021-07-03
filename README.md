# RPG-GENERATOR a simple rpg source bilerplate 

## Description

Simple generator of RPG boilerplate. You can either use predefined boilerplate (see list below), or add your owns.

## Requirements
Nodejs > 6.0.0

## Installation
```
npm install -g rpg-generator

RPGGen 
```
>> Answer all the prompts 

## Templates

### Default templates

Default templates are stored in [template](./templates) folder.

| Template | Language | Description |
| ------ | ------ | ------ |
| rpgws | RPGLE | RPGLE webservice template |

### Use your own templates
As RPG-boilerplate can be used as a CLI, you can define your own templates directory path. You just have to export your templates directory path `RPG_TEMPLATES_PATH` environment variable.

```
$ export RPG_TEMPLATES_PATH=/absolute/path/to/your/templates/directory
```

You can also add this line to your bash profile to keep it permanent.

### Template variable

For templating, we use ECT library. Following variables are availables:

| Variable | Description |
| ------ | ------ |
| projectName | RPG name |

## Use as CLI
```
$ RPGGen --help

  Usage: RPGGen [options] [RPG_path] [RPG_name]

  Generate a RPG boilerplate from template

  Options:

    -V, --version  output the version number
    -h, --help     output usage information
```

If it sets, CLI use `RPG_TEMPLATES_PATH` environment variable as templates directory path, otherwise it uses local [templates directory](./templates).

| Arguments | Default | Description |
| ------ | ------ | ------ |
| RPG_path | Current directory | Path where new RPG folder should be created |
| RPG_name |   | RPG project name |

## Use as API

```js
const RPG = require('RPGGen');

RPG.prompt(destination, srcTemplates, name)
  .then(() => {
    console.log('generated');
  })
  .catch(console.log);
```

| Arguments | Default | Description |
| ------ | ------ | ------ |
| destination | Current directory | Path where new folder should be created |
| srcTemplates | [../templates](./templates) | RPG templates directory |
| name |   | RPG project name |


You can test your code with:
```bash
$ git clone git@github.com:sagartyagi121/RPG-GENERATOR.git
$ cd RPG-GENERATOR
$ npm i 
$ npm run lint
$ npm run test
```

## TODO
- Add more templates
- Support ECT variables as parameters

Inspired by [@harrietty](https://medium.com/northcoders/creating-a-project-generator-with-node-29e13b3cd309)
            [@Precogs-com](https://github.com/Precogs-com/lambda-boilerplate)
