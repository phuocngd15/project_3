import namor from "namor";

export const scrollbarWidth = () => {
    // thanks too https://davidwalsh.name/detect-scrollbar-width
    const scrollDiv = document.createElement("div");
    scrollDiv.setAttribute(
            "style",
            "width: 100px; height: 100px; overflow: scroll; position:absolute; top:-9999px;"
    );
    document.body.appendChild(scrollDiv);
    const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
    return scrollbarWidth;
};

const range = len => {
    const arr = [];
    for (let i = 0; i < len; i++) {
        arr.push(i);
    }
    return arr;
};

const newPerson = () => {
    const statusChance = Math.random();
    const timeStart = Math.floor(Math.random() * 10);
    const timeEnd = Math.floor(Math.random() * 30) + 10;
    return {
        timeStart: timeStart,
        timeEnd: timeEnd,
        actionLabel: namor.generate({words: 1, numbers: 0}),
        timeDuration: timeEnd - timeStart,
        age: Math.floor(Math.random() * 30),
        visits: Math.floor(Math.random() * 100),
        progress: Math.floor(Math.random() * 100),
        status:
                statusChance > 0.66
                        ? "relationship"
                        :statusChance > 0.33
                                ? "complicated"
                                :"single"
    };
};

export const makeData = (...lens) => {
    const makeDataLevel = (depth = 0) => {
        const len = lens[depth];
        return range(len).map(d => {
            return {
                ...newPerson(),
                subRows: lens[depth + 1] ? makeDataLevel(depth + 1):undefined
            };
        });
    };

    return makeDataLevel();
};
