import api from "../api";
import { IImage } from "../../interface/IImage";

export const ListImage = async ():Promise<IImage[]> => {
    const images = await api.get("upload/images")

    return images.data;
}

export const GetAWSImage = async (filename: string): Promise<BufferSource> => {
    const image =  await api.get("upload/imagesOnly", {
        params: {
            filename,
        },
        responseType: "arraybuffer"
    })

    return image.data;
}