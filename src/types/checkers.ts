export enum CheckersColors {
    White = 'white',
    Black = 'black',
}

export interface Checker {
    domEl?: HTMLElement | null,
}


export interface SelectedSquare {
    domEl?: HTMLElement | null,
}

export interface CheckersMapItemI {
    posX: number,
    posY: number,
    row: number,
    column: number,
    id: string,
    color: CheckersColors,
}

export type CheckersMap  = Array<CheckersMapItemI>;
