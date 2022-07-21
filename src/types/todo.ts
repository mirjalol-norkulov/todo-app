namespace Types {
  export interface TodoPayload {
    text: string;
    completed: boolean;
    dueDate: string;
  }

  export interface Todo extends TodoPayload {
    id: number;
  }
}
