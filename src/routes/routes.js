import {Switch, Route} from "react-router-dom";

import {Adega} from "../components/Adega"
import {BarFormatura} from "../components/BarFormatura"
import {BarCasamento} from "../components/BarCasamento"
import {BarConfraternizacao} from "../components/BarConfraternizacao"

export const Routes = () => {
    return(
        <Switch>
            <Route exact path="/">
                <Adega />
            </Route>
            <Route path="/formatura">
                <BarFormatura />
            </Route>
            <Route path="/casamento">
                <BarCasamento />
            </Route>
            <Route path="/confraternizacao">
                <BarConfraternizacao />
            </Route>
            <Route>
                <h1>Página não encontrada!</h1>
            </Route>
        </Switch>
    )
}