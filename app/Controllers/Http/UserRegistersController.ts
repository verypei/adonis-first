import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UserRegistersController {
  public async store({ request }: HttpContextContract){
    // const data : {
    //   username:string,
    //   email:string,
    //   password:string
    // } = {
    //   username:request.body().username,
    //   email:request.body().email,
    //   password:request.body().password
    // }
    await User.create({
    username: request.input('username'),
    email: request.input('email'),
    password: request.input('password')
  })
  }
}
