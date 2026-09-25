export default function (plop) {
  plop.setHelper('json', JSON.stringify);

  plop.setGenerator('slide', {
    description: 'Create a Marp slide deck',
    prompts: [
      {
        type: 'input',
        name: 'slug',
        message: 'slug (e.g. 260925-example)',
        validate: (value) => /^\d{6}-[a-z0-9][a-z0-9-]*$/.test(value)
          || 'Use YYMMDD-name with lowercase letters and numbers.',
      },
      {
        type: 'input',
        name: 'title',
        message: 'title',
        validate: (value) => value.trim().length > 0 || 'Title is required.',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/{{slug}}/index.md',
        templateFile: 'templates/slide/index.md.hbs',
      },
      {
        type: 'add',
        path: 'src/{{slug}}/images/.gitkeep',
        template: '',
      },
    ],
  });
}
