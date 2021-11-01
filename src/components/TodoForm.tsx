import React, {useRef} from "react";

interface TodoFormProps {
    onAdd(title: string): void
}

export const TodoForm: React.FC<TodoFormProps> = ({onAdd}) => {
    const ref = useRef<HTMLInputElement>(null)



    const keyPressHandler = (event: React.KeyboardEvent) => {
        if (event.key === "Enter") {
            onAdd(ref.current!.value)
            ref.current!.value = ""
        }
    }

    return (
        <div className="input-field mt2">
            <input
                type="text"
                ref={ref}
                id="title"
                onKeyPress={keyPressHandler}
                placeholder="Введите название дела"/>
            <label htmlFor="title" className="active">Введите название дела</label>
        </div>
    )
}