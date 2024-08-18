import { ChangeEvent } from "react";

type Props = {
    callback: (e: ChangeEvent<HTMLInputElement>) => void;
    delay?: number;
}

export const debounce = ({ callback, delay = 1000 }: Props) => {
    let timeoutId: number | undefined;

    return (...args: any[]) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
        callback(...args)
    }, delay)
};
}