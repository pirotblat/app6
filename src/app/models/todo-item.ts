export class TodoItem {
    id: number;
    title: string;
    description: string;
    completed: boolean;
    entered: Date = new Date();
}
