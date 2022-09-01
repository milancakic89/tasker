import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

export interface Response<T>{
  data: T,
  error: any
}

@Injectable({providedIn: 'root'})
export class HttpService {
  constructor(){}

  public get<T>(path: string, params?: any): Promise<Response<T | null>>{
    const response: Response<T | null> = {
      data: null,
      error: null
    }
    return new Promise((resolve, reject) => {
      fetch(path, {
        headers: {
          'Authorization': 'Bearer ',
          'Content-Type': 'application/json'
        },
      })
      .then(res => res.json())
      .then(data => {
          if(data){
            response.data = data;
            return resolve(response)
          }
        response.error = {
          trace: response
        }
          return reject(response)

      })

    })
  }

  public post<T>(path: string, body: any): Promise<Response<T | null>>{
    const response: Response<T | null> = {
      data: null,
      error: null
    }
    return new Promise((resolve, reject) => {
      fetch(path, {
        headers: {
          'Authorization': 'Bearer ',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: body
      })
        .then(res => res.json())
        .then(data => {
          if (data) {
            response.data = data;
            return resolve(response)
          }
          response.error = {
            trace: response
          }
          return reject(response)

        })

    })
  }

  public put<T>(path: string, body: any): Promise<Response<T | null>>{
    const response: Response<T | null> = {
      data: null,
      error: null
    }
    return new Promise((resolve, reject) => {
      fetch(path, {
        headers: {
          'Authorization': 'Bearer ',
          'Content-Type': 'application/json'
        },
        method: 'PUT',
        body: body
      })
        .then(res => res.json())
        .then(data => {
          if (data) {
            response.data = data;
            return resolve(response)
          }
          response.error = {
            trace: response
          }
          return reject(response)

        })

    })
  }

  public delete<T>(path: string): Promise<Response<T | null>>{
    const response: Response<T | null> = {
      data: null,
      error: null
    }
    return new Promise((resolve, reject) => {
      fetch(path, {
        headers: {
          'Authorization': 'Bearer ',
          'Content-Type': 'application/json'
        },
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => {
          if (data) {
            response.data = data;
            return resolve(response)
          }
          response.error = {
            trace: response
          }
          return reject(response)

        })

    })
  }

}
