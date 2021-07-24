const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

const THEME = 'theme';

const refs ={
    switchButton: document.querySelector('.theme-switch__toggle'),
    body: document.querySelector('body'),
    // marker: document.querySelector('.switch__marker'),
}

refs.body.classList.add(Theme.LIGHT);
refs.switchButton.addEventListener('change', makeAction)



function makeAction(evt){
      
    if (!refs.body.classList.contains(Theme.DARK)){
        localStorage.setItem(THEME, Theme.DARK);
        refs.body.classList.add(Theme.DARK);

        refs.switchButton.checked  == true;
        
    } else if (refs.body.classList.contains(Theme.DARK)){
        localStorage.setItem(THEME, Theme.LIGHT);
        refs.body.classList.remove(Theme.DARK);
        refs.body.classList.add( Theme.LIGHT);          
    }
}


function populateSwitch(){
    const savedTheme = localStorage.getItem(THEME);
  
    if (savedTheme === Theme.DARK){
        refs.switchButton.checked = true
        refs.body.classList.add(Theme.DARK)
        console.log(savedTheme)
    }else if(savedTheme !== Theme.DARK){
        refs.body.classList.add(Theme.LIGHT)
        refs.switchButton.checked = false
        console.log(savedTheme)
    }        
}
 populateSwitch();





// function checkB(evt){
//     // const actionCheckB = evt.currentTarget;
//     // if (actionCheckB){
//     //    console.log( refs.switchButton.checked)
//     //    localStorage.setItem(THEME, Theme.DARK);
//     // }else if (!actionCheckB){
//     //     !refs.switchButton.checked
//     //     localStorage.setItem(THEME, Theme.LIGHT);
//     // }
// }
// const p = localStorage.getItem('theme');
// console.log(p)

// function f(evt){
//     if(p === Theme.DARK){
        // refs.switchButton.checked = true;
        // refs.body.classList.add(Theme.DARK);
//     }
// }

// function onSwitchButtonItem(evt){
//     const savedTheme = localStorage.getItem(THEME);
//     const checkedAct =  refs.switchButton.checked 

//     if(savedTheme === Theme.DARK){
//         refs.body.classList.add(Theme.DARK);
     
//         refs.switchButton.checked === true;
//         // checkedAct
//         console.log(checkedAct);
//     } else if (savedTheme === Theme.LIGHT){            
//             refs.body.classList.replace(Theme.DARK, Theme.LIGHT);
//             !checkedAct
//             console.log(!checkedAct)
//         }   
// }





// function checkTheme(){
// const p = localStorage.getItem('theme');
// }
    // if (p === Theme.DARK){
    //     refs.switchButton.checked = true;
    //     refs.body.classList.add(Theme.DARK);
    // }




// ******
// onTextareaInput получает значение и перезаписывает на новое
// function onSwitchButtonItem(evt){
    
//     if(refs.switchButton.checked == true){
//         localStorage.setItem(THEME, Theme.DARK);
//         refs.body.classList.add(Theme.DARK);
//     } else if (!refs.switchButton.checked == true){
//             localStorage.setItem(THEME, Theme.LIGHT);
//             refs.body.classList.replace(Theme.DARK, Theme.LIGHT);
//         }   
// }

// сохранение того, что есть в локалСт и запись его в форму






// function checkB(evt){
//     const actionCheckB = evt.currentTarget;
//     if(localStorage.getItem(THEME) === Theme.DARK){
//         refs.switchButton.checked
//         localStorage.setItem(THEME, Theme.DARK);
//         refs.body.classList.add(Theme.DARK);
//         console.log(refs.switchButton.checked)
//     } else if(localStorage.getItem(THEME) === Theme.LIGHT){
//         !refs.switchButton.checked
//         localStorage.setItem(THEME, Theme.LIGHT);
//         refs.body.classList.replace(Theme.LIGHT);
//         console.log(refs.switchButton.check)
//     }
// }