import image1 from "../assets/img/1242fea349e9432609cde2ecba378245919d56db.jpg"
import logo from "../assets/img/e98829bd5f0e96861a2f902cf2f1957ed0772c95.png"
import heroImg from "../assets/img/heroImg.png"


export type ImageT = {
    src: string;
    alt: string;
    className?: string;
    [key: string]: any;
}

export const allImages = {
    "logo": logo,
    "image1": image1,
    "heroImg": heroImg,
}