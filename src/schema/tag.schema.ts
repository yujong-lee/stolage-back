import { Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import { Document, Schema as mSchema, Types } from 'mongoose'
import { Group, Igroup } from "./group.schema";


@Schema()
export class Tag {
    @Prop({required: true})
    name: string;

    @Prop({required:true, type:[mSchema.Types.ObjectId], ref: 'Group'})
    groups: Group[];
}

export const TagSchema = SchemaFactory.createForClass(Tag);

export interface Itag extends Document {
    name: string
    groups: string[] | Igroup[]
}