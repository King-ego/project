import {IImage} from "../../IImage";

export default interface IImagesGateway {
   ListImage(): Promise<IImage[] | void>;
   GetAWSImage(filename: string): Promise<BufferSource | void>;
}