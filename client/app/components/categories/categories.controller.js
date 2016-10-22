class CategoriesController {
  constructor (CategoriesModel) {
    'ngInject'
    CategoriesModel.getCategories()
      .then(result => {
        this.categories = result
      })
  }
}

export default CategoriesController
