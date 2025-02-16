import React, { useEffect } from 'react'
import { useTypesSelector } from '../hooks/useTypesSelector'
import { useActions } from '../hooks/useAction'
import { setTodoPage, fetchTodos } from '../store/action-creators/todo'


const TodoList: React.FC = () => {
    const {page, error, loading, todos, limit} = useTypesSelector(state => state.todo)
    const {fetchTodos, setTodoPage} = useActions()
    const pages = [1, 2, 3, 4, 5]
    useEffect (()=> {
        fetchTodos(page, limit)
    }, [page])

    if (loading) {
        return <h1>Идет загрузка</h1>
      }
      if (error) {
        return <h1>{error}</h1>
      }

  return (
    <div>
        {todos.map(todo =>             
            <div key={todo.id}>{todo.id}-{todo.title}</div>
        )}
        <div style={{display: 'flex'}}>
            {pages.map(p =>
                <div
                    onClick={() => {
                        setTodoPage(p)
                        console.log('click')
                    }}
                    style={{border:p === page ? '2px solid teal':'1px solid lightgrey', padding: 18}}
                >
                    {p}
                </div>
            )}
        </div>
    </div>
  )
}

export default TodoList