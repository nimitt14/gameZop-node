module.exports = async (sequelize, Sequelize) => {
    const Todo = sequelize.define("todo", {
      
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING
      },
      completed: {
        type: Sequelize.BOOLEAN
      },
      due: {
        type: Sequelize.DATE
      }
    });
    
    await Todo.sync();

    async function create(todo) {
        await Todo.create(todo);
    }
    async function getAll(){
        return Todo.findAll();
    }
    return {create, getAll};
};


  