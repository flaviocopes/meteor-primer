Package.describe({
  name: 'flaviocopes:primer',
  version: '2.1.0',
  // Brief, one-line summary of the package.
  summary: "Meteor package of GitHub's Primer CSS Toolkit",
  git: 'http://github.com/flaviocopes/meteor-primer.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.addFiles([
    'css/user-content.min.css',
    'css/primer.min.css'
  ], 'client');
});
