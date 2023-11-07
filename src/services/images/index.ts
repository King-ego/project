import api from "../api";
import {IImage} from "../../interface/IImage";
import {AxiosError, AxiosResponse, isAxiosError} from "axios";
import GenerateErrorToast from "../GenerateErrorToast";

export const ListImage = async (): Promise<IImage[] | void> => {
    try {
        const images = await api.get("upload/images")
        if(isAxiosError(images)){
            const err = (images as AxiosError).response as AxiosResponse;
            GenerateErrorToast(err);
        }
        return images.data as IImage[];
    } catch {
        return;
    }
}

export const GetAWSImage = async (filename: string): Promise<BufferSource | void> => {
    try {
        const image = await api.get("upload/imagesOnly", {
            params: {
                filename,
            },
            responseType: "arraybuffer"
        })
        if(isAxiosError(image)){
            const err = (image as AxiosError).response as AxiosResponse;
            GenerateErrorToast(err);
        }

        return image.data as BufferSource;
    } catch {
        return;
    }
}