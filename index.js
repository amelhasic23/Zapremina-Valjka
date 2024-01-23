function cylinderVolume(radius,height){
  const pi = 3.14
    return pi * radius* height
   
      }  
 const radius = prompt("Unesite Poluprečnik valjka:");
 const height = prompt("Unesite Visinu Valjka");
 const volume = cylinderVolume(radius,height);
 alert(`Zapremina valjka je;${volume}`);