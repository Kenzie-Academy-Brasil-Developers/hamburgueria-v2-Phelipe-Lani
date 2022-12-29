import { Route, Routes } from "react-router-dom";

export function RoutMain (){

    return(
        <Routes>
            <Route  path="/"/>
            <Route  path="/register"/>
            <Route  path="/dashpage"/>
            <Route  path="*"/>

        </Routes>
    )
}