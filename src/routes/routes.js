import { Switch, Route } from "react-router-dom";

import { Adega } from "../components/Adega";
import { BarFormatura } from "../components/BarFormatura";
import { BarCasamento } from "../components/BarCasamento";
import { BarConfraternizacao } from "../components/BarConfraternizacao";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Adega />
      </Route>
      <Route path="/formatura">
        <BarFormatura type="from1to7" />
      </Route>
      <Route path="/casamento">
        <BarCasamento type="from7to14" />
      </Route>
      <Route path="/confraternizacao">
        <BarConfraternizacao type="from15to21" />
      </Route>
      <Route>
        <h1>Página não encontrada!</h1>
      </Route>
    </Switch>
  );
};
