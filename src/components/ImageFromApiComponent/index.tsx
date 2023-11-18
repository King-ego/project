import {FC, useCallback, useEffect, useState} from "react";
import ImagesGateway from "../../services/images";
import {ImageBuffer} from "./styled";
import statusRole from "../../utils/statusRole.ts";
import GenerateErrorToast from "../../services/GenerateErrorToast";
import GenerateSuccessToast from "../../services/GenerateSuccessToast";
import Loading from "../Loading";
import {configGetAWSImage} from "../../services/images/config.ts";
import {AxiosResponse} from "axios";

interface IImageFromApiComponent {
    fileName: string;
}

const ImageFromApiComponent: FC<IImageFromApiComponent> = ({fileName}) => {
    const [image, setImage] = useState<HTMLImageElement | null>(null);
    const [status, setStatus] = useState(statusRole.INITIAL);
    
    const getAWSImage = useCallback(async (fileName: string):Promise<BufferSource | void>=>{
        setStatus(statusRole.LOADING);
        const image = await ImagesGateway().GetAWSImage(fileName);
        if(image) {
            setStatus(statusRole.SUCCESS)
            const message = "Imagem Encontradas com sucesso no Buket"
            GenerateSuccessToast({message});
            return image;
        }
        setStatus(statusRole.ERROR)
        const err = image as unknown as AxiosResponse;
        GenerateErrorToast({err, config: configGetAWSImage})
    },[])

    const createImage = useCallback(async (filename: string) => {
        const Buffer = await getAWSImage(filename);
        if (!Buffer) return;
        const blob = new Blob([Buffer], {type: "image"});
        const url = URL.createObjectURL(blob);
        const img = new Image();
        img.src = url;
        setImage(img);
        return img;
    },[getAWSImage])

    useEffect(() => {
        let img = new Image();
        createImage(fileName).then(res => {
            if (res) img = res
        });
        return URL.revokeObjectURL(img.src)
    }, [fileName]);

    return (
        <Loading loading={status === statusRole.LOADING}>
            {image && <ImageBuffer src={image.src} alt="Imagem da API"/>}
        </Loading>
    );
}

export default ImageFromApiComponent;
