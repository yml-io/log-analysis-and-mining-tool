class LineFormatter {
    constructor() {
        console.log('init clss line_formatter');
    }
    say(t) {
        console.log(`you say: ${t}`);
    }
}

const TIME_FORMAT_STR = /(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\.\d{4}) (\w+) \[([^\]]+)\] (\w+) - (.*)$/;
// const series_re = TIME_FORMAT_STR.compile();

return {
    handler: function(context, next) {
        let text = context.data;
        const df = context.dataFrame;
        text = text.trim();
        const cap_group = TIME_FORMAT_STR.exec(text);
        if (cap_group) {
            re_date = cap_group[1]
            re_level = cap_group[2]
            re_thread_id = cap_group[3]
            re_process = cap_group[4]
            re_message = cap_group[5]

            new_line_unit = [re_date, re_level, re_thread_id, re_process, re_message]
            df.push(new_line_unit);
        }
        else {
            // it can be a line which appended previous line
            if (df.length == 0) {
                df.push(["", "", "", "", ""]);
            }
            const last_index = df.length - 1;
            const last_line = df[last_index];
            last_line[4] += text;
        }
        next();
    }
}