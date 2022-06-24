import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Post from "App/Models/Post";
import User from "App/Models/User";

export default class UsersController {

  public async index(ctx:HttpContextContract) {
    return User.query().preload('profile')
  }

  public async store({ request }: HttpContextContract) {
    return {
      message: "GET STORE",
      body: request.body(),
    };
  }

  public async show({ response, params }: HttpContextContract) {
    const data = await User.query().where('id',params.id).preload('profile');
    const post = await Post.query().where('profile_id',params.id).preload('comment')

    return response.status(200).json({data,post})
  }

  public async update({ params }: HttpContextContract) {
    return "GET UPDATE" + params.id;
  }

  public async destroy({ params }: HttpContextContract) {
    return "GET DESTROY" + params.id;
  }
}
