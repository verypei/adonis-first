import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm'
import User from './User'
import Post from './Post'

export default class Profile extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public user_id: number

  @column()
  public name: string

  @column()
  public username: string

  @column()
  public email: string

  @column()
  public address: string

  @column()
  public phone: string

  @column()
  public website: string

  @column()
  public company: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasOne(()=>User,{
    localKey:"user_id"
  })
  public user:HasOne<typeof User>

  @hasMany(()=>Post,{
    foreignKey:"profile_id"
  })
  public profile:HasMany<typeof Post>
}
