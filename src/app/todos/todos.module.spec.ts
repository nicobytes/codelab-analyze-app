import { TodosModule } from './todos.module';

describe('TodosModule', () => {
  let todosModule: TodosModule;

  beforeEach(() => {
    todosModule = new TodosModule();
  });

  it('should create an instance', () => {
    expect(todosModule).toBeTruthy();
  });
});
