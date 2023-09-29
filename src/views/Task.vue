<template>
    <div class="task">
      <Sidebar />
      <div class="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiase dark:bg-gray-700 text-black dark:text-white">
        <div class="h-full ml-14 mt-14 mb-10 md:ml-64">
          <!-- Statistics Cards -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 p-4 mt-1 gap-4">
            <div
              class="bg-gray-900  dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-color-secondary dark:border-gray-600 text-white font-medium group"
            >
              <div class="container">
                <div class="task-list">
                  <h2>Task List<img src="../assets/list.png"></h2>
                  <div class="row bg-slate-800">
                    <input type="text" v-model="taskInput" placeholder="Add Task" @keyup.enter="addTask">
                    <button class="w-20  bg-color-secondary" @click="addTask">Add</button>
                  </div>
                  <ul>
                    <li v-for="(task, index) in tasks" :key="index" @click="toggleTask(index)" :class="{ checked: task.completed }">
                      {{ task.text }}
                      <span @click="removeTask(index)">×</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Sidebar from "../components/Sidebar.vue";
  
  export default {
    components: {
      Sidebar,
    },
    data() {
      return {
        taskInput: "",
        tasks: [],
      };
    },
    methods: {
      addTask() {
        if (this.taskInput === "") {
          alert("You must write something!");
        } else {
          this.tasks.push({ text: this.taskInput, completed: false });
          this.taskInput = "";
          this.saveData();
        }
      },
      toggleTask(index) {
        this.tasks[index].completed = !this.tasks[index].completed;
        this.saveData();
      },
      removeTask(index) {
        this.tasks.splice(index, 1);
        this.saveData();
      },
      saveData() {
        localStorage.setItem("data", JSON.stringify(this.tasks));
      },
      showTask() {
        const data = localStorage.getItem("data");
        if (data) {
          this.tasks = JSON.parse(data);
        }
      },
    },
    created() {
      this.showTask();
    },
  };
  </script>
  
<style scoped>


.task-list h2 {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}

.task-list img{
    width: 50px;
    margin-left: 10px;
}
.row{
    display: flex;
    align-items: center;
    justify-content: space-between;

    border-radius:20px;
    padding-left:20px;
    margin-bottom: 25px;
    
}
input{
    flex: 1;
    border: none;
    outline: none;
    background:transparent;
    padding: 10px;
    font-weight: 14px;
    border-radius:20px;
    
}
button{
    border: none;
    outline: none;
    padding-top: 10px;
    padding-bottom: 10px;
    cursor: pointer;
    font-size: 16px;
    border-radius: 20px;

}
ul li{
    list-style: none;
    font-size: 17px;
    padding: 12px 8px 12px 50px;
    user-select: none;
    cursor: pointer;
    position: relative;
}
ul li::before{
    content: '';
  
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-image: url(../assets/unchecked.png) ;
    background-size: cover;
    background-position: center;
    left: 12px;
    top: 15px;
}
ul li.checked{
    color:rgb(223, 143, 24);
    text-decoration: line-through;
}
ul li.checked::before{
    background-image: url(../assets/checked.png) ;
}

ul li span{
    position: absolute;
    right: 0;
    top:5px;
    width:40px;
    height: 40px;
    font-size: 22px;
    color:rgb(185, 114, 15);
    line-height:40px ;
    text-align: center;
    border-radius:50% ;
}

ul li span:hover{
    background:white;
   
}
</style>
