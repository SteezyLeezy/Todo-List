import { deleteTodo, todoArr } from '../model/editTodo.js';
import { displayTodoArray } from '../view/displayTodo.js';
import {submitBtn,todoInput,todoBtns, calendarHTML, bookHTML, sideBar} from '../view/domConstants.js';
import { createTodoTitle } from '../view/domHelperFunctions.js';
import { displayInboxPage, displayTodayPage, displayWeekPage, sidebarLength } from '../view/uiDOM.js';

//test
// const tester = document.querySelector('.menu-btn');

const EventListeners = () => {

    // submitting a todo
    submitBtn.addEventListener('click', (e) => {
        createTodoTitle(todoInput.value);
        displayTodoArray();
    });

    // editing a single todo
    todoBtns.addEventListener('click', (e) => {
        if (e.target.matches('.cal')) {
            e.target.parentElement.innerHTML = calendarHTML;
        }
        if (e.target.matches('.book')) {
            const index = e.target.closest('.object').id;

            // spaces getting removed in input value, but the todoArr[i].note has spaces?

            e.target.parentElement.innerHTML = `<div>
            <input type="text" id="note-input" style="white-space: pre" value="${todoArr[index].note}">
            <button class="note-check"><i id="note-check-img" class="fa fa-check"></i></button>
        </div>
        `;
        }
        if (e.target.matches('.starz')) {
            // something later maybe 3 levels of prio
        }
        // deleting todo
        if (e.target.type == 'checkbox' || e.target.matches('.xmark')) {
            const index = e.target.closest('.object').id;   // make this a function?
            deleteTodo(index);
            displayTodoArray();
        }
        
        // adds date input to e.target todo obj
        if (e.target.matches('.date-check')) {
            const index = e.target.closest('.object').id;
            const calValue = e.target.previousElementSibling.value;
            todoArr[index].due = calValue;
            displayTodoArray();
        }
        // adds note input to e.target todo obj
        if (e.target.matches('.note-check')) {
            const index = e.target.closest('.object').id;
            const noteValue = e.target.previousElementSibling.value;
            e.target.previousElementSibling.value = noteValue;
            todoArr[index].note = noteValue;
            
            displayTodoArray();
        }
    })

    // displaying and removing sidebar
    let status = 'closed';
    document.addEventListener('click', (e) => {
        if (e.target.id == 'menu-icon') {
            if (status == 'closed') {
                sidebarLength('200');
                status = 'open';
            }
        } else if (status == 'open') {
            sidebarLength('0');
            status = 'closed';
        }
    })

    // displaying pages after clicking on sidebar btns
    sideBar.addEventListener('click', (e) => {
        if (e.target.id == 'inbox-btn') {
            displayInboxPage();
        }

        if (e.target.id == 'today-btn') {
            displayTodayPage();
        }

        if (e.target.id == 'week-btn') {
            displayWeekPage();
        }
    })
    
}

export {EventListeners}



