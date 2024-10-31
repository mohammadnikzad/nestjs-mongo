import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Tag } from '../tag.schema';
import { InjectModel } from '@nestjs/mongoose';
import { CreateTagDto } from '../dto/create-tag.dto';

@Injectable()
export class TagsService {
  constructor(
    /**
     * Inject tagModel
     */
    @InjectModel(Tag.name)
    private readonly tagModel: Model<Tag>,
  ) {}

  public async createTag(createTagDto: CreateTagDto) {
    console.log('createTagDto', createTagDto);

    const newTag = new this.tagModel(createTagDto);
    return await newTag.save();
  }
}
