class Vue {
  constructor(options) {
    // 获取所有属性名
    Object.keys(options.data).forEach((propertyName,index) => {
      console.log(propertyName,index);
      let firstChar = propertyName.charAt(0)
      if (firstChar != '_' && firstChar != '$') {
        Object.defineProperty(this, propertyName, {
          get () {
            return options.data[propertyName]
          },
          set (val) {
            options.data[propertyName] = val
          }
        })
      }
      
    })
  }
}