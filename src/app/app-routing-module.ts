import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { TarefaRoutes } from './tarefas';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/tarefas/listar',
        pathMatch: 'full'
    },
    ...TarefaRoutes
];

@NgModule({
    imports: [
        /* forRoot garante que o modulo de rotas 
           seja único na aplicação */
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}
