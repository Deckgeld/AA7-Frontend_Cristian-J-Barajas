export interface CardInterface {
    typeCard:     string;
    closeHeader:  boolean;
    header?:      Header;
    body:         Body;
    footer:       Footer;
}

export interface Header {
    title:       string[];
    siglas?:     string;
    titleClass?: string;
}

export interface Body {
    title?:        string;
    titleClass?:   string;
    desc:          string;
    descClass?:    string;
    subDesc?:      string;
    subDescClass?: string;
}

export interface Footer {
    footerType:   footerType;
    label:       string;
    footerClass?: string;
}

//Los enum permiten definir un conjunto de constantes con nombre
export enum footerType{
    typeLbl = "label",
    typeBtn = 'button'
}