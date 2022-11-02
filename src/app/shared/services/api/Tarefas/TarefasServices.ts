import { API } from "../ApiConfig"
import { ApiException } from "../ApiException";

export interface ITarefa {
    id: number;
    title: string;
    isCompleted: boolean;
}

const getAll = async (): Promise<ITarefa[] | ApiException> => {
    try {
        const { data } = await API().get("/tarefas");
        return data;
    } catch (error: any) {
        return new ApiException(error.message || "Erro na consulta!")
    }

}
const getById = async (id: number): Promise<ITarefa | ApiException> => {
    try {
        const { data } = await API().get(`/tarefas/${id}`);
        return data;
    } catch (error: any) {
        return new ApiException(error.message || "Erro na consulta!")
    }
}
const createTafera = async (tarefa: Omit<ITarefa, 'id'>): Promise<ITarefa | ApiException> => {
    try {
        const { data } = await API().post<ITarefa>("/tarefas", tarefa);
        return data;
    } catch (error: any) {
        return new ApiException(error.message || "Erro ao criar registro!")
    }
}
const updateById = async (Id: number, tarefa: Omit<ITarefa, 'Id'>): Promise<ITarefa | ApiException> => {
    try {
        const { data } = await API().put<ITarefa>(`/tarefas/${Id}`, tarefa);
        return data;
    } catch (error: any) {
        return new ApiException(error.message || "Erro ao atualizar o registro!")
    }
}
const DeletById = async (Id: number): Promise<undefined | ApiException> => {
    try {
        await API().delete(`/tarefas/${Id}`);
        return undefined;
    } catch (error: any) {
        return new ApiException(error.message || "Erro ao apagar o registro!")
    }
}

export const TarefasServices = {
    getAll,
    getById,
    createTafera,
    updateById,
    DeletById
};