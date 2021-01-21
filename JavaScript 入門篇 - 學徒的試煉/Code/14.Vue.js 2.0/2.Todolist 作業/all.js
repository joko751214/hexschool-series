var app = new Vue({
  el: '#app',
  data: {
    todos: [],
    newTodo: '',
  },
  methods: {
    addTodo(todo) {
      this.todos.push({content: todo, complete: false, show: true});
      this.newTodo = '';
    },
    removeTodo(todo) {
      this.todos.splice(this.todos.indexOf(todo), 1);
    },
    finishAll() {
      this.todos.forEach(item => item.complete = true)
    },
    show(action) {
      switch (action) {
        case 'all':
          this.todos.forEach(item => item.show = true)
          break;
        case 'finish':
          this.todos.forEach(item => {
            if(item.complete) {
              item.show = true;
            }else {
              item.show = false;
            }
          });
          break;
        default:
          this.todos.forEach(item => {
            if(!item.complete) {
              item.show = true;
            }else {
              item.show = false;
            }
          });
          break;
      }
    }
  },
})