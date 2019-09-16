module.exports = {
  name: 'ch-maker-quiz',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/ch-maker-quiz',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
