import { Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import { Document, Schema as mSchema } from 'mongoose'

@Schema()
export class Group {
    @Prop({required: true})
    name: string;

    // @Prop({required:true, type: String})
}

export const GroupSchema = SchemaFactory.createForClass(Group);

export interface Igroup extends Document {
    id: string
    name: string
    
}