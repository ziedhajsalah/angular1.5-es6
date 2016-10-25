class BookmarksController {
  constructor (BookmarksModel, CategoriesModel) {
    'ngInject'

    this.BookmarksModel = BookmarksModel
    this.CategoriesModel = CategoriesModel
  }
  $onInit () {
    this.BookmarksModel.getBookmarks()
      .then(result => {
        this.bookmarks = result
      })

    this.getCurrentCategory = this.CategoriesModel
      .getCurrentCategory.bind(this.CategoriesModel)
  }
}

export default BookmarksController
