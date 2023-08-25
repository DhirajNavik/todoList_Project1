const todoList = [{name:'make dinner',dueDate:'22-02-2000'},{name:'Go to Park',dueDate:'12-11-2020'}];

        rendertodoLIST();

        function rendertodoLIST() {

            let todoHTML = ''

            for (let i = 0; i < todoList.length; i++) {
                // const todo = todoList[i];
                const todoObject = todoList[i];

                // const name=todoObject.name;
                // const dueDate=todoObject.dueDate;

                // Destructuring
                const { name,dueDate }=todoObject;

                // Generating the Html
                const html = `
                <div>${name}</div>
                <div>${dueDate}</div>
                <button class="CSS-deleteButton"
                    onclick="todoList.splice(${i},1);
                    rendertodoLIST();"
                >Delete</button>
                `;

                todoHTML += html;

            }
            document.querySelector('.JS-addTodoLIST').innerHTML = todoHTML;
        }
        

        function addTodo() {

            const inputElement = document.querySelector('.JS-inputElement');

            const name = inputElement.value;

            const dueDateinputelement=document.querySelector('.JS-inputdueDate');

            const dueDate =dueDateinputelement.value;

            todoList.push({
                // name:name,
                // dueDate:dueDate
                name,dueDate
            });

            // console.log(todoList)

            inputElement.value = '';

            rendertodoLIST();
        }

    