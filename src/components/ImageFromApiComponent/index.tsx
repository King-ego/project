import { FC, useEffect, useState } from "react";
import { GetAWSImage } from "../../services/images";
import { ImageBuffer } from "./styled";

interface IImageFromApiComponent {
    fileName: string;
}

const ImageFromApiComponent:FC<IImageFromApiComponent> = ({ fileName }) => {
    const [image, setImage] = useState<HTMLImageElement | null>(null);

    async function createImage(filename: string) {
        const Buffer = await GetAWSImage(filename)
        const blob = new Blob([Buffer], { type: "image" });
        const url = URL.createObjectURL(blob);
        const img = new Image();
        img.src = url;
        setImage(img);
        return img;
    }

    useEffect(() => {
        let img =  new Image();
        createImage(fileName).then(res=> img = res);
       return URL.revokeObjectURL(img.src)
    }, [fileName]);

    return (
        <>
            {image && <ImageBuffer src={image.src} alt="Imagem da API" />}
        </>
    );
}

export default ImageFromApiComponent;
