import { Conta } from 'src/app/shared/interfaces/conta.interface';
import { Usuario } from 'src/app/shared/interfaces/usuario.interfaces';

export interface LoginCredenciais {
  usuario: string;
  senha: string;
}

export interface LoginResponse {
  conta: Conta;
  contaCredito: Conta;
  dataFim: Date;
  dataInicio: Date;
  token: string;
  usuario: Usuario;
}
