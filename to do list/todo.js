const myhabits = [{
name: 'Do Exercises',
date: '2023-10-30',
time: '08:00'
}, {
name: 'Read Books',
date: '2023-10-30',
time: '10:00'
}];

renderhabits();


function renderhabits() {

  let todoHTML = '';

  myhabits.forEach((todoobject, index) => {
    const name = todoobject.name;
    const date = todoobject.date;
    const time = todoobject.time
    const html = `
    
    <div>${name}</div>
    <div>${date}</div>
    <div>${time}</div>  
    <button class="delete-button js-delete-button">Remove</button>
    `;
    todoHTML += html;
  });

  document.querySelector('.todo-js').innerHTML = todoHTML;

  document.querySelectorAll('.js-delete-button')
   .forEach((deletebutton, index) => {
    deletebutton.addEventListener('click', () => {
      myhabits.splice(index, 1);
      renderhabits();
    });
   });

}

function setalarm() {
    const alarmtime = document.querySelector('.js-time').value;
    
    if(!alarmtime) {
      alert('please enter a valid time for the alarm');
      return;
    }

    let now = new Date();
    let alarm = new Date(alarmtime);

    const timeuntilalarm = alarm - now;

    if(timeuntilalarm <= 0) {
      alert('the specified time has passed');
      return;
    }

    setTimeout(() => {
    const audio = new Audio('music/jus_allah_when_winter_s_going_mp3_84831.mp3');
      audio.play();

      alert('time to wake up');
    }, timeuntilalarm);

  
}

document.querySelector('.js-button')
 .addEventListener('click', () => {
   todolist();
 });

function todolist () {

    const input = document.querySelector('.todo-input');
    const namevalue = input.value;
    const dateinput = document.querySelector('.date-js');
    const datevalue = dateinput.value;
    const time = document.querySelector('.js-time');
    const timevalue = time.value

    myhabits.push({
      name: namevalue,
      date: datevalue,
      time: timevalue
    });

    input.value = '';
    dateinput.value = '';
    time.value = '';

    renderhabits();

}
