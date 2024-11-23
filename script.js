let countUser = document.querySelector('.countUser');
let countNumber = document.querySelector('.countNumber');
let show = document.querySelector('.show');
let submit = document.querySelector('.submit');
let answer = document.querySelector('.answer');
let randomNumber = document.querySelector('.randomNumber');

let arrUsers = [];
let arrUsersNumber = [];
let nameUser;

show.addEventListener('click', ()=> {

    for(let i = 0; i <= countNumber.value -1; i++) {
        let user = document.createElement('div');
        user.className = 'user';
        nameUser = document.createElement('input');
    
        nameUser.placeholder = 'Прізвище';
        nameUser.type = 'text';
        let numberUser = document.createElement('input');
    
        numberUser.placeholder = 'Число';
        numberUser.type = 'text';
        numberUser.className = 'numberUser';

        nameUser.className = 'nameUser';
        
        show.style.display = 'none';
        user.append(nameUser);
        user.append(numberUser);
        countUser.append(user);
       
        countNumber.addEventListener('click', ()=> {
        user.remove(countUser);
       
    });
    }
    
});


submit.addEventListener('click', ()=>{
    let nameUsersAll = document.querySelectorAll('.nameUser');
    let numberUsersAll = document.querySelectorAll('.numberUser');
    let arrResult = [];

    for(let name of nameUsersAll) {
        arrUsers.push(name.value);
    }
    for(let number of numberUsersAll) {
        console.log(randomTest(1, 100));
        arrResult.push(Math.abs(randomTest(1, 100)-number.value));
    }
    for(let i = 0; i <= arrResult.length - 1; i++) {
        if(Math.min.apply(null,arrResult)==arrResult[i]) {
            // console.log(arrUsers[i]);
            answer.textContent = arrUsers[i];
            // alert(arrUsers[i]);
            randomNumber.textContent = 'Рандомне число - ' + randomTest(1, 100);
        }
    }

    // console.log(arrUsers);
    // console.log(arrResult);
    // console.log(Math.min.apply(null,arrResult));

});


function randomTest (min, max) {
    let date = new Date();
    let num = date.getMilliseconds();

    result = Math.round((num/1000)*((max-min)+min));
    return result;
}


