// 将日期添加到指定长度
function datetimePadToSpecifiedLength(datetime, length) {
    return datetime.toString().padStart(length, "0");
}

// 参数归一化
function formatterTransformFunction(formatter) {
    if (typeof formatter === "function") {
        return formatter;
    } else if (typeof formatter === "string") {
        return function getFormatterReplaceResult(datetimeInfo) {
            const { YYYY, MM, DD, HH, mm, ss } = datetimeInfo;
            const result = formatter
                .replaceAll("YYYY", YYYY)
                .replaceAll("MM", MM)
                .replaceAll("DD", DD)
                .replaceAll("HH", HH)
                .replaceAll("mm", mm)
                .replaceAll("ss", ss);

            return result;
        };
    } else {
        throw new Error("formatter must be a string or a function");
    }
}

export const FORMATTER = {
    DATE: "YYYY-MM-DD",
    TIME: "HH:mm:ss",
    DATETIME: "YYYY-MM-DD HH:mm:ss",
};

/**
 * 格式化日期
 * @param {Date} datetime 时间对象
 * @param {String | Function | FORMATTER} formatter 格式化形式
 * @param {Boolean} pad 是否补全
 * @returns {String}
 */
export function formatDatetime(
    datetime,
    formatter = FORMATTER.DATETIME,
    pad = true
) {
    datetime = new Date(datetime);
    formatter = formatterTransformFunction(formatter);

    const WEEKS = [
        "星期日",
        "星期一",
        "星期二",
        "星期三",
        "星期四",
        "星期五",
        "星期六",
    ];

    const datetimeInfo = {
        year: datetime.getFullYear(),
        month: datetime.getMonth() + 1,
        day: datetime.getDate(),
        hour: datetime.getHours(),
        minute: datetime.getMinutes(),
        second: datetime.getSeconds(),
        week: WEEKS[datetime.getDay()],
    };

    if (pad) {
        datetimeInfo.YYYY = datetimePadToSpecifiedLength(datetimeInfo.year, 4);
        datetimeInfo.MM = datetimePadToSpecifiedLength(datetimeInfo.month, 2);
        datetimeInfo.DD = datetimePadToSpecifiedLength(datetimeInfo.day, 2);
        datetimeInfo.HH = datetimePadToSpecifiedLength(datetimeInfo.hour, 2);
        datetimeInfo.mm = datetimePadToSpecifiedLength(datetimeInfo.minute, 2);
        datetimeInfo.ss = datetimePadToSpecifiedLength(datetimeInfo.second, 2);
    } else {
        datetimeInfo.YYYY = datetimeInfo.year.toString();
        datetimeInfo.MM = datetimeInfo.month.toString();
        datetimeInfo.DD = datetimeInfo.day.toString();
        datetimeInfo.HH = datetimeInfo.hour.toString();
        datetimeInfo.mm = datetimeInfo.minute.toString();
        datetimeInfo.ss = datetimeInfo.second.toString();
    }

    return formatter(datetimeInfo);
}
