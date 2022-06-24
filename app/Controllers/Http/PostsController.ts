import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Post from 'App/Models/Post'

export default class PostsController {
  public async index(ctx:HttpContextContract){
    return Post.query().preload('comment')
  }
}
