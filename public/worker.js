import Modal from '../src/components/dashboard/modal'

console.log("Service Worker Loaded...");

self.addEventListener("push", e => {
  const data = e.data.json();
  
  console.log("Push Recieved...",data);

  self.registration.showNotification(data.valu.vehicleNumber, {
    body: <Modal></Modal>,
    icon: "http://image.ibb.co/frYOFd/tmlogo.png"
    
  });
  
});
