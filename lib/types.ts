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