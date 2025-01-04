/**
 *
 * @type {import('plop').PlopGenerator}
 */
module.exports = {
  description: 'Component Generator',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What is the component name',
    },
  ],
  actions: () => {
    const componentGeneratePath = 'src/components';
    return [
      {
        type: 'add',
        path: `${componentGeneratePath}/{{pascalCase name}}/index.ts`,
        templateFile: 'generators/component/index.ts.hbs',
      },
      {
        type: 'add',
        path: `${componentGeneratePath}/{{pascalCase name}}/{{pascalCase name}}.tsx`,
        templateFile: 'generators/component/component.tsx.hbs',
      },
      {
        type: 'add',
        path: `${componentGeneratePath}/{{pascalCase name}}/{{pascalCase name}}.stories.tsx`,
        templateFile: 'generators/component/component.stories.tsx.hbs',
      },
      {
        type: 'add',
        path: `${componentGeneratePath}/{{pascalCase name}}/{{pascalCase name}}.test.tsx`,
        templateFile: 'generators/component/component.test.tsx.hbs',
      },
    ];
  },
};
