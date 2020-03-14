// import Todo from "../models/Todo"
// import mockingoose from "mockingoose"

const mockingoose = require('mockingoose').default
const Todo = require("../../models/Todo")

describe ('mockingoose', () => {
    beforeEach(() => {
        mockingoose.resetAll(),
        jest.clearAllMocks()
    })

    describe("Explicit Tests", () => {
        it('Should validate', async () => {
            const todo = new Todo({
                name: "Valid Name",
                done: false
            });

            const result = await todo.validateSync()

            expect(result).toBe(undefined)

        });

        it('Should find', async () => {
            
            mockingoose(Todo).toReturn([{name:"Task", done:false}]);

            const result = await Todo.find().where('name').in('1');

            expect(result).toHaveLength(1);
        });

        it('Should error when no name', async () => {
            const todo = new Todo({name: "", done:false});

            const result = await todo.validateSync();

            expect(result.errors['name'].message).toBe("Path `name` (``) is shorter than the minimum allowed length (1).");

        })
    })
})