import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('board', function() {
    this.route('typography');
    this.route('helper-classes');

    this.route('widgets', function() {
      this.route('cards', function() {
        this.route('basic-cards');
        this.route('colored');
        this.route('no-header');
      });

      this.route('infobox', function() {
        this.route('infobox-1');
        this.route('infobox-2');
        this.route('infobox-3');
        this.route('infobox-4');
        this.route('infobox-5');
      });
    });

    this.route('ui', function() {
      this.route('alerts');
      this.route('badges');
      this.route('breadcrumbs');
      this.route('buttons');
      this.route('collapse');
      this.route('colors');
      this.route('dialogs');
      this.route('icons');
      this.route('labels');
      this.route('list-groups');
      this.route('media');
      this.route('modals');
    });
  });
});

export default Router;
