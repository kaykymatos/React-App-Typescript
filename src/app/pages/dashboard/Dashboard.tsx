import { useCallback, useEffect, useState } from "react"
import { ApiException } from "../../shared/services/api/ApiException";
import { ITarefa, TarefasServices } from "../../shared/services/api/Tarefas/TarefasServices";

export const Dashboard = () => {
    const [lista, setLista] = useState<ITarefa[]>([]);
    useEffect(() => {
        TarefasServices.getAll()
            .then((result) => {
                if (result instanceof ApiException) {
                    alert(result.message);
                } else {
                    setLista(result);
                }
            });
    }, []);
    const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = useCallback((e) => {
        if (e.key === 'Enter') {
            if (e.currentTarget.value.trim().length === 0) {

                alert("Valor inválido!");
                return;
            }
            const value = e.currentTarget.value;
            TarefasServices.createTafera({ title: value, isCompleted: false })
                .then((result) => {
                    if (result instanceof ApiException) {
                        alert(result.message);
                    } else {
                        setLista((oldList) => [...oldList, result]);
                    }
                });
            e.currentTarget.value = '';
        }
    }, []);
    const handleDelet= useCallback((id:number)=>{
        TarefasServices.DeletById(id)
        .then((result) => {
                if (result instanceof ApiException) {
                    alert(result.message);
                } else {
                    setLista(oldLista => {
                        return oldLista.filter(oldListItem => oldListItem.id!==id);
                    });
                }
            });
    }, []);

    const handleToggleComplete = useCallback((id: number) => {
        const tarefaUpdate = lista.find((tarefa) => tarefa.id === id);
        if (!tarefaUpdate) return;

        TarefasServices.updateById(id,
            {
                ...tarefaUpdate,
                isCompleted: !tarefaUpdate.isCompleted
            }).then((result) => {
                if (result instanceof ApiException) {
                    alert(result.message);
                } else {
                    setLista(oldLista => {
                        return oldLista.map(oldListItem => {
                            if (oldListItem.id === id) return result;
                            return oldListItem;
                        });
                    });
                }
            });
    }, [lista]);

    return (
        <div>
            <input onKeyDown={handleKeyDown} />
            <ul>
                {lista.map((listItem) => {
                    return <li key={listItem.id}>{listItem.title}
                    <button onClick={()=>handleDelet(listItem.id)}>Apagar</button>
                        <input type="checkbox"
                            onChange={() => handleToggleComplete(listItem.id)}
                        />
                    </li>;
                })}
            </ul>

        </div>)
}