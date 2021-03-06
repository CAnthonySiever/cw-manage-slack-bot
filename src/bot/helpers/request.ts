import * as https from "https";

export async function post(option, body?): Promise<any> {

    return new Promise((resolve, reject) => {

        const request = https.request(option, res => {
            let body = "";

            res.on("error", err => {
                reject(err);
            });

            res.on("data", data => {
                body += data;
            });

            res.on("end", () => {
                resolve(body);
            });

        });

        request.on("error", error => {
            reject(error);
        });

        if (body)
            request.write(body);

        request.end();
    });

}
