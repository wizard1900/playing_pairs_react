export interface IState {
    isStart: boolean;
}

export const state: IState = {
    isStart: false
}

let rerenderDom: () => void;
rerenderDom = () => {

}

export function subscribe(observer: () => void) {
    rerenderDom = observer;
}

export function doStart() {
    state.isStart = true;
    rerenderDom()
}
