import { Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import { Document as document  } from 'mongoose'

@Schema()
export class Document {
    @Prop({required: true})
    name: string;

    @Prop([String])
    tags: string[];
}
    
export const DocumentSchema = SchemaFactory.createForClass(Document);

export interface Idocument extends document {
    id: string
    name: string
    tags: string[]
}