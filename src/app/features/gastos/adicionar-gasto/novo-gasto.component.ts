import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, EventEmitter, Output, computed, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

export interface Credor {
  id: number;
  nome: string;
}

export interface FormaPagamento {
  id: number;
  nome: string;
}

export interface Gasto {
  id: number;
  descricao: string;
  valor: number;
  data: string;
  credorId: number;
  formaPagamentoId: number;
  recorrente: boolean;
}

@Component({
  selector: 'app-novo-gasto',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CurrencyPipe],
  templateUrl: './novo-gasto.component.html',
  styleUrl: './novo-gasto.component.scss',
})
export class NovoGastoComponent {
  private readonly fb = inject(FormBuilder);

  /**
   * TODO: substituir pelos dados reais vindos de um service
   * (ex.: CredorService / FormaPagamentoService) consultando
   * as tabelas Credores e FormasPagamento.
   */
  protected readonly credores: Credor[] = [
    { id: 1, nome: 'Condomínio Residencial' },
    { id: 2, nome: 'Energia Elétrica (RGE)' },
    { id: 3, nome: 'Internet (Vivo Fibra)' },
    { id: 4, nome: 'Academia' },
    { id: 5, nome: 'Streaming' },
  ];

  protected readonly formasPagamento: FormaPagamento[] = [
    { id: 1, nome: 'Cartão de crédito' },
    { id: 2, nome: 'Débito automático' },
    { id: 3, nome: 'Pix' },
    { id: 4, nome: 'Boleto' },
  ];

  protected readonly gastos = signal<Gasto[]>([]);
  protected readonly totalDoMes = computed(() =>
    this.gastos().reduce((soma, gasto) => soma + gasto.valor, 0)
  );
  protected readonly totalPulsando = signal(false);

  @Output() readonly gastoAdicionado = new EventEmitter<Gasto>();

  protected readonly form = this.fb.group({
    descricao: ['', [Validators.required, Validators.minLength(3)]],
    valor: [null as number | null, [Validators.required, Validators.min(0.01)]],
    data: [this.dataHojeISO(), Validators.required],
    credorId: [null as number | null, Validators.required],
    formaPagamentoId: [null as number | null, Validators.required],
    recorrente: [true],
  });

  protected get descricaoCtrl() {
    return this.form.controls.descricao;
  }

  protected get valorCtrl() {
    return this.form.controls.valor;
  }

  protected get dataCtrl() {
    return this.form.controls.data;
  }

  protected get credorCtrl() {
    return this.form.controls.credorId;
  }

  protected get formaPagamentoCtrl() {
    return this.form.controls.formaPagamentoId;
  }

  protected adicionarGasto(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const { descricao, valor, data, credorId, formaPagamentoId, recorrente } =
      this.form.getRawValue();

    const novoGasto: Gasto = {
      id: Date.now(),
      descricao: descricao!.trim(),
      valor: valor!,
      data: data!,
      credorId: credorId!,
      formaPagamentoId: formaPagamentoId!,
      recorrente: recorrente!,
    };

    this.gastos.update((lista) => [novoGasto, ...lista]);
    this.gastoAdicionado.emit(novoGasto);
    this.pulsarTotal();

    this.form.reset({
      descricao: '',
      valor: null,
      data: this.dataHojeISO(),
      credorId: null,
      formaPagamentoId: null,
      recorrente: true,
    });
  }

  protected removerGasto(id: number): void {
    this.gastos.update((lista) => lista.filter((gasto) => gasto.id !== id));
  }

  protected nomeCredor(id: number): string {
    return this.credores.find((c) => c.id === id)?.nome ?? '—';
  }

  protected nomeFormaPagamento(id: number): string {
    return this.formasPagamento.find((f) => f.id === id)?.nome ?? '—';
  }

  private pulsarTotal(): void {
    this.totalPulsando.set(true);
    setTimeout(() => this.totalPulsando.set(false), 420);
  }

  private dataHojeISO(): string {
    return new Date().toISOString().slice(0, 10);
  }
}
