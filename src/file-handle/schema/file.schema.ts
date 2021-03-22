import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class File {
    @Prop({required: true})
    name: string

    @Prop({required: true})
    key: string

    @Prop({
        required: true,
        type: [String]
    })
    tags: string[]
}

export const FileSchema = SchemaFactory.createForClass(File)
export interface Ifile extends Document {
    id: string;
    name: string;
    key: string;
    tags: string[]
}