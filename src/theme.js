const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };


const STORAGE_KEY = 'changed-position';

const refs ={
    switchButton: document.querySelector('.theme-switch__toggle'),
    body: document.querySelector('body'),
}


// refs.switchButton.addEventListener('change', onSwitchButtonItem);
refs.switchButton.addEventListener('change', onSwitchButtonChange);



function onSwitchButtonChange(){
    const savedPosition = localStorage.getItem(STORAGE_KEY);
   
    if (savedPosition){
        console.log(savedPosition)
        refs.switchButton.value = savedPosition;
  
        refs.body.classList.add(Theme.DARK);
    }
  
}




// function onSwitchButtonItem(evt){
//     const position = evt.currentTarget.value;

//     localStorage.setItem(STORAGE_KEY, position); 
  
// }







// *********сброс записи в форме
// function dischargeValue(et){
//     // et.target.reset();
//     // localStorage.removeItem(STORAGE_KEY)
// }
// refs.switchButton.addEventListener('change', dischargeValue);