export class Credores{
    
    Id: number = 0;
    IsActive: boolean = false;
    nomeCredor: string = '';
    IsPessoaFisica: boolean = false;
    IsRecorrente: boolean = false;
    IsInstFin: boolean = false;
    CodigoInstFin: string | null = '';
    DhCriacao: Date | string | null = null;
    DhAtualizacao: Date | string | null = null;
}