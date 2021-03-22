import { Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import { Document } from 'mongoose'


@Schema()
export class Tag {
    @Prop({required: true})
    name: string;

    @Prop({required:true, type:[String]})
    related: string[];
 
}

export const TagSchema = SchemaFactory.createForClass(Tag);

export interface Itag extends Document {
    id: string
    name: string
    related: string[]
    
}