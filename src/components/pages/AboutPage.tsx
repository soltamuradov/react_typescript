import React from "react";
import {useHistory} from "react-router-dom"

export const AboutPage: React.FC = () => {
    const history = useHistory()
    return (
        <>
            <h1>Страница информации</h1>
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut fugit id inventore itaque nesciunt
                nihil nobis quae quos reiciendis reprehenderit.
            </span>
            <button className="btn" onClick={() => history.push("/")}>Обратно к списку дел</button>
        </>
    )
}