const queuedObservers = new Set();
const observer = fn => queuedObservers.add(fn);
const observable = obj =>
  new Proxy(obj, {
    set(target, key, value, receiver) {
      const result = Reflect.set(target, key, value, receiver);
      // notify
      queuedObservers.forEach(observer => observer());
      return result;
    },
  });

let obj = observable({ name: '张三' });

observer(function () {
  console.log('监听者');
});

obj.name = '李四';
