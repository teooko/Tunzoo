import * as Tone from "tone";

export type ModelProps = {
    position: [number, number, number],
    rotation: [number, number, number],
    modelIndex: number,
}

export type TexturedPlaneProps = {
    texturePath: string,
    position: [number, number, number],
    size: [number, number],
}

export type Hit = {
    time: number;
    sound: Tone.Player;
}

export enum HitQuality {
    Perfect = "perfect",
    Good = "good",
    Miss = "miss"
}
