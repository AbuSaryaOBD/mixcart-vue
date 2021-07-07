import _ from 'lodash'

export default {
  methods: {
    toQueryParams(append){
      let qryParams = {
        offset: append ? this.products.length : 0,
        limit: 10,
        name: this.params.term,
      }
      if(this.params.filter) qryParams[this.params.filter] = true
      return qryParams
    },
    loadMore: _.throttle(function(isVisible) {
      if(!isVisible) { return }
      if(this.completed) { return }
      if(['loading', 'loading-more'].includes(this.status)) { return }
      this.fetchProducts(true)
    }, 1000),
    async fetchProducts(append) {
      this.status = append ? 'loading-more' : 'loading'
      let qryParams = this.toQueryParams(append)

      axios.get('/material', { params: qryParams })
        .then(res => {
          let data = res.data.data
          if(data.length < 10) this.completed = true
          if (append) {
            this.products.push(...data)
          } else {
            this.products = data
          }
          this.status = 'loaded'
        })
    },
  }
};