const { parse: parseFormadata } = require('querystring');
const ALLOWED_ATTACHMENT_MIMES = (process.env.ALLOWED_ATTACHMENT_MIMES || '').split(',');
const parseContent = rawType => {
    if (!rawType)
        return raw => raw;
    else if (rawType.indexOf('json') > -1)
        return JSON.parse;
    else if (rawType.indexOf('x-www-form-urlencoded') > -1)
        return raw => ({ ...parseFormadata(raw) });
    else if (rawType.indexOf('multipart') > -1)
        return raw => raw;
    else
        return raw => raw;
};
const getRequestBody = (request) => new Promise((resolve, reject) => {
    const contentType = request.headers['content-type'];
    const parser = parseContent(contentType);
    if (parser !== null) {
        let formData;
        request.on('data', data => {
            if (!formData)
                formData = Buffer.from(data);
            else
                formData = Buffer.concat([formData, data]);
        });
        request.on('error', reject);
        request.on('end', () => {
            const parsedData = parser(Buffer.isBuffer(formData) ? formData.toString() : formData);
            return resolve(parsedData);
        });
    }
    else {
    }
});
module.exports = getRequestBody;
