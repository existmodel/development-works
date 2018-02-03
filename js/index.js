// if ('serviceWorker' in navigator) {
//     // Весь код регистрации у нас асинхронный.
//     navigator.serviceWorker.register('sw.js')
//       .then(() => navigator.serviceWorker.ready.then((worker) => {
//         worker.sync.register('syncdata');
//       }))
//       .catch((err) => console.log(err));
// }

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/js/sw.js').then(function(reg) {
    // регистрация сработала
    console.log('Registration succeeded. Scope is ' + reg.scope);
  }).catch(function(error) {
    // регистрация прошла неудачно
    console.log('Registration failed with ' + error);
  });
};