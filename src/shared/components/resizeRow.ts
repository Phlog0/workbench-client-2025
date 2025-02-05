
interface ITableHeaderRenderer {
    dataKey: string;
    widths: number[];
    setWidths: React.Dispatch<React.SetStateAction<number[] | null>>
    autoSizerWidth: number;
    deltaX: number
}
const resizeRow = ({ dataKey,
    deltaX,
    widths,
    setWidths,
    autoSizerWidth, }: ITableHeaderRenderer) => {
    const prevWidths = widths
    const percentDelta = deltaX / autoSizerWidth;
    const nextDataKey = +dataKey + 1;
    // const prevDataKey = +dataKey - 1;
    if (prevWidths[+dataKey] < 0.03 && deltaX < 0
        ||
        +prevWidths[+dataKey + 1] < 0.03 && deltaX > 0
    ) {
        return
    }


    setWidths(prevWidths.map((w, i) => {
        if (+i === +dataKey) return prevWidths[+dataKey] + percentDelta
        if (+i === +dataKey + 1) return prevWidths[+nextDataKey] - percentDelta
        return w
    }));

    // setWidths({

    //     ...prevWidths,
    //     [+dataKey]: prevWidths[+dataKey] + percentDelta,
    //     [+nextDataKey]: prevWidths[+nextDataKey] - percentDelta,
    // });
}

export default resizeRow