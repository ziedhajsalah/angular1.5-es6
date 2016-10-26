import template from './save-bookmark.html'
import './save-bookmark.styl'
import controller from './save-bookmark.controller'

const saveBookmarkComponent = {
  bindings: {
    bookmark: '<',
    save: '&',
    cancel: '&'
  },
  template,
  controller,
  controllerAs: 'saveBookmarkCtrl'
}

export default saveBookmarkComponent
