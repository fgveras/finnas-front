import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, take, tap } from "rxjs";
import { Credores } from "./models/Credores";

@Injectable({ providedIn: 'root' })
export class GerenciarGastosService{

    constructor(private _http: HttpClient, private router: Router) {}

    private _baseUrl: string = 'http://localhost:5298/api/Credores/';

    public getCredoresList(): Observable<Credores[]>{

        const headers = new HttpHeaders()
            .set('Content-Type', 'application/json')

        const url = `${this._baseUrl}get-credores-combobox`;

        return this._http
            .get<Credores[]>(url, { 'headers' : headers })
                .pipe(take(1), tap(() => { }))

    }
}