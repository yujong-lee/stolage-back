import { Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import { Document, Schema as mSchema, Types } from 'mongoose'
import { Tag, Itag } from "./tag.schema";

@Schema()
export class File {
    @Prop({required: true})
    name: string;

    @Prop({required: true, type: [{type: mSchema.Types.ObjectId, ref:'Tag'}] })
    tags: Tag[];
}
    
export const FileSchema = SchemaFactory.createForClass(File);

export interface IFile extends Document {
    name: string
    tags: string[] | Itag[]
}