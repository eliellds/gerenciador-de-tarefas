import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[tarefaConcluida]'
})
export class TarefaConcluidaDirective implements OnInit {
  
  // fornece a informação através do html
  // deve ter o mesmo nome da diretiva
  @Input() tarefaConcluida: boolean;

  constructor(private el?: ElementRef) { }

  ngOnInit(): void {
    if (this.tarefaConcluida) {
      this.el.nativeElement.style.textDecoration = "line-through";
    }
  }

}
