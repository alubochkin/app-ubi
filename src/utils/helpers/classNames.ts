type Mode = Record<string, boolean | string>;

export function cn(cls: string, mode?: Mode, arrCls?: string[]): string {
    let res = cls;

    if (mode) {
        for (const modeKey in mode) mode[modeKey] && (res += ` ${modeKey}`);
    }

    if (arrCls) {
        res += ' ' + arrCls.join(' ');
    }
    return res;
}
