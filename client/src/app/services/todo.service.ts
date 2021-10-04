import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../models/Todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private apiUrl: string = 'https://jsonplaceholder.typicode.com/todos?userId=';
  constructor(private http: HttpClient) {}

  getTodos(id: number): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.apiUrl}${id}`);
  }
}
