// export const wakeLockDirective = {
//     mounted(el, binding) {
//       const { appInstance } = binding; // Receive the appInstance as a custom option
  
//       let wakeLock = null;
  
//       const requestWakeLock = async () => {
//         try {
//           wakeLock = await navigator.wakeLock.request('screen');
  
//           wakeLock.addEventListener('release', () => {
//             console.log('Wake Lock was released');
//           });
//           console.log('Wake Lock is active');
//         } catch (err) {
//           console.error(`${err.name}, ${err.message}`);
//         }
//       };
  
//       const releaseWakeLock = () => {
//         console.log('Releasing wakeLock');
  
//         if (wakeLock) {
//           wakeLock.release();
//           wakeLock = null;
//         }
//       };
  
//       el.addEventListener('change', () => {
//         const checked = el.checked;
  
//         if (checked) {
//           appInstance.$store.dispatch('toggleWakeLock');
//           requestWakeLock();
//         } else {
//           appInstance.$store.dispatch('toggleWakeLock');
//           releaseWakeLock();
//         }
//       });
  
//       // Initial state
//       if (appInstance.$store.getters.isWakeLockEnabled) {
//         requestWakeLock();
//       }
  
//       // Cleanup when the component is unmounted
//       el.__wakeLockCleanup = () => {
//         releaseWakeLock();
//         el.removeEventListener('change', () => {});
//       };
//     },
//   };
  