/*eslint-disable*/

let storage = window['localStorage'];

function getItem(key) {
  return JSON.parse(localStorage.getItem(key))
}

function setItem(key, obj) {
  localStorage.setItem(key, JSON.stringify(obj))
}

/**
 * 添加数据
 * @param obj
 */
export const addDataItem = function (obj) {
  if (navigator.onLine) {
    // 在线状态
    console.log('往数据库添加数据', obj)
  } else {
    // 离线状态
    let items = getItem('addItems') || [];
    items.push(obj)
    setItem('addItems', items);
    console.log('往本地缓存添加数据', obj)
  }
}

/**
 * 删除数据
 * @param obj
 */
export const removeDataItem = function (obj) {
  if (navigator.onLine) {
    // 在线状态
    console.log('往数据库删除数据', obj)
  } else {
    // 离线状态
    let items = getItem('removeItems') || [];
    items.push(obj)
    setItem('removeItems', items);
    console.log('往本地缓存删除数据', obj)
  }
}

export const SyncWithServer = function () {
  // 如果当前是离线状态，不需要做任何处理
  if (navigator.onLine === false) return;
  // 和服务器同步添加操作
  let addItems = getItem('addItems') || [];
  if (addItems.length > 0) {
    alert('开始同步任务，往数据库添加数据')
    for (let i = 0; i < addItems.length; i++) {
      console.log('添加第' + (i + 1) + '条', addItems[i])
      // addDataItem(addItems[i]);
    }
    storage.removeItem('addItems');
  }

  // 和服务器同步添加操作
  let removeItems = getItem('removeItems') || [];
  if (removeItems.length > 0) {
    alert('开始同步任务，往数据库删除数据')
    for (let i = 0; i < removeItems.length; i++) {
      console.log('删除第' + (i + 1) + '条', removeItems[i])
      // addDataItem(toRemove[i]);
    }
    storage.removeItem('removeItems');
  }
}
window.addEventListener('online', SyncWithServer, false);