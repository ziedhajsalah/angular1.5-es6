class CategoriesModel {
  constructor ($q, $rootScope) {
    'ngInject'

    this.$q = $q
    this.$rootScope = $rootScope
    this.categories = [
      {'id': 0, 'name': 'Development'},
      {'id': 1, 'name': 'Design'},
      {'id': 2, 'name': 'Exercice'},
      {'id': 3, 'name': 'Humor'}
    ]

    this.currentCategory = null
  }
  getCategories () {
    return this.$q.when(this.categories)
  }
  setCurrentCategory (category) {
    this.currentCategory = category
    this.$rootScope.$broadcast('onCurrentCategoryUpdated')
  }
  getCurrentCategory () {
    return this.currentCategory
  }
}

export default CategoriesModel
