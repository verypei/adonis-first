import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Profile from './Profile'
import Comment from './Comment'

export default class Post extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public profile_id: number

  @column()
  public title: string

  @column()
  public body: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(()=>Profile,{
    localKey:"profile_id"
  })
  public post: BelongsTo<typeof Profile>

  @hasMany(()=>Comment,{
    foreignKey:"post_id"
  })
  public comment: HasMany<typeof Comment>
}
