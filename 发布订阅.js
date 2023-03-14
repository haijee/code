class Observer {
  constructor() {}
  caches = {};
  on(eventName, fn) {
    this.caches[eventName] = this.caches[eventName] || [];
    this.caches[eventName].push(fn);
  }
  emit(eventName, data) {
    this.caches[eventName] && this.caches[eventName].forEach(fn => fn(data));
  }
  off(eventName, fn) {
    this.caches[eventName] = fn ? this.caches[eventName].filter(curr => curr !== fn) : [];
  }
}

ob = new Observer();

l1 = data => console.log(`l1_${data}`);
l2 = data => console.log(`l2_${data}`);

ob.on('event1', l1);
ob.on('event1', l2);

//发布订阅
ob.emit('event1', 789);
// l1_789
// l2_789

// 取消，订阅l1
ob.off('event1', l1);

ob.emit('event1', 567);
