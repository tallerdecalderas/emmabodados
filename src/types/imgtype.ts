import logo from "@/assets/img/logo-headder.png"
import heroImg from "@/assets/img/heroImg.png"
import fondoAbout from "@/assets/img/fondo about.png"
import logoFooter from "@/assets/img/logo-footer.png"
import francisco from "@/assets/img/francisco.jpg"
import julieta from "@/assets/img/julieta.jpg"
import pablo from "@/assets/img/pablo.jpg"
import heroImgMobile from "@/assets/img/heroImgMobile.png"
import nombres from "@/assets/img/nombres.png"
import fondoForm from "@/assets/img/fondo-form.png"

export type ImageT = {
    src: string;
    alt: string;
    className?: string;
    [key: string]: any;
}

export const allImages = {
    "logo": logo,
    "heroImg": heroImg,
    "fondoAbout": fondoAbout,
    "logoFooter": logoFooter,
    "francisco": francisco,
    "julieta": julieta,
    "pablo": pablo,
    "nombres": nombres,
    "heroImgMobile": heroImgMobile,
    "fondoForm": fondoForm,
}