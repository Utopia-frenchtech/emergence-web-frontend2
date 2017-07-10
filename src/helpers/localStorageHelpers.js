export default {
  /**
   * Get a localStorage as an object
   * @param  {*} key [description]
   * @return {*}     [description]
   */
  getJSONItem: (key) => JSON.parse(localStorage.getItem(key)),
  setJSONItem: (key, object) => localStorage.setItem(key, JSON.stringify(object)),
}
