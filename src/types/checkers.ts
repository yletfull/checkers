export enum CheckersColors {
    White = 'white',
    Black = 'black',
}

export interface Checker {
    domEl?: HTMLElement | null,
}

export interface Square {
    domEl?: HTMLElement | null,
}

export interface CheckersMapItemI {
    posX: number,
    posY: number,
    id: string,
    color: CheckersColors,
}