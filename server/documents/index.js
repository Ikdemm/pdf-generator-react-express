module.exports = (data) => {
    return `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8">
            <title>Proposal for ${data.applicantFirstName}</title>
        </head>
        <body>
            <h2>Hello ${data.applicantFirstName}</h2>
        </body>
    </html>
    `
}